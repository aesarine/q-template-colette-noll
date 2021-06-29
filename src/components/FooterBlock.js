import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Box, Text, Link, Section } from "@quarkly/widgets";
import SocialLinkIcon from "./SocialLinkIcon";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const defaultProps = {
	"quarkly-title": "Footer",
	"md-padding": "30px 0 30px 0",
	"padding": "64px 0 64px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"quarkly-title": "Socials"
		}
	},
	"socialLinkIcon": {
		"kind": "SocialLinkIcon",
		"props": {}
	},
	"socialLinkIconOverride": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"category": "fa",
			"icon": FaInstagram,
			"size": "18px"
		}
	},
	"socialLinkIcon1": {
		"kind": "SocialLinkIcon",
		"props": {}
	},
	"socialLinkIconOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"category": "fa",
			"icon": FaFacebookF
		}
	},
	"socialLinkIcon2": {
		"kind": "SocialLinkIcon",
		"props": {}
	},
	"socialLinkIconOverride2": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"category": "fa",
			"icon": FaTwitter
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--paragraph",
			"text-align": "center",
			"quarkly-title": "Copyright",
			"color": "--primary",
			"letter-spacing": ".02em",
			"children": <>
				Made with{" "}
				<Link
					href="#"
					color="--accent"
					transition="--color"
					hover-color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Quarkly
				</Link>
			</>
		}
	}
};

const FooterBlock = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<SocialLinkIcon {...override("socialLinkIcon")}>
				<Override {...override("socialLinkIconOverride")} />
			</SocialLinkIcon>
			<SocialLinkIcon {...override("socialLinkIcon1")}>
				<Override {...override("socialLinkIconOverride1")} />
			</SocialLinkIcon>
			<SocialLinkIcon {...override("socialLinkIcon2")}>
				<Override {...override("socialLinkIconOverride2")} />
			</SocialLinkIcon>
		</Box>
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(FooterBlock, { ...Section,
	defaultProps,
	overrides
});
export default FooterBlock;