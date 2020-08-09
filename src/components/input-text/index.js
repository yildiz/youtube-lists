import React from 'react';
import classnames from 'classnames';

import styles from './style.module.css';

function InputText(props) {
	return (
		<input type="text" className={classnames(styles.input)} {...props} />
	);
}

export default InputText;
