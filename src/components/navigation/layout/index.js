import React from 'react';

import Head from 'next/head';
import Navbar from '@components/navigation/navbar';
import Sidebar from '@components/navigation/sidebar';

export default function Layout({ title = 'Page', children }) {
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
			<Navbar />
			<div className="content" style={{ marginTop: 56, display: 'flex' }}>
				<Sidebar />
				<main
					style={{
						flex: 1,
						overflow: 'auto',
						padding: 20,
						marginLeft: '16.5%',
					}}>
					{children}
				</main>
			</div>
		</>
	);
}
