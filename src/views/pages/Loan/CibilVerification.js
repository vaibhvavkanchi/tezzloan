import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  LinearProgress,
  Radio,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
  },
  "& .radioField": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .NumberField": {
    width: "100%",
    height: "54px",
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.1)",
    padding: "15px",
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
  "& .ProceedBtn": {
    backgroundColor: theme.palette.secondary.main,
    fontSize: "20px",
  },
  "& .blueText": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const StyledBox1 = styled(Box)(({ theme }) => ({
  // width: "100%",
  animation: "fadeInSlide 0.3s ease-in-out",
  "@keyframes fadeInSlide": {
    from: {
      opacity: 0,
      transform: "translateY(-10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
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

const CibilVerification = ({ handleNext, formData, setFormData }) => {
  const [document, setDocument] = useState("");
  const [documentNumber, setDocumentNumber] = useState({
    pan: "",
    aadharNumber: "",
    fullName: "",
  });
  const [errors, setErrors] = useState({
    pan: "",
    aadharNumber: "",
    fullName: "",
  });

  const handleChange = (Name) => {
    setDocument(Name);
    setErrors({ pan: "", aadharNumber: "", fullName: "" }); // Clear errors when switching document type
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "pan":
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
          error = "PAN must be in the format AAAAA9999A";
        }
        break;
      case "aadharNumber":
        if (!/^\d{12}$/.test(value)) {
          error = "Aadhar must be 12 digits";
        }
        break;
      case "fullName":
        if (!/^[a-z]{10}$/.test(value)) {
          error = "Name must contain only alphabets";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    setDocumentNumber((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const TextFieldWithRadio = ({ Name }) => (
    <div
      className={`NumberField ${
        document === Name ? "radioField text-white" : "bg-white"
      } max-w-[603px] lg:mt-10 mt-7 cursor-pointer`}
      onClick={() => handleChange(Name)}
    >
      <FormControlLabel
        value="radio-option"
        control={
          <Radio
            checked={document === Name}
            onChange={() => handleChange(Name)}
            className={`p-0 ml-4 mr-12 ${document === Name ? "bg-white" : ""}`}
            style={{ padding: "0px", marginLeft: "16px" }}
          />
        }
        label=""
        className="mr-2"
      />
      {Name}
    </div>
  );

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
          Enter your details
        </Typography>

        <TextFieldWithRadio Name={"PAN"} />
        {document === "PAN" && (
          <StyledBox1 className="flex flex-col items-center w-full">
            <TextField
              id="pan"
              className="NumberField bg-white max-w-[603px] lg:mt-8 mt-6"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <div className="w-28">
                    <img src={"images/PANNumber.png"} alt={"pan number"} />
                  </div>
                ),
              }}
              value={documentNumber.pan}
              name="pan"
              placeholder=" ABCTY1234D"
              onChange={handleInputChange}
            />
            {errors.pan && (
              <span className="py-2 text-red-600 max-w-[603px] w-full">
                {errors.pan}
              </span>
            )}
          </StyledBox1>
        )}

        <div className="lg:mt-4 mt-6 w-full flex justify-center">
          <TextFieldWithRadio Name={"Aadhar"} />
        </div>

        {document === "Aadhar" && (
          <StyledBox1 className="xs:mb-5 sm:mb-10 md:mb-28 mb-5 w-full flex flex-col items-center justify-center">
            <TextField
              id={"fullName"}
              className="NumberField bg-white max-w-[603px] mt-8"
              variant="standard"
              placeholder="Full Name"
              InputProps={{
                startAdornment: (
                  <div className="w-28">
                    <img src={"images/fullName.png"} alt={"full name"} />
                  </div>
                ),
              }}
              value={documentNumber.fullName}
              name={"fullName"}
              onChange={handleInputChange}
            />
            {errors.fullName && (
              <span className="py-2 text-red-600 max-w-[603px] w-full">
                {errors.fullName}
              </span>
            )}

            <TextField
              id={"aadharNumber"}
              className="NumberField bg-white max-w-[603px] mt-8"
              variant="standard"
              placeholder="Aadhar Number"
              InputProps={{
                startAdornment: (
                  <div className="w-28">
                    <img src={"images/PANNumber.png"} alt={"aadhar number"} />
                  </div>
                ),
              }}
              value={documentNumber.aadharNumber}
              name={"aadharNumber"}
              onChange={handleInputChange}
            />
            {errors.aadharNumber && (
              <span className="py-2 text-red-600 max-w-[603px] w-full">
                {errors.aadharNumber}
              </span>
            )}
          </StyledBox1>
        )}

        <div className="md:hidden block">
          <Typography className="mt-10 mb-6 text-center text-sm leading-10">
            By clicking on proceed, you have read and agree to the <br />
            <span className="blueText cursor-pointer">
              Credit Report Terms of Use, Terms of Use & Privacy Policy.
            </span>
          </Typography>
        </div>

        <Button
          variant="contained"
          className="ProceedBtn xs:mt-8 sm:mt-12 md:mt-20 mt-8 mb-24 py-5 px-28 rounded-3xl capitalize font-semibold"
          onClick={() => {
            handleNext();
          }}
          disabled={
            (document === "PAN" && !!errors.pan && documentNumber.pan === "") ||
            (document === "Aadhar" &&
              (!!errors.fullName || !!errors.aadharNumber) &&
              documentNumber.aadharNumber === "" &&
              documentNumber.fullName === "")
          }
        >
          Continue
        </Button>
      </Box>
    </StyledBox>
  );
};

export default CibilVerification;
