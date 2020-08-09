import { useEffect } from 'react';
import { useAuth } from '@providers/Auth';
import withAuth from '@hocs/withAuth';

import api from '@api/api';

export default withAuth(function Logout() {
	const { setAuthenticated } = useAuth();
	useEffect(() => {
		async function doLogout() {
			await api.get('auth/logout').then((response) => {
				if (response.status === 200) {
					setAuthenticated(false);
				} else {
					console.error('Failed to logout', response);
				}
			});
		}
		doLogout();
	}, [setAuthenticated]);
	return <h1>Logging out</h1>;
}, '/');
