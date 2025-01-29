import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.dark,
  color: theme.palette.white.main,
  padding: "25px 0",
  "& .newBox": {
    background: "#9ABCFF",
    color: theme.palette.primary.main,
    width: "fit-content",
    padding: "4px",
    borderRadius: "4px",
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: 700,
  },
  "& .introText": {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily: "Open Sans",
  },
  "& .readMore": {
    borderRadius: "60px",
    border: "2px solid #fff",
    color: "#fff",
    [theme.breakpoints.down("md")]:{
      textTransform:"capitalize"
    }
  },
  "& .readmoreContent": {
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Open Sans",
    marginTop: "10px",
    maxWidth: "450px",
    width: "100%",
  },
}));

const ReadMore = () => {
  return (
    <StyledBox>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <div className="flex   gap-[15px]  items-start md:items-center flex-col md:flex-row">
              <div className="newBox">NEW</div>
              <Typography className="introText">
                Introducing Tezloan{" "}
              </Typography>
            </div>
            <Typography className="readmoreContent">
              Want to take control of your finances but not sure where to start?
              Spring helps you unlock a whole new world of potential, one easy
              step at a time.
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            className="flex justify-end items-center mt-4 md:mt-0"
          >
            <Button
              variant="outlined"
              className="readMore"
              endIcon={<ExpandMore />}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default ReadMore;
