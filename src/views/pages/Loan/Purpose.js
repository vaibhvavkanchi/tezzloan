import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Slider,
  styled,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { BiEdit } from "react-icons/bi";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    marginTop: "40px",
  },
  "& .form-head": {
    fontSize: "16px",
    fontFamily: "Open Sans",
    color: theme.palette.common.black,
    textAlign: "center",
  },
  "& .form-field": {
    background:'white',
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

  "& .checkbox-div": {
    borderRadius: "8px",
    boxShadow: "0px 7px 6px 0px rgba(0,0,0,0.1)",
    padding: "10px",
    background: "white",
    maxWidth: "522px",
    width: "100%",
    marginTop: "80px",
    display: "flex",
    alignItems: "center",
  },
  "& .checkbox-text": {
    textAlign: "center",
    width: "100%",
    fontSize: "19px",
    fontWeight: 400,
  },
  "& .button": {
    backgroundColor: theme.palette.secondary.main,
    textTransform: "capitalize",
    height: "55px",
    borderRadius: "30px",
    padding: "20px 65px 20px 65px",
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
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

const Purpose = ({ handleNext, formData, setFormData }) => {
  const marks = [
    {
      value: 500000,
      label: "₹5 Lacs",
    },
    { value: 50000000, label: "₹5 Crore" },
  ];
  const handleChange = (event, newValue) => {
    setFormData((pre) => ({ ...pre, marketValue: newValue }));
  };
  const handleChange1 = (event, newValue) => {
    setFormData((pre) => ({ ...pre, knowValue: newValue }));
  };

  const loanOptions = [
    {
      value: "plot-purchase",
      label: "Plot purchase",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 38.333H40V39.9996H0V38.333Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M0.832031 32.5H3.33207V34.1666H0.832031V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M5.83203 32.5H8.33207V34.1666H5.83203V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M10.832 32.5H13.3321V34.1666H10.832V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M15.834 32.5H18.334V34.1666H15.834V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M20.834 32.5H23.334V34.1666H20.834V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M25.834 32.5H28.334V34.1666H25.834V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M30.832 32.5H33.3321V34.1666H30.832V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M35.832 32.5H38.3321V34.1666H35.832V32.5Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M27.5 10.833H32.5V12.4996H27.5V10.833Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M7.5 10.833H12.5V12.4996H7.5V10.833Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M4.75833 28.3333H0V26.6667H3.57501L7.15002 16.6667H5.83331V15H9.51666L4.75833 28.3333Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M31.0334 28.3333H8.9668L11.8251 15H15.0001V16.6667H13.1751L11.0334 26.6667H28.9667L26.825 16.6667H25V15H28.175L31.0334 28.3333Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M39.9991 28.3333H35.2408L30.4824 15H34.1657V16.6667H32.8491L36.4241 26.6667H39.9991V28.3333Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M20.0006 19.6584L19.3506 18.8583C19.109 18.55 13.334 11.3417 13.334 6.54164C13.334 2.93334 16.3257 0 20.0006 0C23.6756 0 26.6672 2.93334 26.6672 6.54164C26.6672 11.35 20.8923 18.5583 20.6506 18.8583L20.0006 19.6584ZM20.0006 1.66664C17.2423 1.66664 15.0006 3.84995 15.0006 6.54164C15.0006 9.88331 18.5173 14.9666 20.0006 16.9666C21.4839 14.9666 25.0006 9.88323 25.0006 6.54164C25.0006 3.85004 22.7589 1.66664 20.0006 1.66664Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
          <path
            d="M20.002 9.16657C18.627 9.16657 17.502 8.04159 17.502 6.66654C17.502 5.29149 18.6269 4.1665 20.002 4.1665C21.377 4.1665 22.502 5.29149 22.502 6.66654C22.502 8.04159 21.377 9.16657 20.002 9.16657ZM20.002 5.83322C19.5436 5.83322 19.1687 6.20819 19.1687 6.66654C19.1687 7.12489 19.5436 7.49986 20.002 7.49986C20.4603 7.49986 20.8353 7.12489 20.8353 6.66654C20.8354 6.20827 20.4603 5.83322 20.002 5.83322Z"
            fill={
              formData?.propertyType === "plot-purchase" ? "#fff" : "#0112B8"
            }
          />
        </svg>
      ),
    },
    {
      value: "plot-construction",
      label: "Plot Purchase + Construction",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.28447 11.6667H4.96948L4.97281 13.3333C4.97281 18.8483 9.45781 23.3333 14.9728 23.3333C20.4878 23.3333 24.9728 18.8483 24.9728 13.3317L24.9695 11.6667H26.6161C27.0761 11.6667 27.4495 11.2933 27.4495 10.8333C27.4495 10.3733 27.0761 10 26.6161 10H24.9661V9.15C24.9561 4.105 20.8428 0 15.7978 0H14.1311C11.6795 0 9.37614 0.955 7.64447 2.69C5.91114 4.425 4.95948 6.73 4.96448 9.18333V10H3.28447C2.82447 10 2.45114 10.3733 2.45114 10.8333C2.45114 11.2933 2.82447 11.6667 3.28447 11.6667ZM23.3061 13.3333C23.3061 17.9283 19.5678 21.6667 14.9728 21.6667C10.3778 21.6667 6.63948 17.9283 6.63948 13.3317L6.63614 11.6667H23.3028L23.3061 13.3333ZM6.63114 9.18C6.62781 7.175 7.40614 5.28667 8.82448 3.86667C9.62448 3.065 10.5828 2.49333 11.6178 2.125V6.66667C11.6178 7.12667 11.9911 7.5 12.4511 7.5C12.9111 7.5 13.2845 7.12667 13.2845 6.66667V1.75C13.5661 1.71833 13.8445 1.66667 14.1311 1.66667H15.7978C16.0778 1.66667 16.3445 1.72 16.6178 1.75V6.66667C16.6178 7.12667 16.9911 7.5 17.4511 7.5C17.9111 7.5 18.2845 7.12667 18.2845 6.66667V2.12333C21.1911 3.155 23.2928 5.90167 23.2978 9.15333V10H6.63281L6.63114 9.18ZM20.4861 27.8567C18.7511 27.0667 16.8961 26.6667 14.9728 26.6667C7.91781 26.6667 2.07114 32.1783 1.66281 39.215C1.63781 39.6583 1.26947 40 0.831142 40C0.814475 40 0.797808 40 0.782808 40C0.322808 39.9733 -0.0271918 39.58 -0.00052514 39.12C0.457808 31.2033 7.03614 25.0017 14.9728 25.0017C17.1361 25.0017 19.2228 25.4533 21.1761 26.3417C21.5945 26.5317 21.7795 27.0267 21.5895 27.445C21.3995 27.865 20.9061 28.045 20.4861 27.8567ZM37.4978 23.3333H30.8311C29.4528 23.3333 28.3311 24.455 28.3311 25.8333V28.3333H25.8311C24.4528 28.3333 23.3311 29.455 23.3311 30.8333V33.3333H20.8311C19.4528 33.3333 18.3311 34.455 18.3311 35.8333V37.5C18.3311 38.8783 19.4528 40 20.8311 40H37.4978C38.8761 40 39.9978 38.8783 39.9978 37.5V25.8333C39.9978 24.455 38.8761 23.3333 37.4978 23.3333ZM38.3311 30V33.3333H34.9978V30H38.3311ZM29.9978 25.8333C29.9978 25.375 30.3728 25 30.8311 25H37.4978C37.9561 25 38.3311 25.375 38.3311 25.8333V28.3333H29.9978V25.8333ZM24.9978 30.8333C24.9978 30.375 25.3728 30 25.8311 30H33.3311V33.3333H24.9978V30.8333ZM19.9978 37.5V35.8333C19.9978 35.375 20.3711 35 20.8311 35H28.3311V38.3333H20.8311C20.3711 38.3333 19.9978 37.9583 19.9978 37.5ZM38.3311 37.5C38.3311 37.9583 37.9561 38.3333 37.4978 38.3333H29.9978V35H38.3311V37.5Z"
            fill={
              formData?.propertyType === "plot-construction"
                ? "#fff"
                : "#0112B8"
            }
          />
        </svg>
      ),
    },
    {
      value: "construction",
      label: "Construction",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.5856 33.4667L35.4039 24.2517C34.7073 22.7167 33.2856 21.7067 31.6023 21.5467C29.9006 21.385 28.3273 22.1183 27.3539 23.4967L24.2839 27.8467L10.8439 19.545L12.6756 14.4383C12.8356 13.99 13.1823 13.6333 13.6239 13.455C13.8173 13.3717 14.0256 13.3317 14.2373 13.3317C14.4906 13.3317 14.7473 13.39 14.9839 13.5083L15.7673 13.8033C16.9123 14.3733 17.7856 15.3517 18.2239 16.5567L20.0456 21.8567C20.3489 22.7383 21.3156 23.2 22.1923 22.8817C23.0473 22.5717 23.4956 21.6317 23.1989 20.7717L21.3573 15.4167C20.6273 13.405 19.1706 11.7717 17.2556 10.8183L16.4723 10.5233C15.1939 9.88667 13.7039 9.82667 12.3789 10.36C11.0539 10.8917 10.0189 11.9683 9.53726 13.3117L7.94393 17.7517L2.54226 14.415C1.75893 13.9317 0.73226 14.1717 0.248926 14.9567C-0.234407 15.74 0.00725955 16.7667 0.790593 17.25L22.3573 30.5733L20.8506 32.7083C19.8506 34.1217 19.7256 35.9533 20.5206 37.4883C21.3223 39.0367 22.9089 39.9983 24.6573 39.9983H35.3423C36.9356 39.9983 38.4006 39.2 39.2606 37.8667C40.1139 36.5417 40.2339 34.8967 39.5839 33.465L39.5856 33.4667ZM36.4589 36.0633C36.3439 36.245 36.0006 36.6667 35.3439 36.6667H24.6589C23.9289 36.6667 23.5923 36.17 23.4823 35.9567C23.3756 35.75 23.1689 35.2067 23.5756 34.6317L30.0789 25.4167C30.4156 24.94 30.8839 24.86 31.1606 24.86C31.2089 24.86 31.2539 24.86 31.2873 24.865C31.5189 24.8883 32.0856 25.005 32.3673 25.6283L36.5489 34.845C36.8073 35.415 36.5723 35.8867 36.4573 36.0617L36.4589 36.0633ZM15.0006 4.16667C15.0006 1.865 16.8656 0 19.1673 0C21.4689 0 23.3339 1.865 23.3339 4.16667C23.3339 6.46833 21.4689 8.33333 19.1673 8.33333C16.8656 8.33333 15.0006 6.46833 15.0006 4.16667ZM16.6673 31.6667V38.3333C16.6673 39.255 15.9223 40 15.0006 40C14.0789 40 13.3339 39.255 13.3339 38.3333V31.6667C13.3339 30.745 14.0789 30 15.0006 30C15.9223 30 16.6673 30.745 16.6673 31.6667ZM8.09893 27.005L3.87893 38.8917C3.63559 39.5733 2.99393 40 2.30893 40C2.12393 40 1.93559 39.9683 1.75059 39.9033C0.882259 39.595 0.430593 38.6417 0.738926 37.775L4.95893 25.8883C5.26726 25.02 6.21393 24.57 7.08726 24.8767C7.95559 25.185 8.40726 26.1383 8.09893 27.005Z"
            fill={
              formData?.propertyType === "construction" ? "#fff" : "#0112B8"
            }
          />
        </svg>
      ),
    },
    {
      value: "flat-house-purchase",
      label: "Flat / House Purchase",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4017 22.735L14.32 15.6283C13.2483 14.7883 11.7533 14.7883 10.6783 15.6283L1.6 22.735C0.583333 23.53 0 24.725 0 26.0167V40.0017H25V26.015C25 24.725 24.4167 23.53 23.4017 22.735ZM23.3333 38.3333H1.66667V26.015C1.66667 25.24 2.01667 24.5217 2.62667 24.045L11.705 16.9383C12.1733 16.5733 12.8267 16.5733 13.2917 16.9383L22.3733 24.045C22.9817 24.5217 23.3317 25.24 23.3317 26.015V38.3333H23.3333ZM8.33333 33.3333H16.6667V25H8.33333V33.3333ZM10 26.6667H15V31.6667H10V26.6667ZM30 21.6667H33.3333V23.3333H30V21.6667ZM30 28.3333H33.3333V30H30V28.3333ZM23.3333 8.33333H26.6667V10H23.3333V8.33333ZM33.3333 10H30V8.33333H33.3333V10ZM23.3333 15H26.6667V16.6667H23.3333V15ZM30 15H33.3333V16.6667H30V15ZM40 4.16667V40H28.3333V38.3333H38.3333V4.16667C38.3333 2.78833 37.2117 1.66667 35.8333 1.66667H20.8333C19.455 1.66667 18.3333 2.78833 18.3333 4.16667V15L16.6667 13.695V4.16667C16.6667 1.86833 18.535 0 20.8333 0H35.8333C38.1317 0 40 1.86833 40 4.16667Z"
            fill={
              formData?.propertyType === "flat-house-purchase"
                ? "#fff"
                : "#0112B8"
            }
          />
        </svg>
      ),
    },
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
        className="flex  w-full flex-col justify-center items-center"
        sx={{ width: "calc(100% - 200px)" }}
      >
        <BorderLinearProgress
          sx={{ maxWidth: "250px", width: "100%", mt: "72px" }}
          variant="determinate"
          value={50}
        />
        <Typography className="headTitle1" textAlign="center">
          HOME LOAN
        </Typography>
        <Typography variant="h1" sx={{ mt: "10px !important" }}>
          What’s your plan?
        </Typography>
        <Box
          display="flex"
          gap={2}
          width="100%"
          mt="45px"
          mb="53px"
          justifyContent="center"
        >
          {loanOptions.map((option) => (
            <Paper
              key={option.value}
              elevation={0}
              sx={{
                maxWidth: "180px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "22px 8px 22px 8px",
                borderRadius: "8px",
                gap: "10px",
                border: "1px solid #9ABCFF",
                backgroundColor: `${
                  formData?.propertyType === option.value ? "#0112B8" : "#fff"
                }`,
                cursor: "pointer",
                transition: " transform 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
              onClick={() =>
                setFormData((pre) => ({ ...pre, propertyType: option.value }))
              }
            >
              <SvgIcon
                sx={{ width: "30px !important", height: "30px !important" }}
              >
                {option.svg}
              </SvgIcon>
              <Typography
                sx={{ fontSize: "12px", textAlign: "center" }}
                color={
                  formData?.propertyType === option.value ? "#fff" : "#101F30"
                }
              >
                {option.label}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Typography className="form-head">
          Tell us the market value of your property
        </Typography>

        <TextField
          className="form-field"
          variant="outlined"
          value={formData?.marketValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^[1-9]\d{0,9}$/.test(inputValue) || inputValue === "") {
              const numericValue =
                inputValue === "" ? 0 : parseInt(inputValue, 10);

              if (numericValue >= 500000 && numericValue <= 50000000) {
                setFormData((pre) => ({ ...pre, marketValue: inputValue }));
              } else if (numericValue < 500000) {
                setFormData((pre) => ({ ...pre, marketValue: "500000" }));
              } else if (numericValue > 50000000) {
                setFormData((pre) => ({ ...pre, marketValue: "50000000" }));
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
          value={formData?.marketValue}
          onChange={handleChange}
          aria-labelledby="slider"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          valueLabelFormat={valuetext}
          min={500000}
          max={50000000}
          step={1}
          marks={marks}
        />

        <div className="checkbox-div">
          <CustomCheckbox>
            <input
              type="checkbox"
              checked={formData?.knowMarketValue}
              onChange={(e) =>
                setFormData((pre) => ({
                  ...pre,
                  knowMarketValue: e.target.checked,
                }))
              }
            />
            <span className="checkmark"></span>
          </CustomCheckbox>
          <Typography className="checkbox-text">
            Know your property’s guideline value?
          </Typography>
        </div>

        <TextField
          className="form-field"
          variant="outlined"
          value={formData?.knowValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^[1-9]\d{0,9}$/.test(inputValue) || inputValue === "") {
              const numericValue =
                inputValue === "" ? 0 : parseInt(inputValue, 10);
              if (numericValue >= 500000 && numericValue <= 50000000) {
                setFormData((pre) => ({ ...pre, knowValue: inputValue }));
              } else if (numericValue < 500000) {
                setFormData((pre) => ({ ...pre, knowValue: "500000" }));
              } else if (numericValue > 50000000) {
                setFormData((pre) => ({ ...pre, knowValue: "50000000" }));
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
          min={500000}
          max={50000000}
          step={1}
          marks={marks}
        />
        <Button
          sx={{ mt: "60px" }}
          onClick={() => handleNext()}
          className="button"
          variant="contained"
        >
          Unlock Offers Now
        </Button>
      </Box>
    </StyledBox>
  );
};

export default Purpose;
