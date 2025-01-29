import { colors, responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";

const themesOptions = {
  typography: {
    ...typography,
    // fontWeight: 400,
    // fontFamily: "'Jost', sans-serif",
  },

  palette: {
    mode: "light",

    action: {
      primary: "#000",
    },

    background: {
      default: "#FFFFFF",
      dark: "#010B24",
      paper: colors.common.white,
    },

    primary: {
      main: "#0112B8",
      dark: "#404040",
      light: "#6c89ea",
    },
    text: {
      main: "#101F30",
      secondary: "#454545",
      light: "#A3A3A3",
    },
    secondary: {
      main: "#4154FA",
      light: "#c2aad9",
    },
    white: {
      main: "#fff",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },

    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },

    error: {
      main: "#ED2124",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },

    common: {
      black: "#000000",
    },
  },
};

const baseOptions = {
  typography: {
    ...typography,
    // fontFamily: "'Jost', sans-serif",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
          background: themesOptions.palette.primary.main,
          borderColor: themesOptions.palette.primary.main,
          boxShadow: "0 2px 0 rgba(0, 0, 0, .045)",
          textShadow: "0 -1px 0 rgba(0, 0, 0, .12)",
          height: "44px",
          padding: "3px 15px",
          fontSize: "15px",
          fontWeight: 400,
          border: "1px solid",
          fontFamily: "'Jost', sans-serif",
          borderRadius: "4px",
          "&:hover": {
            color: "#fff",
            background: themesOptions.palette.primary.light,
            borderColor: themesOptions.palette.primary.light,
          },
        },

        outlined: {
          color: themesOptions.palette.primary.main,
          background: "transparent",
          borderColor: themesOptions.palette.primary.main,
          height: "44px",
          padding: "3px 15px",
          fontSize: "15px",
          fontWeight: 400,
          border: "1px solid",
          fontFamily: "'Jost', sans-serif",
          borderRadius: "4px",
          // "&:hover": {
          //   color: themesOptions.palette.primary.light,
          //   background: "rgba(129, 49, 211, 0.1)",
          //   borderColor: themesOptions.palette.primary.light,
          // },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: { top: "47px" },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          height: "50px",

          "& .MuiOutlinedInput-root": {
            height: "100%",

            "& .MuiOutlinedInput-input": {
              padding: "12px 20px",
            },
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8231d3",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px !important",
            // borderColor: "#8231d3 !important",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: "#000",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
          "&.colorSecondary": {
            color: "#8d8989",
          },
        },
      },
    },
  },
};

export const createCustomeTheme = (config = {}) => {
  let theme = createTheme({ ...baseOptions, ...themesOptions });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
