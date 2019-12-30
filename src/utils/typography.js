import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
  body: {
    fontSize: "0.85em",
    fontFamily: "'Helvetica Neue',sans-serif"
  },
  "h1,h2,h3,h4,h5,h6": {
    fontFamily: "'Times New Roman', serif"
  },
  a: {
    textDecoration: "none",
    color: "#386dc0" // Blue
    // color: "#a41034" // Red
    // color: "#9f392b" // Original
  }
});

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;
