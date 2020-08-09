import * as React from 'react';

function SvgComponent(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			className="prefix__style-scope prefix__yt-icon"
			style={{
				width: '100%',
				height: '100%'
			}}
			pointerEvents="none"
			display="block"
			{...props}
		>
			<g className="prefix__style-scope prefix__yt-icon">
				<path
					fill="currentColor"
					d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
					className="prefix__style-scope prefix__yt-icon"
				/>
			</g>
		</svg>
	);
}

export default SvgComponent;
