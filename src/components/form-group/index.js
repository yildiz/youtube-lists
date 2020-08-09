import React from 'react';
import classnames from 'classnames';

import styles from './style.module.css';

function FormGroup({ children, ...props }) {
	return (
		<div className={styles.formGroup} {...props}>
			{children}
		</div>
	);
}

export default FormGroup;
