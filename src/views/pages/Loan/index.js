import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import Purpose from "./Purpose";
import Deal from "./Deal";
import Offers from "./offers";
import CibilVerification from "./CibilVerification";
import IncomeSource from "./IncomeSource";
import Earnings from "./Earnings";
import Coapplicant from "./Coapplicant";

const StyledBox = styled(Box)(({ theme }) => ({
  "& .headTitle": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    marginTop: "80px",
  },
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    marginTop: "40px",
  },
  "& h1": {
    textAlign: "center",
    marginTop: "25px",
  },
  "& .radioTitle": {
    color: theme.palette.text.main,
  },
}));

const Loan = ({ activeStep, activeSubStep, handleNext }) => {
  console.log("activeStep", activeStep, "activeSubStep", activeSubStep);
  const [formData, setFormData] = useState({
    propertyType: "plot-purchase",
    marketValue: 500000,
    knowMarketValue: true,
    knowValue: 500000,
    mobile: 0,
    docType: "",
    docNumber: "",
    fullName: "",
    employmentType: "",
    ITRID: "",
    ITRPass: "",
    manualIncome: true,
    manualIncomeAmount: 250000,
    coapplicant: false,
  });
  console.log(formData);
  return (
    <StyledBox>
      {activeStep === 0 && activeSubStep === 0 && (
        <Purpose
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStep === 0 && activeSubStep === 1 && (
        <Offers
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStep === 1 && activeSubStep === 0 && (
        <Deal
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStep === 1 && activeSubStep === 1 && (
        <CibilVerification
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStep === 1 && activeSubStep === 2 && (
        <IncomeSource
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStep === 1 && activeSubStep === 3 && (
        <Earnings
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStep === 1 && activeSubStep === 4 && (
        <Coapplicant
          handleNext={() => handleNext()}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </StyledBox>
  );
};

export default Loan;
