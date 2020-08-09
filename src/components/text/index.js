import React from 'react';
import classnames from 'classnames';

import styles from './style.module.css';

export function Title({ children }) {
	return (
		<div className={styles.titleWrapper}>
			<span className={classnames(styles.text, styles.title)}>
				{children}
			</span>
		</div>
	);
}

export default function Text({ title, as = 'span', children, style }) {
	const ComponentType = as || 'span';
	return (
		<ComponentType
			className={classnames(styles.text, title && styles.title)}
			style={style}>
			{children}
		</ComponentType>
	);
}
