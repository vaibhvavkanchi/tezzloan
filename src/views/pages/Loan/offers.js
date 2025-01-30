import { Box, styled } from "@mui/material";
import React from "react";
const StyledBox = styled(Box)(({ theme }) => ({}));

const offers = () => {
  const bankLoans = [
    {
      bankName: "PDFD BANK",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
    },
    {
      bankName: "HDFC Bank",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
    },
    {
      bankName: "State Bank Of India",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
    },
    {
      bankName: "Union Bank of India",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
    },
    {
      bankName: "AXIS BANK",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
    },
    {
      bankName: "UnionBank",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
    },
  ];
  return (
    <StyledBox>
      <></>
    </StyledBox>
  );
};

export default offers;
