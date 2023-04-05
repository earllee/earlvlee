import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
    body: {
        fontFamily: "'Helvetica Neue', sans-serif",
        fontSize: "0.8em",
    },
    "h1,h2,h3,h4,h5,h6": {
        fontFamily: "'Ibarra Real Nova', serif",
    },
    a: {
        textDecoration: "none",
        // color: "#00356B" // Yale Blue
        color: "#A51C30", // Harvard Crimson
        // color: "#9f392b", // Original
    },
});

kirkhamTheme.googleFonts = [{
    name: "Ibarra Real Nova",
    styles: [""],
},
{
    name: "EB Garamond",
    styles: [],
},
];

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;