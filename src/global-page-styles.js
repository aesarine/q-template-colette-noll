import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--bground2"
    },
    "index": {
        "background": "--bground2"
    },
    "about": {
        "background": "--bground2"
    },
    "testimonials": {
        "background": "--bground2"
    },
    "consultations": {
        "background": "--bground2"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
