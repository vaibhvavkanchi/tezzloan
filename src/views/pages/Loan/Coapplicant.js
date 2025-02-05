import {
  Box,
  FormControlLabel,
  LinearProgress,
  Radio,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
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
  "& .radioField": {
    backgroundColor: theme.palette.secondary.main,
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

const Coapplicant = () => {
  const [document, setDocument] = useState("");
  const handleChange = (Name) => {
    setDocument(Name);
    // handleNext();
  };

  const TextFieldWithRadio = ({ Name }) => (
    <div
      className={`NumberField ${
        document === Name ? "radioField text-white" : "bg-white"
      } max-w-[603px]  cursor-pointer`}
      onClick={() => handleChange(Name)}
    >
      <FormControlLabel
        value="radio-option"
        control={
          <Radio
            checked={document === Name}
            onChange={() => handleChange(Name)}
            className={`p-0 ml-4 mr-12 ${
              document === Name ? "bg-white" : "bg-white"
            }`}
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
          Have a Co-applicant?
        </Typography>
        <Box className=" max-w-[700px] w-full p-3 md:p-0 mt-3 md:mt-10 flex flex-col items-center gap-[28px]">
          <TextFieldWithRadio Name={"Yes"} />
          <TextFieldWithRadio Name={"No"} />
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Coapplicant;
