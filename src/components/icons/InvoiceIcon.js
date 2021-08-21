const InvoiceIcon = (props) => {
	const {className, ...otherProps} = props;
	return (
			<div className={"custom-icon" + (props.className ? ' ' : '') + props.className} {...otherProps}>
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
					{/*Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch*/}
					<title></title>
					<desc></desc>
					<g id="Stockholm-icons-/-Files-/-File" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
						<path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" id="Combined-Shape" fill="#335EEA" opacity="0.3"></path>
						<rect id="Rectangle" fill="#335EEA" x="6" y="11" width="9" height="2" rx="1"></rect>
						<rect id="Rectangle-Copy" fill="#335EEA" x="6" y="15" width="5" height="2" rx="1"></rect>
					</g>
				</svg>
			</div>
	);
};

export default InvoiceIcon;