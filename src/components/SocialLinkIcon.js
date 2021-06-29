import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Link } from "@quarkly/widgets";
import { FaInfo } from "react-icons/fa";
const defaultProps = {
	"href": "#",
	"color": "--primary",
	"transition": "--opacity",
	"hover-opacity": "0.5",
	"opacity": "1",
	"display": "inline-block",
	"padding": "10px 10px 10px 10px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"size": "16px",
			"category": "fa",
			"icon": FaInfo
		}
	}
};

const SocialLinkIcon = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		<Icon {...override("icon")} />
		{children}
	</Link>;
};

Object.assign(SocialLinkIcon, { ...Link,
	defaultProps,
	overrides
});
export default SocialLinkIcon;