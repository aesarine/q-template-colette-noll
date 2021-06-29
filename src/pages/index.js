import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderBlock />
		<Section padding="64px 0 48px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				font="--headline2"
				text-align="center"
				max-width="840px"
				letter-spacing=".02em"
				color="--primary"
				margin="0px 0px 16px 0px"
				lg-font="normal 400 36px/1.3 &quot;Libre Caslon Display&quot;, serif"
				xl-font="normal 400 42px/1.3 &quot;Libre Caslon Display&quot;, serif"
				xl-max-width="720px"
				md-font="normal 400 26px/1.3 &quot;Libre Caslon Display&quot;, serif"
				lg-max-width="720px"
			>
				Colette Noll is a New York-based Personal Chef and Nutritionist, focusing on healthy eating.
			</Text>
			<Text
				font="--headline4"
				letter-spacing=".02em"
				margin="16px 0px 32px 0px"
				color="--primary"
				md-font="italic 400 18px/1.3 &quot;Libre Caslon Display&quot;, serif"
			>
				She is currently available for hire.
			</Text>
			<Components.CustomButton />
		</Section>
		<Section padding="48px 0 48px 0" md-padding="24px 0 36px 0">
			<Image src="https://uploads.quarkly.io/60d98a01344a590020ae01d8/images/image-1.jpeg?v=2021-06-28T10:15:22.971Z" object-fit="cover" />
		</Section>
		<Section padding="48px 0 0px 0" md-padding="36px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box flex="1 0 auto">
				<Text font="--paragraph" color="--primary" letter-spacing=".02em" margin="0px 0px 0px 0px">
					My Background
				</Text>
			</Box>
			<Box max-width="66.66%">
				<Components.Paragraph margin="0px 0px 48px 0px">
					I’m an intuitive chef who learned by doing, helping my mother and aunt cook elaborate family meals from the time I was old enough to hold a spoon. Those early experiences led me to pursue an M.A. in Nutrition and I now combine my love of food and healthy living to help clients live and eat better.
				</Components.Paragraph>
				<Box display="flex" justify-content="space-between" flex-wrap="wrap">
					<Components.PersonalCard />
					<Components.PersonalCard width="50%" flex="0 0 auto">
						<Override slot="text">
							Personal Chef
						</Override>
						<Override slot="text1">
							2006 – 2012
						</Override>
					</Components.PersonalCard>
					<Components.PersonalCard width="50%" flex="0 0 auto">
						<Override slot="text">
							Sous Chef
						</Override>
						<Override slot="text1">
							2012 – 2015
						</Override>
					</Components.PersonalCard>
					<Components.PersonalCard width="50%" flex="0 0 auto">
						<Override slot="text">
							Consultant for Hire
						</Override>
						<Override slot="text1">
							2015 – Present
						</Override>
					</Components.PersonalCard>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0" md-padding="36px 0 36px 0">
			<Override slot="SectionContent" width="100%" max-width="100%" />
			<Image src="https://uploads.quarkly.io/60d98a01344a590020ae01d8/images/image-3.jpg?v=2021-06-28T10:15:22.987Z" object-fit="cover" />
		</Section>
		<Section padding="64px 0 64px 0" md-padding="36px 0 36px 0" lg-padding="48px 0 48px 0">
			<Override slot="SectionContent" max-width="960px" />
			<Box
				quarkly-title="Card"
				display="flex"
				justify-content="space-between"
				align-items="center"
				margin="0px 0px 96px 0px"
				position="relative"
				lg-margin="0px 0px 64px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/60d98a01344a590020ae01d8/images/image-4.jpeg?v=2021-06-28T10:15:22.984Z"
					object-fit="cover"
					width="45%"
					flex="0 0 auto"
					md-width="50%"
				/>
				<Components.Paragraph margin="0px 0px 0px 8%" max-width="450px" md-margin="0px 0px 0px 24px">
					I believe that in a world of modern maladies caused by work and lifestyle, food is often the best medicine. I teach my clients how to make small dietary changes that stack up big gains over time.
				</Components.Paragraph>
			</Box>
			<Box quarkly-title="Card" display="flex" justify-content="space-between" align-items="center">
				<Box max-width="450px" margin="0px 8% 0px 0px" md-margin="0px 24px 0px 0px">
					<Components.Paragraph>
						“Colette’s method is incredible.
						<br />
						I completely changed my eating habits, but never felt like I was missing out on anything.”
					</Components.Paragraph>
					<Components.CustomButton>
						Read More Reviews
					</Components.CustomButton>
				</Box>
				<Image
					src="https://uploads.quarkly.io/60d98a01344a590020ae01d8/images/image-5.jpeg?v=2021-06-28T10:15:22.988Z"
					object-fit="cover"
					width="45%"
					flex="0 0 auto"
					md-width="50%"
				/>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0" md-padding="36px 0 36px 0">
			<Override slot="SectionContent" width="100%" max-width="100%" />
			<Image src="https://uploads.quarkly.io/60d98a01344a590020ae01d8/images/image-2.jpg?v=2021-06-28T10:15:22.976Z" object-fit="cover" />
		</Section>
		<Section padding="96px 0 96px 0" md-padding="48px 0 48px 0" lg-padding="64px 0 64px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				font="--headline2"
				text-align="center"
				max-width="530px"
				letter-spacing=".02em"
				color="--primary"
				margin="0vw 0px 32px 0px"
				lg-font="normal 400 36px/1.3 &quot;Libre Caslon Display&quot;, serif"
				xl-font="normal 400 42px/1.3 &quot;Libre Caslon Display&quot;, serif"
				md-font="normal 400 30px/1.3 &quot;Libre Caslon Display&quot;, serif"
				md-max-width="480px"
			>
				I’d love to show you how food can transform your life.
			</Text>
			<Components.CustomButton />
		</Section>
		<Components.FooterBlock lg-padding="64px 0 48px 0" />
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