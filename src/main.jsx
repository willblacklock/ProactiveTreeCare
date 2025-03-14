import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./theme/theme";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
