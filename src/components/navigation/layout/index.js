import React from 'react';
import Navbar from '@components/navigation/navbar';
import Sidebar from '@components/navigation/sidebar';

export default function Layout({ children }) {
	return (
		<>
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
