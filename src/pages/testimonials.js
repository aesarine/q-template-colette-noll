import React from "react";
import theme from "theme";
import { Theme, Link, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"testimonials"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderBlock />
		<Section
			padding="96px 0 24px 0"
			xl-padding="80px 0 20px 0"
			lg-padding="64px 0 16px 0"
			md-padding="48px 0 8px 0"
			sm-padding="36px 0 0px 0"
		>
			<Override slot="SectionContent" max-width="800px" />
			<Components.Blockquote>
				<Override slot="paragraph">
					"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
				</Override>
				<Override slot="text">
					– Quote Source
				</Override>
			</Components.Blockquote>
			<Components.Blockquote
				lg-margin="0px 0px 48px 0px"
				margin="0px 0px 80px 0px"
				md-margin="0px 0px 36px 0px"
				sm-margin="0px 0px 24px 0px"
				xl-margin="0px 0px 64px 0px"
			>
				<Override slot="paragraph" />
				<Override slot="text">
					– Quote Source
				</Override>
			</Components.Blockquote>
			<Components.Blockquote>
				<Override slot="paragraph">
					"Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does."
				</Override>
				<Override slot="text">
					– Quote Source
				</Override>
			</Components.Blockquote>
		</Section>
		<Components.FooterBlock />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60d98a01344a590020ae01d6"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});