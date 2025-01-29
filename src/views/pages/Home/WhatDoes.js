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
  background: "#F1F3F3",
  "& .txtcontent": {
    marginTop: "30px",
    fontSize: "17px",
    fontFamily: "Open Sans",
    color: theme.palette.text.main,
    [theme.breakpoints.down("md")]:{
      fontSize:"14px"
    }
  },
  "& .gridTXT": {
    color: theme.palette.text.light,
    fontSize: "17px",
    fontFamily: "Open Sans",
    paddingBottom: "3px",
    [theme.breakpoints.down("md")]:{
      fontSize:"16px"
    }
  },
}));

const WhatDoes = () => {
  const isSmall = useMediaQuery("(max-width:680px)");

  return (
    <StyledBox>
      <Container sx={{ pt: "60px", pb: "110px" }}>
        <Grid container>
          {!isSmall && <Grid item xs={1}></Grid>}
          <Grid item xs={isSmall ? 12 : 6}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
              data-aos="fade-up"
            >
              What does Tezloan do?
            </Typography>
            <Typography className="txtcontent" data-aos="fade-up">
              Tezloan is a marketplace, built to save you money—we don't make
              loans, we find them. In fact, we've been finding the best loans
              for Americans for more than 20 years. Our marketplace is the
              largest in the country, and it's filled with lenders you know and
              trust.
            </Typography>

            <Grid
              container
              sx={{ mt: "50px", px: isSmall ? "50px" : "" }}
              spacing={3}
            >
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-right"
              >
                <img
                  loading="lazy"
                  src="images/refinance.svg"
                  alt="refinance"
                />
                <Typography className="gridTXT">Mortgage Refinance</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-left"
              >
                <img loading="lazy" src="images/car.svg" alt="refinance" />
                <Typography className="gridTXT">Auto Loans</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-right"
              >
                <img loading="lazy" src="images/equity.svg" alt="refinance" />
                <Typography className="gridTXT">Home Equity Loans</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-left"
              >
                <img loading="lazy" src="images/card.svg" alt="refinance" />
                <Typography className="gridTXT">Free Credit Score</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-right"
              >
                <img loading="lazy" src="images/card.svg" alt="refinance" />
                <Typography className="gridTXT">Credit Cards</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-left"
              >
                <img
                  loading="lazy"
                  src="images/insurance.svg"
                  alt="refinance"
                />
                <Typography className="gridTXT">Insurance</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-right"
              >
                <img
                  loading="lazy"
                  src="images/calculator.svg"
                  alt="refinance"
                />
                <Typography className="gridTXT">Mortgage Calculator</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isSmall ? 12 : 6}
                className="flex items-end gap-4"
                data-aos="fade-left"
              >
                <img loading="lazy" src="images/loans.svg" alt="refinance" />
                <Typography className="gridTXT">Mortgage Calculator</Typography>
              </Grid>
            </Grid>
          </Grid>
          {!isSmall && (
            <Grid item xs={5} className="flex justify-end items-center">
              <img
                loading="lazy"
                src="images/questionIMG.png"
                alt="What does Tezloan do?"
                data-aos="zoom-out"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default WhatDoes;
