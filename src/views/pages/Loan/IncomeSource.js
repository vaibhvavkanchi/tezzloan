import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  LinearProgress,
  Radio,
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
  "& .sub-head": {
    fontSize: "16px",
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const IncomeSource = ({ handleNext, formData, setFormData }) => {
  const [document, setDocument] = useState("");
  const handleChange = async (Name) => {
    setDocument(Name);
    await setFormData((pre) => ({ ...pre, employmentType: Name }));
    handleNext();
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
        <Typography className="headTitle1 mt-4 uppercase">Home Loan</Typography>
        <Typography variant="h1" sx={{ mt: "10px !important" }}>
          Welcome Vishal
        </Typography>
        <Typography className="mt-0 lg:mt-4 sub-head">
          What is Your Earning Source?
        </Typography>

        <div className="w-full flex flex-col justify-center items-center h-fit pb-20">
          <TextFieldWithRadio Name={"Salary"} />
          <TextFieldWithRadio Name={"Self Employed"} />
        </div>
      </Box>
    </StyledBox>
  );
};

export default IncomeSource;
