import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import Purpose from "./Purpose";
import Deal from "./Deal";
import Offers from "./offers";
import CibilVerification from "./CibilVerification";
import IncomeSource from "./IncomeSource";

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

      {/* {purpposeType === "" && (
        <>
          <Typography className="headTitle">Personal Loan</Typography>
          <Typography variant="h1">Select a loan purpose</Typography>
          <Container maxWidth="md">
            <Box
              display="flex"
              justifyContent="space-around"
              gap={6}
              mt="64px"
              pb="100px"
              alignItems="center"
            >
              <Box textAlign="center">
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_231_3099)">
                      <path
                        d="M19.1718 2.00063C19.0561 2.01223 18.9488 2.06643 18.8708 2.15272C18.7928 2.23901 18.7497 2.35123 18.7498 2.46755V2.71842L22.4998 5.32945V2.46755C22.4993 2.34323 22.4494 2.22417 22.3612 2.13661C22.2729 2.04904 22.1535 2.00015 22.0292 2.00063H19.2204C19.2042 1.99979 19.188 1.99979 19.1718 2.00063ZM15.94 2.00771C15.8436 2.00702 15.7493 2.0361 15.67 2.09097L6.56594 8.43012C6.46417 8.50094 6.39459 8.60917 6.37245 8.73116C6.3503 8.85316 6.37738 8.97895 6.44777 9.08103L7.58303 10.7143C7.6182 10.765 7.66302 10.8083 7.71493 10.8417C7.76685 10.875 7.82483 10.8977 7.88556 10.9086C7.94629 10.9195 8.00857 10.9183 8.06883 10.905C8.12909 10.8918 8.18614 10.8668 8.23672 10.8314L15.9363 5.4683L23.6386 10.8314C23.7406 10.9019 23.8663 10.9292 23.9883 10.9072C24.1102 10.8853 24.2186 10.8159 24.2896 10.7143L25.4276 9.08103C25.4979 8.97895 25.525 8.85316 25.5029 8.73116C25.4807 8.60917 25.4112 8.50094 25.3094 8.43012L16.2063 2.09097C16.128 2.03681 16.0352 2.00777 15.94 2.00771ZM15.9365 6.611L9.37499 11.1804V16.0931C9.52699 16.0807 9.6824 16.0738 9.84281 16.0738L13.1268 16.0729V10.9148C13.1259 10.6559 13.3349 10.4452 13.5937 10.4442H18.2821C18.5414 10.4447 18.7509 10.6556 18.75 10.9148V16.0719H19.6939C20.4477 16.0843 21.1366 16.3437 21.6879 16.7687C21.9586 16.4983 22.2292 16.2279 22.5 15.9575V11.1803L15.9365 6.611ZM26.8853 13.8199C26.3164 13.8198 25.7461 14.0379 25.3142 14.4698C24.3248 15.4592 23.3355 16.4486 22.3461 17.438C22.7357 17.9774 22.9687 18.6371 22.9687 19.3524C22.9687 21.1621 21.4981 22.6327 19.6884 22.6327H14.5788C13.8979 22.6938 13.8979 21.6377 14.5788 21.6989H19.6884C20.995 21.6989 22.0312 20.6589 22.0312 19.3524C22.0312 18.8925 21.8971 18.4708 21.6724 18.1127C21.259 17.46 20.5323 17.0224 19.6884 17.0096L9.84375 17.0105C7.85211 17.0107 6.74612 18.0403 5.82001 18.9642L12.3285 25.4727C12.4291 25.4568 12.5354 25.4461 12.6572 25.4461H20.6259C22.2365 25.4461 23.5826 24.6508 24.5361 23.2699C25.6099 21.715 27.6204 18.8055 28.5086 17.546C28.8319 17.0876 29.0389 16.5628 29.0588 16.0171C29.0787 15.4715 28.89 14.9034 28.4564 14.4698C28.0245 14.0379 27.4541 13.8199 26.8853 13.8199ZM4.23606 18.8702C4.12037 18.8648 3.99917 18.9084 3.88816 19.0193L1.07566 21.8327C0.891446 22.016 0.891446 22.3141 1.07566 22.4974L8.57748 29.9956C8.76033 30.1773 9.05565 30.1773 9.2385 29.9956L12.051 27.1821C12.2328 26.9993 12.2328 26.704 12.051 26.5211L4.54915 19.0193C4.46163 18.9318 4.3517 18.876 4.23606 18.8702Z"
                        fill="#0112B8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_231_3099">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>
                <Typography className="radioTitle">Home Loan</Typography>
                <Radio
                  value="home"
                  checked={purpposeType === "home"}
                  onChange={handleChange}
                  color="primary"
                />
              </Box>
              <Box textAlign="center">
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M18.5834 10.773C18.3329 10.62 17.9824 10.5 17.4994 10.5C16.6344 10.5 15.7314 10.943 15.7224 10.948C15.5299 11.043 15.2969 11.0055 15.1459 10.854C15.1384 10.847 14.2624 10.0005 12.9994 10.0005C12.3244 10.0005 11.7634 10.238 11.3809 10.466C12.0034 10.917 12.9274 11.7635 13.3634 13.0005H16.5454C16.7719 11.754 17.8219 11.0935 18.5834 10.7735V10.773Z"
                      fill="#0112B8"
                    />
                    <path
                      d="M15 4.34814L3.0485 11.7031C2.874 11.8101 2.6885 11.8776 2.5 11.9261V26.0002C2.5 26.2761 2.724 26.5002 3 26.5002H7.0525C6.701 25.7381 6.5 24.8932 6.5 24.0001C6.5 21.3951 7.685 19.0151 9.927 17.1181C10.5785 16.5666 11.226 16.1341 11.7795 15.8076C11.317 15.5516 10.9995 15.0646 10.9995 14.5001C10.9995 13.7431 11.565 13.1221 12.2945 13.0211C11.815 11.9926 10.913 11.3341 10.498 11.0756C10.297 10.9501 10.1705 10.7346 10.159 10.4996C10.1485 10.2646 10.253 10.0396 10.4405 9.89665C10.8785 9.56215 11.794 9.00065 12.9995 9.00065C14.226 9.00065 15.1525 9.58165 15.585 9.91665C15.99 9.75315 16.737 9.50065 17.4995 9.50065C18.7 9.50065 19.379 10.0621 19.6765 10.3966C19.8385 10.5781 19.8965 10.8271 19.8315 11.0626C19.7655 11.2996 19.5865 11.4841 19.3515 11.5571C18.875 11.7046 17.861 12.1181 17.577 13.0081C18.3675 13.0496 18.9995 13.6996 18.9995 14.5001C18.9995 15.0651 18.682 15.5521 18.2195 15.8076C18.773 16.1341 19.4205 16.5666 20.072 17.1181C22.314 19.0151 23.499 21.3951 23.499 24.0001C23.499 24.8932 23.2975 25.7381 22.9465 26.5002H26.999C27.275 26.5002 27.499 26.2761 27.499 26.0002V11.9341C27.307 11.8846 27.1215 11.8086 26.9505 11.7031L14.999 4.34814H15Z"
                      fill="#0112B8"
                    />
                    <path
                      d="M12 14.5C12 14.776 12.224 15 12.5 15H17.5C17.776 15 18 14.776 18 14.5C18 14.224 17.776 14 17.5 14H12.5C12.224 14 12 14.224 12 14.5Z"
                      fill="#0112B8"
                    />
                    <path
                      d="M16.5 24.4999C16.5 24.0989 16.132 23.8814 15.5 23.6724V25.4364C16.075 25.2954 16.5 24.9254 16.5 24.4999Z"
                      fill="#0112B8"
                    />
                    <path
                      d="M7.5 24C7.5 26.757 9.743 29 12.5 29H17.5C20.257 29 22.5 26.757 22.5 24C22.5 18.774 17.13 16.31 16.401 16H13.599C12.87 16.31 7.5 18.774 7.5 24ZM14.5 19.5405V19.5C14.5 19.2235 14.7235 19 15 19C15.2765 19 15.5 19.2235 15.5 19.5V19.543C16.1725 19.6505 16.7615 19.968 17.1285 20.4445C17.297 20.663 17.2565 20.9765 17.0375 21.1455C16.8185 21.3135 16.505 21.2735 16.3365 21.0545C16.155 20.819 15.8515 20.651 15.5 20.5655V22.623C16.4685 22.9105 17.5 23.332 17.5 24.4995C17.5 25.4655 16.6395 26.273 15.5 26.459V26.4995C15.5 26.776 15.2765 26.9995 15 26.9995C14.7235 26.9995 14.5 26.776 14.5 26.4995V26.4565C13.8275 26.349 13.2385 26.0315 12.8715 25.555C12.703 25.3365 12.7435 25.023 12.9625 24.854C13.1815 24.686 13.4945 24.726 13.6635 24.945C13.845 25.1805 14.1485 25.3485 14.5 25.434V23.3765C13.5315 23.089 12.5 22.6675 12.5 21.5C12.5 20.534 13.3605 19.7265 14.5 19.5405Z"
                      fill="#0112B8"
                    />
                    <path
                      d="M14.5 22.3275V20.5635C13.925 20.7045 13.5 21.0745 13.5 21.5C13.5 21.901 13.868 22.1185 14.5 22.3275Z"
                      fill="#0112B8"
                    />
                    <path
                      d="M2.52426 10.851L14.7373 3.33551C14.8178 3.28601 14.9088 3.26151 14.9993 3.26151C15.0898 3.26151 15.1808 3.28651 15.2613 3.33551L27.4753 10.8515C27.9333 11.1335 28.5703 10.9785 28.8508 10.5245C29.1398 10.055 28.9928 9.43701 28.5233 9.14801L15.5233 1.14801C15.2003 0.950012 14.7983 0.950012 14.4748 1.14801L1.47526 9.14801C1.00626 9.43701 0.859256 10.0545 1.14776 10.524C1.43676 10.9935 2.05376 11.1385 2.52426 10.851Z"
                      fill="#0112B8"
                    />
                    <path d="M24 2.5H22V3.959L24 5.19V2.5Z" fill="#0112B8" />
                  </svg>
                </SvgIcon>
                <Typography className="radioTitle">
                  Loan Against Property Mortgage loan
                </Typography>
                <Radio
                  value="home"
                  checked={purpposeType === "home"}
                  onChange={handleChange}
                  color="primary"
                />
              </Box>
              <Box textAlign="center">
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_234_3124)">
                      <path
                        d="M11.979 0.000976562H5.16602V4.15551L11.979 3.02002V0.000976562Z"
                        fill="#0112B8"
                      />
                      <path
                        d="M26.9773 28.2407V8.57158H15.8789V28.2407H14.1211V6.81377V4.44482L3.02273 6.29451V28.2407H0V29.9986H30V28.2407H26.9773ZM22.6372 11.0991H24.5043V12.857H22.6372V11.0991ZM22.6372 15.3846H24.5043V17.1424H22.6372V15.3846ZM22.6372 19.6699H24.5043V21.4278H22.6372V19.6699ZM22.6372 23.9554H24.5043V25.7132H22.6372V23.9554ZM18.3519 11.0991H20.2189V12.857H18.3519V11.0991ZM18.3519 15.3846H20.2189V17.1424H18.3519V15.3846ZM18.3519 19.6699H20.2189V21.4278H18.3519V19.6699ZM18.3519 23.9554H20.2189V25.7132H18.3519V23.9554ZM9.78105 6.81377H11.6481V8.57158H9.78105V6.81377ZM9.78105 11.0991H11.6481V12.857H9.78105V11.0991ZM9.78105 15.3846H11.6481V17.1424H9.78105V15.3846ZM9.78105 19.6699H11.6481V21.4278H9.78105V19.6699ZM5.49568 11.0991H7.36277V12.857H5.49568V11.0991ZM5.49568 15.3846H7.36277V17.1424H5.49568V15.3846ZM5.49568 19.6699H7.36277V21.4278H5.49568V19.6699ZM5.55029 23.9554H11.5935V28.2407H9.83572V25.7132H7.30811V28.2407H5.55029V23.9554Z"
                        fill="#0112B8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_234_3124">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>
                <Typography className="radioTitle">
                  Commercial property loan
                </Typography>
                <Radio
                  value="home"
                  checked={purpposeType === "home"}
                  onChange={handleChange}
                  color="primary"
                />
              </Box>
            </Box>
          </Container>
        </>
      )} */}
    </StyledBox>
  );
};

export default Loan;
