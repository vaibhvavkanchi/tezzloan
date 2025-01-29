import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./Footer";
import {
  Box,
  Button,
  Grid,
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
// ..
import CircleIcon from "@mui/icons-material/Circle";
const useStyles = {
  root: {
    height: "100%",
    width: "100%",
    background: "#F5F5F5",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    backgroundPosition: "unset",
    backgroundSize: "cover",
    minHeight: "100vh",
  },

  homeWrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    backgroundPosition: "unset",
    backgroundSize: "cover",
    minHeight: "100vh",
    paddingTop: "64px",
    flexDirection: "column",
  },

  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
  },
};

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderLeftWidth: 0,
    borderColor: theme.palette.divider,
  },
}));

export default function HomeLayout({ children }) {
  const classes = useStyles;
  const location = useLocation();
  AOS.init();
  let homeRoute = location.pathname === "/";

  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);

  const steps = [
    {
      label: "Loan Details",
      substeps: ["plan", "offers"],
    },
    {
      label: "Personal Details",
      substeps: [],
    },
  ];

  const handleNext = () => {
    if (activeSubStep < steps[activeStep].substeps.length - 1) {
      // Move to next substep
      setActiveSubStep(activeSubStep + 1);
    } else if (activeStep < steps.length - 1) {
      // Move to next step
      setActiveSubStep(0);
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeSubStep > 0) {
      // Move to previous substep
      setActiveSubStep(activeSubStep - 1);
    } else if (activeStep > 0) {
      // Move to previous step
      const prevStepSubsteps = steps[activeStep - 1].substeps.length;
      setActiveStep((prevStep) => prevStep - 1);
      setActiveSubStep(prevStepSubsteps - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div style={classes.root}>
      <TopBar handleBack={handleBack} />
      <div style={classes.homeWrapper}>
        <div style={classes.contentContainer}>
          <div style={classes.content}>
            <Grid container>
              <Grid item sm={2.5} className="flex justify-end">
                <Box sx={{ maxWidth: 200, mt: 12, width: "100%" }} className="">
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    connector={<CustomConnector />}
                    sx={{
                      "& .MuiStepContent-root": {
                        borderLeft: "0px !important",
                        paddingLeft: "0px !important",
                      },
                    }}
                  >
                    {steps.map((step, stepIndex) => (
                      <Step key={step.label}>
                        <StepLabel>
                          <Typography variant="h6">{step.label}</Typography>
                        </StepLabel>
                        {stepIndex === 0 && (
                          <CircleIcon
                            style={{
                              marginTop: "24px",
                              height: "18px",
                              width: "18ps",
                              color: "#D9D9D9",
                            }}
                          />
                        )}
                        <StepContent></StepContent>
                      </Step>
                    ))}
                  </Stepper>

                  {/* <Button onClick={handleNext}>next</Button>
                  <Button onClick={handleBack}>back</Button> */}
                </Box>
              </Grid>
              <Grid item sm={7}>
                {React.cloneElement(children, {
                  activeStep: activeStep,
                  activeSubStep: activeSubStep,
                  handleNext: handleNext,
                })}
              </Grid>
              <Grid item sm={2.5}></Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node,
};
