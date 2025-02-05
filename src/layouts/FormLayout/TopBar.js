import LogoBox from "../../component/LogoBox";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const StyledBox = styled(Box)(({ theme }) => ({}));

const TopBar = ({ handleBack }) => {
  return (
    <StyledBox>
      <AppBar sx={{ backgroundColor: "#010B24" }}>
        <Toolbar>
          <Grid container>
            <Grid
              item
              xs={2}
              sm={4}
              className="flex justify-start sm:justify-end"
            >
              <IconButton onClick={() => handleBack()}>
                <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Grid>
            <Grid item xs={6} sm={4} className="flex justify-center">
              <LogoBox />
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              className="flex justify-center items-center"
            >
              <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                Disclosures
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
};

export default TopBar;
