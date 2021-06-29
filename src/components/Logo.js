import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Logo",
	"display": "flex",
	"align-items": "center",
	"font": "--headline1",
	"color": "--primary",
	"letter-spacing": ".02em",
	"children": <Link href="/" text-decoration-line="initial" color="--primary" flex="0 0 auto">
		Colette Noll
	</Link>
};
const overrides = {};

const Logo = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Logo, { ...Box,
	defaultProps,
	overrides
});
export default Logo;