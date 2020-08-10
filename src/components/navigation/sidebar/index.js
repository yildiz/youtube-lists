import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import classnames from 'classnames';

import Menu from '@icons/menu';

import styles from './style.module.css';

const SIDE_MENU_ITEMS = [
	{ text: 'Ana Sayfa', path: '/', active: true },
	{ text: 'Listeler', path: '/lists' },
	{ text: 'lists/create', path: '/lists/create' },
	{ text: 'login', path: '/login' },
	{ text: 'NavbarItem', path: '/a' },
	{ text: 'NavbarItem', path: '/a' },
	{ text: 'NavbarItem', path: '/a' },
	{ text: 'NavbarItem', path: '/a' },
	{ text: 'NavbarItem', path: '/a' },
	{ text: 'NavbarItem', path: '/a' },
];

function Item({ text, path, toggle }) {
	const router = useRouter();
	// console.log(router);

	const current = router.pathname.substring(router.pathname.lastIndexOf('/'));
	if (path.indexOf(current) !== -1) {
		// active = true;
	}

	let isLinkActive = router.pathname === path;

	// if (path.split('/')[1] == router.pathname) {
	if (path.split('/')[1] == router.pathname.split('/')[1]) {
		// active = true;
	}

	console.log('Item', toggle);
	return (
		<Link href={path}>
			<a
				className={classnames(
					styles.item,
					isLinkActive && styles.active,
					toggle && styles.toggle,
				)}>
				{!toggle ? (
					<>
						<Menu width={24} height={24} />
						<span className={styles.itemText}>{text}</span>
					</>
				) : (
					<div className={styles.toggleMenu}>
						<Menu width={24} height={24} />
						<span className={styles.itemText}>{text}</span>
					</div>
				)}
			</a>
		</Link>
	);
}

function Sidebar({ toggle, children }) {
	console.log('Sidebar', toggle);
	return (
		<aside
			className={classnames(
				styles.sidebar,
				toggle && styles.sidebarToggle,
			)}>
			{SIDE_MENU_ITEMS.map((item, key) => (
				<Item {...item} key={key} toggle={toggle} />
			))}
		</aside>
	);
}

export default Sidebar;
