import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import styles from './style.module.css';

export function LinkButton({
	color = 'gray',
	textColor = 'gray',
	border = '',
	href,
	style,
	icon,
	ml = 0,
	mr = 0,
	children,
	multi,
}) {
	console.log(icon);
	return (
		<Link href={href}>
			<a
				className={classnames(
					styles.button,
					styles.linkButton,
					styles[color],
					styles['text-' + textColor],
					styles['border-' + border],
				)}
				style={{ ...style, marginRight: mr, marginLeft: ml }}>
				{children}
			</a>
		</Link>
	);
}

export default function Button({
	buttonType,
	color = 'gray',
	style,
	ml = 0,
	mr = 0,
	children,
	single,
}) {
	// const DynamicButton = buttonType || 'React.Fragment';
	const DynamicButton = buttonType || 'div';
	return (
		<DynamicButton
			className={classnames(styles.button, styles[color])}
			style={{ ...style, marginRight: mr, marginLeft: ml }}>
			{children}
		</DynamicButton>
	);
}
