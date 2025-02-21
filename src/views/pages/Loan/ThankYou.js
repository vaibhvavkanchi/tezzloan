import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  "& .ProceedBtn": {
    backgroundColor: theme.palette.secondary.main,
    fontSize: "20px",
  },
}));

const ThankYou = ({ handleNext, formData, setFormData }) => {

  const [finalPage, setFinalPage] = useState(false)
  return (
    <StyledBox>
      {!finalPage ?
        <Box
          className="flex flex-col justify-center text-center h-screen items-center w-full"
          sx={{ width: "calc(100% - 200px)" }}
        >
          <Typography variant="h1" sx={{ mt: "10px !important" }}>
            Success! We’ve got your details.
          </Typography>

          <Button
            variant="contained"
            className="ProceedBtn xs:mt-8 sm:mt-12 md:mt-20 lg:mt-[85px] mt-8 py-5 px-28 rounded-3xl lg:w-[388px] sm:w-[300px] w-[320px] capitalize font-semibold"
            onClick={() => {
              setFinalPage(true)
            }}
          >
            Continue
          </Button>
        </Box>
        :
        <Box className="w-full flex flex-col items-center justify-center">
          <Box className="w-full flex justify-center pb-[15px] bg-[#9ABCFF]">
            <img src="images/thank-you-banner.png" alt="thank you image" />
          </Box>
          <Box className="lg:w-[1001px] md:w-[600px] sm-[380px] w-full px-3 text-center">

            <Typography variant="h1" className="lg:mt-[85px] md:mt-[64px] sm:mt-[28px] mt-8 text-[64px] lg:mb-[42px] md:mb-[28px] sm:mb-4 mb-10 text-[#0112B8]">Thank you !</Typography>
            <Typography variant="h4" className="font-semibold lg:mb-[67px] md:mb-[48px] sm:mb-6 mb-16">Applied Successfully</Typography>
            <Typography variant="body1" className="text-[17px] lg:mb-[83px] md:mb-14 sm:mb-7 mb-20">Lorem ipsum dolor sit amet consectetur. Eget in ut ut vulputate ut. Sed turpis turpis elit volutpat nulla purus viverra rutrum lacus. Varius pellentesque dui mi quam aliquet varius convallis rhoncus adipiscing. Malesuada convallis velit est velit ultrices lectus. Duis a suspendisse duis</Typography>
            <Button
              variant="contained"
              className="ProceedBtn py-[10px] px-[10px] rounded-[10px] text-[24px] lg:w-[388px] sm:w-[300px] w-[320px] capitalize font-semibold lg:mb-32 md:mb-16 sm:mb-7 mb-32"
              onClick={() => {
              }}
            >
              Download Your Report
            </Button>
          </Box>
        </Box>}
    </StyledBox>
  );
};

export default ThankYou;
