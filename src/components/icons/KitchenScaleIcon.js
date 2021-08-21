import {SvgIcon} from '@material-ui/core';
import {useTheme} from "@emotion/react";
import PropTypes from "prop-types";

const KitchenScaleIcon = (props) => {
	const {fontSize, color, ...otherProps} = props;
	const theme = useTheme();
	let getColor = color && color.includes("text.") ? theme.palette.text[color.replace("text.", "")] : color;
	return (
			<SvgIcon style={{fontSize: fontSize, color: getColor}} color={"primary"} {...otherProps}>
				<g id="Stockholm-icons-/-Cooking-/-Kitchen-scale" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<rect id="bound" x="0" y="0" width="24" height="24"/>
					<path
							d="M5,8 L19,8 C20.1045695,8 21,8.8954305 21,10 L21,20 C21,21.1045695 20.1045695,22 19,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,10 C3,8.8954305 3.8954305,8 5,8 Z M12,20 C14.7614237,20 17,17.7614237 17,15 C17,12.2385763 14.7614237,10 12,10 C9.23857625,10 7,12.2385763 7,15 C7,17.7614237 9.23857625,20 12,20 Z M11.5730613,13.5616319 L12,11 L12.4269387,13.5616319 C13.0473823,13.7455122 13.5,14.3198988 13.5,15 C13.5,15.8284271 12.8284271,16.5 12,16.5 C11.1715729,16.5 10.5,15.8284271 10.5,15 C10.5,14.3198988 10.9526177,13.7455122 11.5730613,13.5616319 Z"
							id="Combined-Shape" fill="currentColor"/>
					<path
							d="M14,6 L14,8 L10,8 L10,6 L7.80277564,6 C6.67650121,6 5.62474465,5.43711697 5,4.5 L4.5182334,3.7773501 C4.36505717,3.54758575 4.4271441,3.23715108 4.65690845,3.08397485 C4.73904221,3.02921901 4.83554605,3 4.93425855,3 L19.0657415,3 C19.3418838,3 19.5657415,3.22385763 19.5657415,3.5 C19.5657415,3.59871249 19.5365224,3.69521634 19.4817666,3.7773501 L19,4.5 C18.3752554,5.43711697 17.3234988,6 16.1972244,6 L14,6 Z"
							id="Combined-Shape" fill="currentColor" opacity="0.3"/>
				</g>
			</SvgIcon>
	);
};
KitchenScaleIcon.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string
};
export default KitchenScaleIcon;