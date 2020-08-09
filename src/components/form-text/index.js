import React from 'react';
import classnames from 'classnames';

import Text from '@components/text';

export function FormText({ children, ...props }) {
	return (
		<div style={{ marginBottom: 5 }}>
			<Text style={{ fontSize: '1.4rem' }} {...props}>
				{children}
			</Text>
		</div>
	);
}

export default FormText;
