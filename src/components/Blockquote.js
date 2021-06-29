import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
import Paragraph from "./Paragraph";
const defaultProps = {
	"quarkly-title": "Box",
	"margin": "0px 0px 80px 0px",
	"xl-margin": "0px 0px 64px 0px",
	"lg-margin": "0px 0px 48px 0px",
	"md-margin": "0px 0px 36px 0px",
	"sm-margin": "0px 0px 24px 0px"
};
const overrides = {
	"paragraph": {
		"kind": "Paragraph",
		"props": {
			"xl-margin": "0px 0px 24px 0px",
			"lg-margin": "0px 0px 20px 0px",
			"md-margin": "0px 0px 16px 0px",
			"sm-margin": "0px 0px 8px 0px",
			"children": "\"Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.\""
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 400 20px/1.8 --fontFamily-googleLibreCaslonDisplay",
			"letter-spacing": ".02em",
			"color": "--primary",
			"margin": "0px 0px 0px 0px",
			"children": "Some Text"
		}
	}
};

const Blockquote = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Paragraph {...override("paragraph")} />
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(Blockquote, { ...Box,
	defaultProps,
	overrides
});
export default Blockquote;