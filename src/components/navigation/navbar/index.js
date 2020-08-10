import React, { useEffect } from 'react';
import styles from './style.module.css';
import classnames from 'classnames';

import InputText from '@components/input-text';

import Menu from '@icons/menu';
import User from '@icons/user';
import Logo from '@icons/logo';
import { useAuth } from '@providers/Auth';
import { LinkButton } from '@components/button';
import Text from '@components/text';

export default function NavBar({ changeStatus }) {
	const { user, isAuthenticated } = useAuth();

	const handleToggleSidebar = () => changeStatus();

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbar}>
				<div className={styles.navbarItem}>
					<div onClick={handleToggleSidebar}>
						<Menu
							width={24}
							height={24}
							style={{ color: '#fff', marginRight: 23 }}
						/>
					</div>
					<Logo width={80} height={24} style={{ color: '#fff' }} />
				</div>
				<div
					className={styles.navbarItem}
					style={{ flex: '0 1 566px' }}>
					<InputText placeholder={'Ara'} />
				</div>
				{isAuthenticated === true ? (
					<div className={styles.navbarItem}>
						<LinkButton
							href={'#'}
							color="transparent"
							textColor="white"
							mr={10}>
							{user?.name}
						</LinkButton>
						<LinkButton href={'/logout'} color="gray" mr={10}>
							OTURUMU KAPAT
						</LinkButton>
					</div>
				) : (
					// <LinkButton href={'/login'} icon={<User />}>
					<div className={styles.navbarItem}>
						<LinkButton href={'/login'} color="transparent" mr={10}>
							KAYIT OL
						</LinkButton>
						<LinkButton href={'/login'} border="blue" color="blue">
							<User
								width={24}
								height={24}
								style={{
									marginRight: 10,
								}}
							/>
							OTURUM AÇ
						</LinkButton>
					</div>
				)}
			</div>
		</div>
	);
}
