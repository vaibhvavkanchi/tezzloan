import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const StyledBox2 = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(241,243,243,1) 62%)",
  marginTop: "65px",
  paddingBottom: "40px",
  "& .question": {
    color: "#0069BA",
    fontSize: "12px",
    fontFamily: "Open Sans",
    marginTop: "-25px",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  "& .question1": {
    display: "none",
    color: "#0069BA",
    fontSize: "12px",
    fontFamily: "Open Sans",
    // marginTop: "-25px",
    "@media (max-width: 900px)": {
      display: " block",
    },
  },
  "& .cards": {
    padding: "20px",
    height: "100%",
    background: "#fff",
    borderRadius: "4px",
    boxShadow: "0px 2px 7px 0px #00000021",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    transition: "background 0.3s ease, transform 0.3s ease",
    "&:hover": {
      boxShadow: "0px 2px 10px 4px #00000021",
    },
    "& .cardTitle": {
      fontSize: "17px",
      color: theme.palette.text.secondary,
      fontFamily: "Open Sans",
      fontWeight: 700,
      [theme.breakpoints.down("md")]: {
        fontSize: "12px"
      }
    },
    "& .cardSub": {
      fontSize: "12px",
      color: theme.palette.text.secondary,
      fontFamily: "Open Sans",
    },
    "& .percentage": {
      fontSize: "35px",
      color: theme.palette.text.main,
      fontFamily: "Open Sans",
      fontWeight: 700,
      // textAlign: "center",
      marginTop: "10px",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "26px"
      }
    },
    "& .rate": {
      color: theme.palette.text.light,
      fontSize: "12px",
      fontFamily: "Open Sans",
      fontWeight: 700,
      [theme.breakpoints.down("md")]: {
        fontSize: "9px"
      }
    },
  },
  "& .FooterLine": {
    color: "#4B5155",
    fontSize: "14px",
    fontFamily: "Open Sans",
    textAlign: "center",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px"
    }
  },
  "& .titleText": {
    [theme.breakpoints.down("md")]: {
      fontSize: "20px"
    }
  },
}));

const FeaturedRate = () => {
  const isSmall = useMediaQuery("(max-width:680px)");

  return (
    <StyledBox2>
      <Container sx={{ maxWidth: "920px" }}>
        <Typography className="question1">
          How Does Tezloan Get Paid?
        </Typography>

        <Typography
          variant="h3"
          align={isSmall ? "left" : "center"}
          sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
          data-aos="fade-up"
          className="titleText"
        >
          Featured rates on our network
        </Typography>
        <Typography className="question">How Does Tezloan Get Paid?</Typography>

        <Grid container sx={{ marginTop: "5px" }} spacing={isSmall ? 3 : 4}>
          <Grid item xs={6} sm={6} md={3} data-aos="flip-up">
            <Box
              className="cards"
              sx={{
                "&:hover": {
                  background: "#00B29F",
                  "& .cardTitle": {
                    color: "#fff !important",
                  },
                  "& .cardSub": {
                    color: "#fff !important",
                  },
                  "& .percentage": {
                    color: "#fff !important",
                  },
                  "& .rate": {
                    color: "#fff !important",
                  },
                },
              }}
            >
              <div className="flex gap-5">
                <Box
                  sx={{
                    background: "#00B29F",
                    width: "4px",
                    height: "40px",
                    borderRadius: "2px",
                  }}
                />
                <div>
                  <Typography className="cardTitle">Mortgage</Typography>
                  <Typography className="cardSub">
                    APR rates as low as
                  </Typography>
                  <Typography className="percentage">7.26%</Typography>
                  <Typography className="rate">5/1 ARM</Typography>
                  <Typography className="rate"> $200,000 LOAN</Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} data-aos="flip-up">
            <Box
              className="cards"
              sx={{
                "&:hover": {
                  background: "#FFC507",
                  "& .cardTitle": {
                    color: "#fff !important",
                  },
                  "& .cardSub": {
                    color: "#fff !important",
                  },
                  "& .percentage": {
                    color: "#fff !important",
                  },
                  "& .rate": {
                    color: "#fff !important",
                  },
                },
              }}
            >
              <div className="flex gap-5">
                <Box
                  sx={{
                    background: "#FFC507",
                    width: "4px",
                    height: "40px",
                    borderRadius: "2px",
                  }}
                />
                <div>
                  <Typography className="cardTitle">Home Refinance</Typography>
                  <Typography className="cardSub">
                    APR rates as low as
                  </Typography>
                  <Typography className="percentage">6.64%</Typography>
                  <Typography className="rate">30 YEAR FIXED</Typography>
                  <Typography className="rate"> $200,000 LOAN</Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} data-aos="flip-up">
            <Box
              className="cards"
              sx={{
                "&:hover": {
                  background: "#00AEEF",
                  "& .cardTitle": {
                    color: "#fff !important",
                  },
                  "& .cardSub": {
                    color: "#fff !important",
                  },
                  "& .percentage": {
                    color: "#fff !important",
                  },
                  "& .rate": {
                    color: "#fff !important",
                  },
                },
              }}
            >
              <div className="flex gap-5">
                <Box
                  sx={{
                    background: "#00AEEF",
                    width: "4px",
                    height: "40px",
                    borderRadius: "2px",
                  }}
                />
                <div>
                  <Typography className="cardTitle">Personal Loans</Typography>
                  <Typography className="cardSub">
                    APR rates as low as
                  </Typography>
                  <Typography className="percentage">7.49%</Typography>
                  <Typography className="rate">3 YEAR</Typography>
                  <Typography className="rate"> $200,000 LOAN</Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3} data-aos="flip-up">
            <Box
              className="cards"
              sx={{
                "&:hover": {
                  background: "#FF704D",
                  "& .cardTitle": {
                    color: "#fff !important",
                  },
                  "& .cardSub": {
                    color: "#fff !important",
                  },
                  "& .percentage": {
                    color: "#fff !important",
                  },
                  "& .rate": {
                    color: "#fff !important",
                  },
                },
              }}
            >
              <div className="flex gap-5">
                <Box
                  sx={{
                    background: "#FF704D",
                    width: "4px",
                    height: "40px",
                    borderRadius: "2px",
                  }}
                />
                <div>
                  <Typography className="cardTitle">HELOC</Typography>
                  <Typography className="cardSub">
                    APR rates as low as
                  </Typography>
                  <Typography className="percentage">6.50%</Typography>
                  <Typography className="rate">30 YEAR FIXED</Typography>
                  <Typography className="rate"> $200,000 LOAN</Typography>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Typography className="FooterLine">
          Rates above may change at lender discretion and may not be available
          at the time of loan commitment or lock-in.
        </Typography>
      </Container>
    </StyledBox2>
  );
};

export default FeaturedRate;
