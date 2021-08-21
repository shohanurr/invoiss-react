const InventoryIcon = (props) => {
	const {className, ...otherProps} = props;
	return (
			<div className={"custom-icon" + (props.className ? ' ' : '') + props.className} {...otherProps}>
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
					{/*Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch*/}
					<title></title>
					<desc></desc>
					<g id="Stockholm-icons-/-Shopping-/-Barcode" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<rect id="bound" x="0" y="0" width="24" height="24"></rect>
						<path d="M13,5 L15,5 L15,20 L13,20 L13,5 Z M5,5 L5,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,6 C2,5.44771525 2.44771525,5 3,5 L5,5 Z M16,5 L18,5 L18,20 L16,20 L16,5 Z M20,5 L21,5 C21.5522847,5 22,5.44771525 22,6 L22,19 C22,19.5522847 21.5522847,20 21,20 L20,20 L20,5 Z" id="Combined-Shape" fill="#335EEA"></path>
						<polygon id="Path" fill="#335EEA" opacity="0.3" points="9 5 9 20 7 20 7 5"></polygon>
					</g>
				</svg>
			</div>
	);
};

export default InventoryIcon;