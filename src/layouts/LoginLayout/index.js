import React from "react";
import { Box, Grid, Hidden, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
const LoginLayoutBox = styled("div")(({ theme }) => ({
  background: "#8231d3 ",
  // backgroundImage: "url(/images/loginBG.png)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // height: "100vh",
  height: "auto",
  width: "100%",
  overflow: "hidden",

  "& .loginLayoutContainer": {
    height: "100%",
    minHeight: "625px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  "& .leftGridLoginLayout": {},

  "& .rightGridLoginLayout": {
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // overflowY: "scroll",
  },

  "& .loginContentLayoutBox": {
    height: "100vh",
    width: "100%",
    // overflowY: "scroll",
    // maxWidth: "1500px",
    // minHeight: "625px",
  },
  "& .childrenBox": {
    maxWidth: "85%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90% !important",
      width: "100% !important",
    },
  },
  "& .image": {
    width: "32px",
    height: "32px",
  },
}));

export default function LoginLayout({ children }) {
  return (
    <LoginLayoutBox>
      <Box className="loginContentLayoutBox displayCenter">
        <Grid container className="loginLayoutContainer">
          <Grid item xs={12} md={12} className="rightGridLoginLayout">
            <Box className="childrenBox">{children}</Box>
          </Grid>
        </Grid>
        <footer
          style={{
            position: "relative",
            top: "-50px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="image"
            style={{ width: "30px" }}
          />
          <Typography sx={{ color: "white !important", textAlign: "center" }}>
            ©2024 Codestrup Infotech Pvt Ltd. All rights reserved.
          </Typography>
        </footer>
      </Box>
    </LoginLayoutBox>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node,
};
