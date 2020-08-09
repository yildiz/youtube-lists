import React from 'react';
import api from '@api/api';

const AuthContext = React.createContext({
	isAuthenticated: false,
	setAuthenticated: () => {},
});

/**
 * The initial value of `isAuthenticated` comes from the `authenticated`
 * prop which gets set by _app. We store that value in state and ignore
 * the prop from then on. The value can be changed by calling the
 * `setAuthenticated()` method in the context.
 */
export const AuthProvider = ({ children, authenticated }) => {
	const [user, setUser] = React.useState(null);
	const [isAuthenticated, setAuthenticated] = React.useState(authenticated);

	React.useEffect(() => {
		if (isAuthenticated) getUser();
	}, [isAuthenticated]);

	const getUser = async () => {
		await api
			.get('users/me')
			.then(({ data }) => {
				console.log('post', data);
				setUser(data);
			})
			.catch((error) => {
				console.error(error);
				logout();
			});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				setAuthenticated,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}

export function useIsAuthenticated() {
	const context = useAuth();
	return context.isAuthenticated;
}
