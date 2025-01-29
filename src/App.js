import React, { useContext, useEffect } from "react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import SettingsContext from "../src/context/SettingsContext";
import AppRouter from "./AppRouter";
import { createCustomeTheme } from "../src/theme";
import { Toaster } from "react-hot-toast";

export default function App() {
  const themeSeeting = useContext(SettingsContext);
  const theme = createCustomeTheme({
    theme: createTheme(themeSeeting.settings.theme),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "F12" || event.key === "ArrowRight") {
  //       event.preventDefault(); // Prevent default action of F12 and right arrow key
  //       return false; // Optional: return false
  //     }
  //   };

  //   // Add event listener for keydown
  //   window.addEventListener("keydown", handleKeyDown);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  // const handleContextMenu = (e) => {
  //   e.preventDefault(); // Prevent the default context menu from appearing
  // };
  return (
    <div
      className="App"
      //  onContextMenu={handleContextMenu}
    >
      <Toaster position="top-right" />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}
