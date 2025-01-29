import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: "48px",
  "& .processTag": {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily: "Open Sans",
    color: theme.palette.text.secondary,
    "@media (max-width: 680px)": {
      fontSize: "20px",
      color: "#000",
      marginTop: "20px",
    },
  },
  "& .processContent": {
    fontSize: "17px",
    fontWeight: 400,
    fontFamily: "Open Sans",
    color: theme.palette.text.secondary,
    marginTop: "15px",
    marginBottom: "50px",
    "@media (max-width: 680px)": {
      fontSize: "12px",
      marginTop: "20px !important",
      textAlign: "center",
      maxWidth: "450px",
      width: "100%",
      marginBottom: "20px !important",
    },
  },
}));
const StyledBox2 = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  paddingBottom: "30px",
  "& .expertsHead": {
    maxWidth: "223px",
    width: "100%",
    fontSize: "17px",
    fontWeight: 400,
    fontFamily: "Open Sans",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      textAlign: "center",
      paddingBottom: "24px",
    },
  },
}));

const Process = () => {
  const isSmall = useMediaQuery("(max-width:680px)");

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Container>
        <StyledBox>
          <Typography variant="h1" align="center" data-aos="fade-up">
            Fastest Loan Process, Click, Click Loan
          </Typography>
          {isSmall ? (
            <Grid container className="mt-[48px]">
              <Grid
                item
                xs={12}
                className="flex flex-col justify-center items-center"
              >
                <img src="images/1circle.png" alt="number" />
                <Typography className="processTag">Security</Typography>
                <Typography className="processContent">
                  Instead of sharing information with multiple lenders, fill out
                  one simple, secure form in five minutes or less.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                className="flex flex-col justify-center items-center"
              >
                <img src="images/2circle.png" alt="number" />
                <Typography className="processTag">Savings</Typography>
                <Typography className="processContent">
                  We'll match you with up to five lenders from our network of
                  300+ lenders who will call to compete for your business.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                className="flex flex-col justify-center items-center"
              >
                <img src="images/3circle.png" alt="number" />
                <Typography className="processTag">Support</Typography>
                <Typography className="processContent">
                  We provide ongoing support with free credit monitoring,
                  budgeting insights and personalized recommendations to help
                  you save.
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid container className="mt-[48px]">
              <Grid item sm={6}>
                <img
                  loading="lazy"
                  data-aos="zoom-in"
                  src="images/processIMG.png"
                  alt="process"
                />
              </Grid>
              <Grid item sm={6}>
                <Grid container>
                  <Grid item md={1} data-aos="fade-up">
                    <img loading="lazy" src="images/Check.png" alt="check" />
                  </Grid>
                  <Grid item md={11} data-aos="fade-up">
                    <Typography className="processTag">Security</Typography>
                    <Typography className="processContent">
                      Instead of sharing information with multiple lenders, fill
                      out one simple, secure form in five minutes or less.
                    </Typography>
                  </Grid>
                  <Grid item md={1} data-aos="fade-up">
                    <img loading="lazy" src="images/Check.png" alt="check" />
                  </Grid>
                  <Grid item md={11} data-aos="fade-up">
                    <Typography className="processTag">Savings</Typography>
                    <Typography className="processContent">
                      We'll match you with up to five lenders from our network
                      of 300+ lenders who will call to compete for your
                      business.
                    </Typography>
                  </Grid>
                  <Grid item md={1} data-aos="fade-up">
                    <img loading="lazy" src="images/Check.png" alt="check" />
                  </Grid>
                  <Grid item md={11} data-aos="fade-up">
                    <Typography className="processTag">Support</Typography>
                    <Typography className="processContent">
                      We provide ongoing support with free credit monitoring,
                      budgeting insights and personalized recommendations to
                      help you save.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </StyledBox>
      </Container>
      <hr className="mt-[70px]" />
      <Container>
        <StyledBox2>
          <Grid container>
            <Grid item xs={12} sm={12} md={3}>
              <Typography className="expertsHead">
                Publications featuring Tezloan experts this month
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              Logo
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              Logo
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              Logo
            </Grid>
          </Grid>
        </StyledBox2>
      </Container>
    </div>
  );
};

export default Process;
