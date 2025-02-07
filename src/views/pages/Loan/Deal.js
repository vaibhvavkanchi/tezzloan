import React, { useState } from "react";
import {
  Box,
  Button,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import OTPInput from "../../../component/OtpField";

const StyledBox = styled(Box)(({ theme }) => ({
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
  },
  "& .NumberField": {
    width: "100%",
    maxWidth: "419px",
    height: "54px",
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    borderRadius: "6px",
    backgroundColor: "white",
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
  "& .ProceedBtn": {
    backgroundColor: theme.palette.secondary.main,
    fontSize: "20px",
  },
  "& .blueText": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  "& .offerText": {
    color: "#3C3C3C",
    fontSize: "12px",
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

const Deal = ({ handleNext, formData, setFormData }) => {
  const [number, setNumber] = useState("");
  const [otpsend, setSendOtp] = useState(false);
  const [userOtp, setUserOtp] = useState(0);

  const otpConfirmation = (otp) => {
    setUserOtp(otp);
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (/^[1-9]\d{0,9}$/.test(inputValue) || inputValue === "") {
      setNumber(inputValue);
    }
  };

  const handleSubmit = () => {
    if (number) {
      setSendOtp(!otpsend);
    }
  };

  const IndCode = () => (
    <Box className="flex gap-1 items-center w-32">
      <img src="images/Ind.png" alt="India flag" />
      <Typography variant="body1" sx={{ padding: "0 8px" }}>
        +91
      </Typography>
      <Box
        sx={{
          borderLeft: "1px solid black",
          height: "20px",
        }}
      />
    </Box>
  );
  const handleResend = (e) => {
    e.preventDefault();
    console.log("Resend OTP requested");
  };

  function maskMiddleCharacters(input) {
    if (typeof input !== "string" || input.length < 5) return input;

    return input.slice(0, 3) + "*".repeat(input.length - 5) + input.slice(-2);
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
          value={!otpsend ? 15 : 30}
        />
        <Typography
          className={`headTitle1 `}
        >
          HOME LOAN
        </Typography>
        <Typography
          className={` text-[20px] lg:text-[40px] sm:text-[30px]  mt-3 font-bold ${
            !otpsend ? "lg:mt-6" : "lg:mt-9 mt-3"
          }" `}
        >
          Let’s seal the deal
        </Typography>

        {!otpsend ? (
          <>
            <TextField
              id="phone-number"
              className="NumberField mt-9 lg:mt-28 md:mt-14 sm:mt-9"
              variant="standard"
              InputProps={{
                startAdornment: <IndCode />,
              }}
              value={number}
              onChange={handleChange}
            />
            <Typography
              variant="body2"
              style={{ color: "#3C3C3C" }}
              className="text-xs mt-6"
            >
              We will check offers against your number
            </Typography>
            <Button
              variant="contained"
              className="ProceedBtn mt-6 lg:mt-20 md:mt-10 sm:mt-6 py-5 px-28 rounded-3xl capitalize font-semibold"
              onClick={handleSubmit}
            >
              Proceed
            </Button>
            <Typography className="mt-10 mb-24 text-center text-sm leading-10">
              By clicking on proceed, you have read and agree to the <br />
              <span className="blueText cursor-pointer">
                Credit Report Terms of Use, Terms of Use & Privacy Policy.
              </span>
            </Typography>
          </>
        ) : (
          <div className="mt-4 flex flex-col items-center justify-center">
            <Typography
              variant="body2"
              className="offerText mb-6 lg:mb-14 sm:mb-9 text-center"
            >
              Enter the 5-digit confirmation code that has been sent to +91-
              {maskMiddleCharacters(number)}{" "}
              <span
                onClick={() => {
                  setSendOtp(!otpsend);
                }}
                className="blueText cursor-pointer"
              >
                edit
              </span>
            </Typography>
            <OTPInput onComplete={otpConfirmation} />
            <p
              style={{ color: "#666" }}
              className="mt-5 lg:mt-8 sm:mt-6 mb-7 lg:mb-24"
            >
              Haven't got the confirmation code yet?{" "}
              <a
                href="#"
                onClick={handleResend}
                className="blueText cursor-pointer no-underline"
              >
                Resend
              </a>
            </p>
            <Button
              onClick={() => handleNext()}
              variant="contained"
              className="ProceedBtn py-5 px-28 rounded-3xl capitalize font-semibold mb-10"
            >
              Continue
            </Button>
          </div>
        )}
      </Box>
    </StyledBox>
  );
};

export default Deal;
