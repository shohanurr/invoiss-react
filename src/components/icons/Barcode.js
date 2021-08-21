import {SvgIcon} from '@material-ui/core';
import {useTheme} from "@emotion/react";
import PropTypes from "prop-types";

const Barcode = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}}  color={"primary"} {...otherProps}>
				<g id="Stockholm-icons-/-Shopping-/-Barcode-scan" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<rect id="bound" x="0" y="0" width="24" height="24"/>
					<path d="M15,9 L13,9 L13,5 L15,5 L15,9 Z M15,15 L15,20 L13,20 L13,15 L15,15 Z M5,9 L2,9 L2,6 C2,5.44771525 2.44771525,5 3,5 L5,5 L5,9 Z M5,15 L5,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,15 L5,15 Z M18,9 L16,9 L16,5 L18,5 L18,9 Z M18,15 L18,20 L16,20 L16,15 L18,15 Z M22,9 L20,9 L20,5 L21,5 C21.5522847,5 22,5.44771525 22,6 L22,9 Z M22,15 L22,19 C22,19.5522847 21.5522847,20 21,20 L20,20 L20,15 L22,15 Z" id="Combined-Shape" fill="currentColor"/>
					<path d="M9,9 L7,9 L7,5 L9,5 L9,9 Z M9,15 L9,20 L7,20 L7,15 L9,15 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"/>
					<rect id="Rectangle-200" fill="currentColor" opacity="0.3" x="0" y="11" width="24" height="2" rx="1">
					</rect>
				</g>
			</SvgIcon>
	);
};
Barcode.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default Barcode;