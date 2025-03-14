import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#164C22",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#8E7B18",
    },
    background: {
      paper: "#FEFDEE",
      default: "#FEFDEE",
    },
  },
  typography: {
    h3: {
      fontWeight: "bold",
      color: "#164C22",
    },
  },
});

export default theme;
