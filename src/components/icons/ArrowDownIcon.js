import {SvgIcon} from '@material-ui/core';
import {useTheme} from "@emotion/react";
import PropTypes from "prop-types";

const ArrowDownIcon = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
				<g id="Stockholm-icons-/-Navigation-/-Arrow-from-top" stroke="none" strokeWidth="1" fill="none"
				   fillRule="evenodd">
					<polygon id="Shape" points="0 0 24 0 24 24 0 24"/>
					<rect id="Rectangle" fill="currentColor" opacity="0.3" x="11" y="7" width="2" height="14" rx="1"/>
					<path
							d="M6.70710678,20.7071068 C6.31658249,21.0976311 5.68341751,21.0976311 5.29289322,20.7071068 C4.90236893,20.3165825 4.90236893,19.6834175 5.29289322,19.2928932 L11.2928932,13.2928932 C11.6714722,12.9143143 12.2810586,12.9010687 12.6757246,13.2628459 L18.6757246,18.7628459 C19.0828436,19.1360383 19.1103465,19.7686056 18.7371541,20.1757246 C18.3639617,20.5828436 17.7313944,20.6103465 17.3242754,20.2371541 L12.0300757,15.3841378 L6.70710678,20.7071068 Z"
							id="Path-94" fill="currentColor"
							transform="translate(12.000003, 16.999999) scale(1, -1) translate(-12.000003, -16.999999) "/>
					<rect id="Rectangle-199-Copy" fill="currentColor" opacity="0.3" x="3" y="3" width="18" height="2" rx="1"/>
				</g>
			</SvgIcon>
	);
};
ArrowDownIcon.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default ArrowDownIcon;