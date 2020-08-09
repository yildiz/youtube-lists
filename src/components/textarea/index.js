import React from 'react';
import classnames from 'classnames';

import styles from './style.module.css';

function TextArea(props) {
	return <textarea className={classnames(styles.input)} {...props} />;
}

export default TextArea;
