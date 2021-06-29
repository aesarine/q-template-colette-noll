import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Input, Box } from "@quarkly/widgets";
const defaultProps = {
	"align-self": "end"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--paragraph",
			"margin": "0px 0px 6px 0px",
			"color": "--primary",
			"letter-spacing": ".02em",
			"children": "Some text *"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"color": "--primary",
			"letter-spacing": ".02em",
			"font": "--paragraph",
			"width": "100%",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "--color-secondary",
			"border-radius": "2px",
			"background": "--bground1"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline6",
			"color": "--primary",
			"letter-spacing": ".02em",
			"margin": "4px 0px 0px 0px",
			"children": "Some text"
		}
	}
};

const CustomInput = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Input {...override("input")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(CustomInput, { ...Box,
	defaultProps,
	overrides
});
export default CustomInput;