import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  Slider,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Lock, Login } from "@mui/icons-material";
import { BiEdit } from "react-icons/bi";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
  },
  "& .option": {
    fontSize: "16px",
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
  },
  "& .option-txt": {
    fontFamily: "Open Sans",
  },
  "& .NumberField": {
    width: "100%",
    height: "48px",
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    borderRadius: "6px",
    "& .MuiInputBase-root": {
      borderColor: "transparent",
      "&:before": {
        borderBottom: "1px solid transparent !important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  "& .form-field": {
    background: "white",
    marginTop: "53px",
    marginBottom: "35px",
    "& .MuiOutlinedInput-input": {
      textAlign: "center",
    },
    "& .MuiOutlinedInput-root": {
      maxWidth: "290px !important",
      width: "100% !important",
      fontSize: "36px",
      fontWeight: 700,
      color: theme.palette.background.dark,
    },
  },
  "& .button": {
    backgroundColor: theme.palette.secondary.main,
    textTransform: "capitalize",
    height: "55px",
    borderRadius: "30px",
    padding: "20px 65px 20px 65px",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CustomCheckbox = styled("label")(({ theme }) => ({
  display: "flex",
  position: "relative",
  cursor: "pointer",
  fontSize: "18px",

  "& input": {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
  },

  "& .checkmark": {
    position: "relative",
    width: "20px",
    height: "20px",
    border: "2px solid blue",
    display: "inline-block",
    borderRadius: "4px",
  },

  "& input:checked + .checkmark::after": {
    content: '""',
    position: "absolute",
    left: "5px",
    top: "1px",
    width: "6px",
    height: "12px",
    border: "solid blue",
    borderWidth: "0 2px 2px 0",
    transform: "rotate(45deg)",
  },
}));

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#007bff",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "1px solid #9ABCFF",
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
      },
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  // "& .MuiSlider-valueLabel": {
  //   fontSize: 12,
  //   fontWeight: "normal",
  //   top: -6,
  //   backgroundColor: "unset",
  //   color: theme.palette.text.primary,
  //   "&::before": {
  //     display: "none",
  //   },
  //   "& *": {
  //     background: "#52af77",
  //     color: "#000",
  //     ...theme.applyStyles("dark", {
  //       color: "#fff",
  //     }),
  //   },
  // },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
  ...theme.applyStyles("dark", {
    color: "#0a84ff",
  }),
  "& .MuiSlider-markLabel": {
    fontFamily: "Open Sans",
  },
}));

const Earnings = ({ handleNext, formData, setFormData }) => {
  const handleChange1 = (event, newValue) => {
    setFormData((pre) => ({ ...pre, knowValue: newValue }));
  };
  const marks = [
    {
      value: 250000,
      label: "₹2,50,000",
    },
    { value: 5000000, label: "₹50,00,000 +" },
  ];
  function valuetext(value) {
    if (value >= 10000000) {
      return `${value}`; // Convert to crores
    }
    return `${value} `; // Convert to lakhs
  }
  return (
    <StyledBox>
      <Box
        className="flex flex-col items-center w-full"
        sx={{ width: "calc(100% - 200px)" }}
      >
        <BorderLinearProgress
          sx={{ maxWidth: "250px", width: "100%", mt: "72px" }}
          variant="determinate"
          value={45}
        />
        <Typography className="headTitle1 mt-4 lg:mt-10 sm:mt-4 mb-3 lg:mb-11 md:mb-6 sm:mb-4  uppercase">
          Home Loan
        </Typography>
        <Typography variant="h1" className="mt-0 lg:mt-4">
          What is your yearly earnings?
        </Typography>
        <Box className="max-w-[700px] w-full">
          <Typography className="option-txt mt-[66px]">
            <span className="option">Option 1 </span>
            (Recommended): Fetch from Income Tax Portal
          </Typography>
          <Typography className="option-txt mt-[25px]">
            Make it simple! Allow us to fetch your income details directly from
            the Income Tax Portal. Just provide your Income Tax ID and password,
            and we’ll handle the rest securely.
          </Typography>

          <TextField
            id={"Login"}
            className="NumberField bg-white max-w-[603px] mt-8"
            variant="standard"
            InputProps={{
              startAdornment: (
                <div className="w-28">
                  <Login style={{ color: "#B3B3B3" }} />
                </div>
              ),
            }}
            // value={documentNumber.aadharNumber}
            name={"Login"}
            placeholder={"Login"}
            // onChange={handleInputChange}
          />
          <TextField
            id={"Password"}
            className="NumberField bg-white max-w-[603px] mt-8"
            variant="standard"
            InputProps={{
              startAdornment: (
                <div className="w-28">
                  <Lock style={{ color: "#B3B3B3" }} />
                </div>
              ),
            }}
            // value={documentNumber.aadharNumber}
            name={"Password"}
            placeholder={"Password"}
            // onChange={handleInputChange}
          />

          <Typography className="option-txt mt-[66px]">
            <span className="option">Option 2 </span>
            (Enter Manually)
          </Typography>
          <Typography className="option-txt mt-[25px]">
            "Prefer to do it yourself? No problem! You can enter your income
            details manually to proceed."
          </Typography>

          <Box className="NumberField bg-white max-w-[603px] flex items-center gap-3 mt-10">
            <CustomCheckbox>
              <input
                type="checkbox"

                //   checked={formData?.knowMarketValue}
                //   onChange={(e) =>
                //     setFormData((pre) => ({
                //       ...pre,
                //       knowMarketValue: e.target.checked,
                //     }))
                //   }
              />
              <span className="checkmark"></span>
            </CustomCheckbox>
            <Typography className="checkbox-text">
              Know your property’s guideline value?
            </Typography>
          </Box>
        </Box>
        <TextField
          className="form-field"
          variant="outlined"
          value={formData?.knowValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^[1-9]\d{0,9}$/.test(inputValue) || inputValue === "") {
              const numericValue =
                inputValue === "" ? 0 : parseInt(inputValue, 10);
              if (numericValue >= 250000 && numericValue <= 5000000) {
                setFormData((pre) => ({ ...pre, knowValue: inputValue }));
              } else if (numericValue < 250000) {
                setFormData((pre) => ({ ...pre, knowValue: "250000" }));
              } else if (numericValue > 5000000) {
                setFormData((pre) => ({ ...pre, knowValue: "5000000" }));
              }
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BiEdit style={{ width: "19px", height: "19px" }} />
              </InputAdornment>
            ),
          }}
        />

        <IOSSlider
          sx={{ maxWidth: "410px !important", width: "100% !important" }}
          value={formData?.knowValue}
          onChange={handleChange1}
          aria-labelledby="slider"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          valueLabelFormat={valuetext}
          min={250000}
          max={5000000}
          step={1}
          marks={marks}
        />

        <Button
          sx={{ mt: "60px" }}
          onClick={() => handleNext()}
          className="button"
          variant="contained"
        >
          We’re almost done
        </Button>
      </Box>
    </StyledBox>
  );
};

export default Earnings;
