import * as React from 'react';

function SvgComponent(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			className="prefix__style-scope prefix__yt-icon"
			style={{
				width: '24px',
				height: '24px',
			}}
			pointerEvents="none"
			display="block"
			{...props}>
			<g className="prefix__style-scope prefix__yt-icon">
				<path
					fill="currentColor"
					d="M12 0c6.624 0 12 5.376 12 12s-5.376 12-12 12S0 18.624 0 12 5.376 0 12 0zm0 10.636c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 1.773c-3.666 0-6.545 1.772-6.545 3.409A7.811 7.811 0 0012 19.363a7.811 7.811 0 006.545-3.545c0-1.637-2.879-3.41-6.545-3.41z"
					className="prefix__style-scope prefix__yt-icon"
				/>
			</g>
		</svg>
	);
}

export default SvgComponent;
