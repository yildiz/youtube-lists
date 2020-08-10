import { useState, useEffect } from 'react';

import useLocalStorage from '@hooks/useLocalStorage';
export default function useSidebar() {
	const [local, setLocal] = useLocalStorage('hideSidebar', null);
	const [isSidebarActive, setIsSidebarActive] = useState(null);

	useEffect(() => {
		changeStatus(local);
		return () => {
			// changeStatus(local); // null olabilir
		};
	}, []);

	useEffect(() => {
		changeStatus(local);
		return () => {
			// changeStatus(null);
		};
	}, [isSidebarActive]);

	const changeStatus = (state) => {
		// console.log('changeStatus', isSidebarActive, '=>', state);
		setLocal(state);
		setIsSidebarActive(state);
	};

	return { isSidebarActive, changeStatus };
}
