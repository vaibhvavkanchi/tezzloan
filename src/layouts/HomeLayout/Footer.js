import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import LogoBox from "../../component/LogoBox";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.dark,
  color: "#FFFFFF",
  "& .footerSection": {
    position: "relative",
    padding: "100px 0px 30px 0",
    zIndex: "2",
    overflow: " hidden",
    // background: "rgba(255, 255, 255, 0.02)",
    // borderTop: "1px solid rgba(0, 0, 0, 0.25)",

    "& .copy": {
      fontSize: "12px",
      borderTop: "2px solid #D6D6D6",
      textAlign: "center",
      fontWeight: "300",
      paddingTop: "23px",
    },

    "& ul": {
      paddingLeft: "0",
      paddingBottom: "11px",
      "& li": {
        paddingLeft: "0",
        alignItems: "center",
        paddingTop: "13px",

        fontSize: "14px",
        fontWeight: "300",
        display: "block",
        "& svg": {
          marginRight: "10px",
          color: "#fe2efe",
          fontSize: "15px",
        },
      },
    },

    "& svg": {
      color: "rgba(255 255 255 / 30%)",
      fontSize: "15px",
    },

    "& p": {},

    "& h6": {
      color: "#000000",
    },

    "& a": {
      display: "flex",
      fontSize: "14px",
      alignItems: "center",
      fontWeight: "400",
      paddingLeft: "0px",
      paddingRight: "0px",
      textDecoration: "none",
      fontFamily: "'Calibri', sans-serif",
      color: "#484848",
      padding: "3px",
      paddingBottom: "10px",

      "&:hover": {
        color: "#EC1F24",
        textDecoration: "none",
        "& svg": {
          color: "red",
          fontSize: "15px",
        },
      },
    },
  },
  "& .iconbtn": {
    "& .MuiIconButton-root": {
      border: "0.5px solid #78819F",
      marginRight: "8px",
      marginBottom: "8px",
      borderRadious: "10px",
      borderRadius: "7px",
      width: "30px",
      height: "30px",
      padding: "0px",
      "& svg": {
        color: "#FF7F26",
        fontSize: "18px",
        "& :hover": {
          "& svg": {
            color: "#EC1F24",
            fontSize: "18px",
          },
        },
      },
    },
  },
}));

export default function Footer() {
  const date = new Date();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledBox>
      <Box className={"footerSection"}>
        <Container maxWidth="lg">
          <Grid container spacing={isSmallScreen ? 2 : 3}>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              className="flex flex-col-reverse sm:flex-col-reverse md:flex-col"
            >
              <div>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px", // Default and for small screens
                      sm: "20px",
                      md: "24px", // Medium screens and above
                    },
                    fontWeight: 600,
                  }}
                  className="font-poppins"
                >
                  We're on a mission.
                </Typography>
                <Typography className="font-roboto mt-[22px] mb-[45px] text-12 sm:text-12 md:text-16">
                  At Tezloan, we’re using cutting-edge technology to transform
                  the industry and deliver financial services that actually work
                  for you.
                </Typography>
              </div>
              <Box style={{ width: "171px", height: "56px" }}>
                <LogoBox />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Box className="ml-12">
                <Typography className="font-roboto text-18">Company</Typography>

                <ul>
                  <li className="font-roboto text-14 cursor-pointer">
                    About Us
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Contact Us
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">Cards</li>
                  <li className="font-roboto text-14 cursor-pointer">Blog</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Box className="ml-12">
                <Typography className="font-roboto text-18">product</Typography>

                <ul>
                  <li className="font-roboto text-14 cursor-pointer">
                    Business Loans
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Loan Calculator
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Refer a Friend
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Partner Program
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Box className="ml-12">
                <Typography className="font-roboto text-18">Help</Typography>

                <ul>
                  <li className="font-roboto text-14 cursor-pointer">
                    Customer Care
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Executive Team
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Security Center
                  </li>
                  <li className="font-roboto text-14 cursor-pointer">
                    Recognition
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Box className="flex items-center gap-3 justify-center  sm:justify-center md:justify-end  flex-wrap">
                <hr
                  style={{
                    maxWidth: "400px",
                    width: "100%",
                    height: "1px",
                    color: "white",
                  }}
                />
                <div className="flex gap-3 items-center">
                  <Link to="#facebook">
                    <img
                      src="images/facebook.png"
                      alt="logo"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </Link>
                  <Link to="#X">
                    <img
                      src="images/twitter.png"
                      alt="logo"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </Link>
                  <Link to="#pin">
                    <img
                      src="images/pinterest.png"
                      alt="logo"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </Link>
                  <Link to="#linkedin">
                    <img
                      src="images/linkedin.png"
                      alt="logo"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </Link>
                </div>
              </Box>
            </Grid>
          </Grid>

          <Box className=" flex justify-center " mt={4}>
            <Box
              className="flex items-center justify-center flex-wrap"
              style={{ gap: "28px", color: "#9199A1" }}
            >
              <Typography variant="body1">
                Copyright © Tezloan {date.getFullYear()}.
              </Typography>
              <Box
                className="flex items-center flex-wrap"
                style={{ gap: "15px" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontWeight: "400", padding: "0" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privecy Policy
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "400", padding: "0" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </StyledBox>
  );
}
