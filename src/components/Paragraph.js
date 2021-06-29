import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"font": "--headline3",
	"color": "--primary",
	"letter-spacing": ".02em",
	"children": "Some Text",
	"lg-font": "normal 400 24px/1.3 \"Libre Caslon Display\", serif",
	"xl-font": "normal 400 30px/1.3 \"Libre Caslon Display\", serif",
	"md-font": "normal 400 20px/1.3 \"Libre Caslon Display\", serif",
	"margin": "0px 0px 32px 0px"
};
const overrides = {};

const Paragraph = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Paragraph, { ...Text,
	defaultProps,
	overrides
});
export default Paragraph;