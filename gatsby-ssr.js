
const React = require("react");
const QAPI = require("./qapi").default;
const { RawHtml } = require("@quarkly/components");
export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  const components = RawHtml.getComponents();
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ...components.headItems,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre%20Caslon%20Display:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre%20Caslon%20Text:ital,wght@0,400;0,700;1,400&display=swap" />,
  ]);

  setPostBodyComponents([
    ...components.bodyItems,
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
  ]);
}