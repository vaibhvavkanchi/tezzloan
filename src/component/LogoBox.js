import React from "react";
import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const useStyles = {
  logobox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "38px",
    cursor: "pointer",
    width: "fit-content",
    "& img": {
      width: "100%",
      maxWidth: "160px",
      height: "100%",
      objectFit: "cover",
    },
  },
};

export default function LogoBox() {
  const classes = useStyles;
  const Navigate = useNavigate();
  return (
    <Box sx={classes.logobox}>
      <img src="/images/logo.png" alt="Logo" />
    </Box>
  );
}
