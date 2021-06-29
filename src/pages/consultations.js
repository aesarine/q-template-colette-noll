import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"consultations"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderBlock />
		<Section
			padding="96px 0 96px 0"
			xl-padding="80px 0 52px 0"
			lg-padding="64px 0 36px 0"
			md-padding="48px 0 24px 0"
			sm-padding="36px 0 16px 0"
		>
			<Override slot="SectionContent" max-width="800px" />
			<Text font="--paragraph" color="--primary" margin="0px 0px 24px 0px" letter-spacing=".02em">
				Book a Free Consultation
			</Text>
			<Components.Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</Components.Paragraph>
		</Section>
		<Section padding="0 0 8vw 0">
			<Override slot="SectionContent" flex-direction="row" max-width="800px" sm-flex-direction="column" />
			<Box max-width="220px" sm-max-width="100%" sm-margin="0px 0px 24px 0px">
				<Text letter-spacing=".02em" font="--paragraph" margin="0px 0px 0px 0px">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
				</Text>
			</Box>
			<Box width="100%" margin="0px 0px 0px 10vw" sm-margin="0px 0px 0px 0px">
				<Components.CustomForm display="grid" grid-template-columns="repeat(2, 1fr)" grid-gap="24px 8px">
					<Components.CustomInput grid-area="1 / 1 / 2 / 2">
						<Override slot="text">
							Name *
						</Override>
						<Override slot="text1">
							First Name
						</Override>
					</Components.CustomInput>
					<Components.CustomInput grid-area="1 / 2 / 2 / 3">
						<Override slot="text1">
							Last Name
						</Override>
						<Override slot="text" display="none" />
					</Components.CustomInput>
					<Components.CustomInput grid-area="2 / 1 / 3 / 3">
						<Override slot="text1" display="none" />
						<Override slot="text">
							Email *
						</Override>
					</Components.CustomInput>
					<Components.CustomInput grid-area="3 / 1 / 4 / 3">
						<Override slot="text1" display="none" />
						<Override slot="text">
							Subject *
						</Override>
					</Components.CustomInput>
					<Components.CustomInput grid-area="4 / 1 / 6 / 3">
						<Override slot="text1" display="none" />
						<Override slot="text">
							Message *
						</Override>
						<Override slot="input" as="textarea" height="100px" resize="none" />
					</Components.CustomInput>
					<Box grid-area="6 / 1 / 7 / 3">
						<Components.CustomButton>
							Submit
						</Components.CustomButton>
					</Box>
				</Components.CustomForm>
			</Box>
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