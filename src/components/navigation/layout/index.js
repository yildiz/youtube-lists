import React, { useEffect } from 'react';

import Head from 'next/head';
import Navbar from '@components/navigation/navbar';
import Sidebar from '@components/navigation/sidebar';
import useSidebar from '@hooks/useSidebar2';

export default function Layout({ title = 'Page', children }) {
	const { isSidebarActive, setIsSidebarActive, changeStatus } = useSidebar();

	console.log('useSidebar()', useSidebar());

	let show = null;

	useEffect(() => {
		console.log('----isSidebarActive----', isSidebarActive);
	}, [isSidebarActive]);

	const handleToggleSidebar = () => changeStatus(!isSidebarActive);

	// TODO: https://stackoverflow.com/questions/57126760/nextjs-dynamic-title
	return (
		<>
			<Head>
				<title>{title} &mdash; YTL</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<Navbar changeStatus={handleToggleSidebar} />
			<div className="content" style={{ marginTop: 56, display: 'flex' }}>
				{/* {isSidebarActive && <Sidebar />} */}
				<Sidebar toggle={isSidebarActive} />
				<main
					onClick={handleToggleSidebar}
					style={{
						flex: 1,
						overflow: 'auto',
						padding: 20,
						// marginLeft: !isSidebarActive ? '16.5%' : '7.5%',
						marginLeft: !isSidebarActive ? '15%' : '7.5%',
					}}>
					{children}
				</main>
			</div>
		</>
	);
}
