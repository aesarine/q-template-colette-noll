import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Box, Section } from "@quarkly/widgets";
import Logo from "./Logo";
import QuarklycommunityKitMenu from "./QuarklycommunityKitMenu";
import SocialLinkIcon from "./SocialLinkIcon";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const defaultProps = {
	"quarkly-title": "Header",
	"padding": "24px 0 24px 0"
};
const overrides = {
	"logo": {
		"kind": "Logo",
		"props": {}
	},
	"quarklycommunityKitMobileSidePanel": {
		"kind": "QuarklycommunityKitMobileSidePanel",
		"props": {
			"min-width": "none",
			"menuPosition": "full",
			"breakpoint": "md",
			"animDuration": "0s",
			"animFunction": "step-start"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"background": "none",
			"sm-background": "--bground2",
			"md-background": "--bground2",
			"md-padding": "24px 0px 36px 0px",
			"md-align-items": "center",
			"padding": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Children",
			"md-height": "100%",
			"md-width": "90%"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Cross",
			"md-top": "30px",
			"md-right": "calc(5% + 3px)"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Button Text",
			"md-display": "none"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Menu",
			"display": "flex",
			"flex-direction": "row",
			"justify-content": "flex-end",
			"align-items": "center",
			"md-flex-direction": "column",
			"md-justify-content": "space-between",
			"md-align-items": "center",
			"md-height": "100%"
		}
	},
	"logo1": {
		"kind": "Logo",
		"props": {
			"display": "none",
			"md-display": "block",
			"md-width": "100%"
		}
	},
	"quarklycommunityKitMenu": {
		"kind": "QuarklycommunityKitMenu",
		"props": {
			"md-display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"quarklycommunityKitMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"font": "--menu",
			"display": "inline-block",
			"color": "--primary",
			"opacity": "1",
			"transition": "--opacity",
			"hover-opacity": "0.5",
			"padding": "4px 12px 4px 12px"
		}
	},
	"quarklycommunityKitMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration-line": "initial",
			"letter-spacing": ".02em",
			"display": "inline-block",
			"padding": "8px 0px 8px 0px",
			"border-width": "0 0 1px 0",
			"border-style": "solid",
			"border-color": "transparent",
			"md-font": "36px/16px \"Libre Caslon Display\", serif",
			"md-padding": "24px 0px 24px 0px"
		}
	},
	"quarklycommunityKitMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"border-color": "--color-primary"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "center"
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
	}
};

const HeaderBlock = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			flex-direction="row"
			justify-content="space-between"
			align-items="center"
			md-height="52px"
			height="52px"
		/>
		<Logo {...override("logo")} />
		<QuarklycommunityKitMobileSidePanel {...override("quarklycommunityKitMobileSidePanel")}>
			<Override {...override("quarklycommunityKitMobileSidePanelOverride")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride1")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride2")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride3")} />
			<Box {...override("box")}>
				<Logo {...override("logo1")} />
				<QuarklycommunityKitMenu {...override("quarklycommunityKitMenu")}>
					<Override {...override("quarklycommunityKitMenuOverride")} />
					<Override {...override("quarklycommunityKitMenuOverride1")} />
					<Override {...override("quarklycommunityKitMenuOverride2")} />
					<Override {...override("quarklycommunityKitMenuOverride3")} />
				</QuarklycommunityKitMenu>
				<Box {...override("box1")}>
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
			</Box>
		</QuarklycommunityKitMobileSidePanel>
		{children}
	</Section>;
};

Object.assign(HeaderBlock, { ...Section,
	defaultProps,
	overrides
});
export default HeaderBlock;