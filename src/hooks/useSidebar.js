import React, { useState, useEffect } from 'react';

import useLocalStorage from '@hooks/useLocalStorage';

const SidebarContext = React.createContext({
	isSidebarActive: false,
	setIsSidebarActive: () => {},
});

export const SidebarProvider = ({ children }) => {
	const [localStorage, setLocalStorage] = useLocalStorage(
		'toggleSidebar',
		false,
	);
	const [isSidebarActive, setIsSidebarActive] = useState(localStorage);

	useEffect(() => {
		changeStatus(true);
		return () => {
			changeStatus(null);
		};
	}, []);

	const changeStatus = (state) => {
		console.log('changeStatus', isSidebarActive, '=>', state);

		console.log('setLocalStorage', setLocalStorage);
		setLocalStorage(state);
		setIsSidebarActive(state);
	};

	// return { isSidebarActive, changeStatus };

	return (
		<SidebarContext.Provider
			value={{
				isSidebarActive,
				changeStatus: setIsSidebarActive,
			}}>
			{children}
		</SidebarContext.Provider>
	);
};

export default function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (context === undefined) {
		throw new Error('useSidebar must be used within an AuthProvider');
	}
	return context;
}
