import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
  a: {
    textDecoration: "none",
    // color: "#386dc0" // Blue
    // color: "#a41034" // Red
    color: "#9f392b" // Original
  }
});

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;
