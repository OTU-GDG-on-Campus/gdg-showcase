"use client";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const theme = createTheme({});

function ThemeProvider({ children }: { children: any }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
