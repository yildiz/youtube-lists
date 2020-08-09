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

function Item({ text, path }) {
	const router = useRouter();
	// console.log(router);

	const current = router.pathname.substring(router.pathname.lastIndexOf('/'));
	if (path.indexOf(current) !== -1) {
		// active = true;
	}

	let active = router.pathname === path;

	// if (path.split('/')[1] == router.pathname) {
	if (path.split('/')[1] == router.pathname.split('/')[1]) {
		// active = true;
	}

	return (
		<Link href={path}>
			<a className={classnames(styles.item, active && styles.active)}>
				<Menu
					width={24}
					height={24}
					style={{
						color: active
							? 'var(--primary-text-color:)'
							: 'var(--aside-inactive-text-color)',
					}}
				/>
				<span className={styles.itemText}>{text}</span>
			</a>
		</Link>
	);
}

function Sidebar({ children }) {
	return (
		<aside className={styles.sidebar}>
			{SIDE_MENU_ITEMS.map((item, key) => (
				<Item {...item} key={key} />
			))}
		</aside>
	);
}

export default Sidebar;
