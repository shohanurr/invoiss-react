
const OrderManagementIcon = (props) => {
	const {className, ...otherProps} = props;
	return (
			<div className={"custom-icon" + (props.className ? ' ' : '') + props.className} {...otherProps}>
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
					{/*Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch*/}
					<title></title>
					<desc></desc>
					<g id="Stockholm-icons-/-Devices-/-Display#1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<rect id="bound" x="0" y="0" width="24" height="24"></rect>
						<path d="M11,20 L11,17 C11,16.4477153 11.4477153,16 12,16 C12.5522847,16 13,16.4477153 13,17 L13,20 L15.5,20 C15.7761424,20 16,20.2238576 16,20.5 C16,20.7761424 15.7761424,21 15.5,21 L8.5,21 C8.22385763,21 8,20.7761424 8,20.5 C8,20.2238576 8.22385763,20 8.5,20 L11,20 Z" id="Combined-Shape" fill="#335EEA" opacity="0.3"></path>
						<path d="M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 L22,16 C22,16.5522847 21.5522847,17 21,17 L3,17 C2.44771525,17 2,16.5522847 2,16 L2,6 C2,5.44771525 2.44771525,5 3,5 Z M4.5,8 C4.22385763,8 4,8.22385763 4,8.5 C4,8.77614237 4.22385763,9 4.5,9 L13.5,9 C13.7761424,9 14,8.77614237 14,8.5 C14,8.22385763 13.7761424,8 13.5,8 L4.5,8 Z M4.5,10 C4.22385763,10 4,10.2238576 4,10.5 C4,10.7761424 4.22385763,11 4.5,11 L7.5,11 C7.77614237,11 8,10.7761424 8,10.5 C8,10.2238576 7.77614237,10 7.5,10 L4.5,10 Z" id="Combined-Shape" fill="#335EEA"></path>
					</g>
				</svg>
			</div>
	);
};

export default OrderManagementIcon;