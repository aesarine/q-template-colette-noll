import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "50%",
	"flex": "0 0 auto",
	"lg-margin": "0px 0px 2vw 0px",
	"md-margin": "0px 0px 0px 0px",
	"margin": "0px 0px 24px 0px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"color": "--primary",
			"letter-spacing": ".02em",
			"children": "M.A., Nutrition",
			"font": "--headline5",
			"md-margin": "8px 0px 8px 0px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "--primary",
			"children": "2002 – 2006",
			"letter-spacing": ".02em",
			"font": "--headline6",
			"md-margin": "8px 0px 8px 0px"
		}
	}
};

const PersonalCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(PersonalCard, { ...Box,
	defaultProps,
	overrides
});
export default PersonalCard;