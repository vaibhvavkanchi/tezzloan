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
  "& .NumberField": {
    width: "100%",
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

const CibilVerification = () => {
  const [document, setDocument] = useState("PAN");
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
        if (!/^[A-Za-z\s]{100}$/.test(value)) {
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
    <div className="NumberField max-w-26rem mt-10 cursor-pointer" onClick={() => handleChange(Name)}>
      <FormControlLabel
        value="radio-option"
        control={
          <Radio
            checked={document === Name}
            onChange={() => handleChange(Name)}
            className="p-0 ml-4 mr-12"
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
      <Box className="flex flex-col items-center w-full" sx={{ width: "calc(100% - 200px)" }}>
        <BorderLinearProgress
          sx={{ maxWidth: "250px", width: "100%", mt: "72px" }}
          variant="determinate"
          value={75}
        />
        <Typography className="headTitle1 mt-10 mb-11 uppercase">Home Loan</Typography>
        <Typography variant="h1">Enter your details</Typography>

        <TextFieldWithRadio Name={"PAN"} />
        {document === "PAN" && (
          <>
            <TextField
              id={"pan"}
              className="NumberField max-w-26rem mt-8"
              variant="standard"
              InputProps={{
                startAdornment: <div className="w-28"><img src={"images/PANNumber.png"} alt={"pan number"} /></div>,
              }}
              value={documentNumber.pan}
              name={"pan"}
              onChange={handleInputChange}
            />
            {
              errors.pan && <span className="py-2 text-red-600 max-w-26rem w-full">{errors.pan}</span>
            }
          </>
        )}

        <div className="mt-4 w-full flex justify-center">
          <TextFieldWithRadio Name={"Aadhar"} />
        </div>

        {document === "Aadhar" && (
          <div className="xs:mb-5 sm:mb-10 md:mb-28 mb-5 w-full flex flex-col items-center justify-center">

            <TextField
              id={"fullName"}
              className="NumberField max-w-26rem mt-8"
              variant="standard"
              InputProps={{
                startAdornment: <div className="w-28"><img src={"images/fullName.png"} alt={"full name"} /></div>,
              }}
              value={documentNumber.fullName}
              name={"fullName"}
              onChange={handleInputChange}
            />
            {
              errors.fullName && <span className="py-2 text-red-600 max-w-26rem w-full">{errors.fullName}</span>
            }

            <TextField
              id={"aadharNumber"}
              className="NumberField max-w-26rem mt-8"
              variant="standard"
              InputProps={{
                startAdornment: <div className="w-28"><img src={"images/PANNumber.png"} alt={"aadhar number"} /></div>,
              }}
              value={documentNumber.aadharNumber}
              name={"aadharNumber"}
              onChange={handleInputChange}
            />
            {
              errors.aadharNumber && <span className="py-2 text-red-600 max-w-26rem w-full">{errors.aadharNumber}</span>
            }
          </div>
        )}

        <Button
          variant="contained"
          className="ProceedBtn xs:mt-8 sm:mt-12 md:mt-20 mt-8 mb-24 py-5 px-28 rounded-3xl capitalize font-semibold"
          onClick={() => { }}
          disabled={
            (document === "PAN" && !!errors.pan && documentNumber.pan === "") ||
            (document === "Aadhar" && (!!errors.fullName || !!errors.aadharNumber) && documentNumber.aadharNumber === "" && documentNumber.fullName === "")
          }
        >
          Continue
        </Button>
      </Box>
    </StyledBox>
  );
};

export default CibilVerification;