import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
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
			lg-padding="64px 0 64px 0"
			xl-padding="80px 0 80px 0"
			md-padding="48px 0 48px 0"
			sm-padding="36px 0 36px 0"
		>
			<Override slot="SectionContent" max-width="800px" />
			<Text font="--paragraph" color="--primary" margin="0px 0px 24px 0px" letter-spacing=".02em">
				About Colette
			</Text>
			<Components.Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at in tellus integer. Integer vitae justo eget magna. Elit duis tristique sollicitudin nibh sit amet commodo. Nunc scelerisque viverra mauris in aliquam sem fringilla. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Nisi porta lorem mollis aliquam ut porttitor leo a. Euismod elementum nisi quis eleifend quam adipiscing vitae proin.
			</Components.Paragraph>
			<Components.Paragraph>
				Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Mauris cursus mattis molestie a iaculis. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Vitae congue eu consequat ac felis donec et. Volutpat blandit aliquam etiam erat. Tortor at risus viverra adipiscing at in tellus integer feugiat. Dapibus ultrices in iaculis nunc sed augue. Nullam eget felis eget nunc lobortis mattis aliquam. Tempus egestas sed sed risus. Elementum integer enim neque volutpat ac. Enim ut tellus elementum sagittis vitae et leo duis. Facilisis magna etiam tempor orci.
			</Components.Paragraph>
			<Components.Paragraph>
				Purus non enim praesent elementum facilisis leo vel fringilla. Tellus mauris a diam maecenas sed enim ut sem. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Nisi lacus sed viverra tellus in hac. Egestas quis ipsum suspendisse ultrices gravida. Eu lobortis elementum nibh tellus molestie nunc non. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Amet nulla facilisi morbi tempus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris.
			</Components.Paragraph>
			<Text font="italic 400 12px/1.8 --fontFamily-googleLibreCaslonDisplay" color="--primary" margin="0px 0px 32px 0px" letter-spacing=".02em">
				Images shot with That Brown Girl Cooks. Some Images Shot on Location at Buvette.
			</Text>
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