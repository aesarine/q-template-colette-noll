import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"color": "--bgcolor1",
	"background": "--bground3",
	"font": "--paragraph",
	"padding": "12px 32px 12px 32px",
	"children": "Book a Consultation",
	"focus-box-shadow": "none",
	"letter-spacing": ".02em"
};
const overrides = {};

const CustomButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(CustomButton, { ...Button,
	defaultProps,
	overrides
});
export default CustomButton;