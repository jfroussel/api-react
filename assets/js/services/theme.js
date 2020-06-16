import { createMuiTheme } from "@material-ui/core/styles";

export const COLOR_WHITE = "#ffffff";
export const COLOR_PRIMARY = "#B7C63A";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#e57373",
    },
    warning: {
      main: "#ffb74d",
    },
    info: {
      main: "#64b5f6",
    },
    success: {
      main: "#81c784",
    },
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;
