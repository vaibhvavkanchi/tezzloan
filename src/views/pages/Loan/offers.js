import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    marginTop: "40px",
  },
  "& .card": {
    width: "90%",
    boxShadow: theme.shadows[2],

    backgroundColor: theme.palette.background.default,
    borderRadius: "10px",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // maxWidth: "920px",

    marginTop: "40px",
  },

  "& .bank-name": {
    fontSize: "16px",
    fontFamily: "Open Sans",
  },

  "& .max-amount": {
    fontSize: "15px",
    fontFamily: "Open Sans",
    color: theme.palette.text.gray,
  },
  "& .button": {
    background: theme.palette.secondary.main,
    borderRadius: "5px",
    textTransform: "capitalize",
    fontSize: "16px",
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
const Offers = ({ handleNext, formData, setFormData }) => {
  const isSmall = useMediaQuery("(max-width:599px)");
  const bankLoans = [
    {
      bankName: "HDFC Bank",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
      img: "images/hdfc-bank-logo.png",
    },
    {
      bankName: "State Bank Of India",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
      img: "images/sbi-state-bank-of-india.png",
    },
    {
      bankName: "Union Bank of India",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
      img: "images/union-bank-of-india.png",
    },
    {
      bankName: "AXIS BANK",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
      img: "images/axis.png",
    },
    {
      bankName: "UnionBank",
      maxLoanAmount: "Up To 150L",
      maxTenure: "2 Years",
      rateOfInterest: "8.55%",
      applyNow: "$5,000",
      img: "images/union-2.png",
    },
  ];
  return (
    <StyledBox>
      <Box className="flex  w-full flex-col justify-center items-center">
        <BorderLinearProgress
          sx={{ maxWidth: "250px", width: "100%", mt: "72px" }}
          variant="determinate"
          value={100}
        />
        <Typography className="headTitle1" textAlign="center">
          HOME LOAN
        </Typography>
        <Typography
          variant="h1"
          sx={{ mt: "0px !important", mb: { md: "95px", sm: "" } }}
        >
          Offers are lining up - Take your pick
        </Typography>
        {/* {bankLoans.map((item, index) => (
          <Box className="card">
            <Box>
              <img src={item.img} className="h-[20px]" alt="bank logo" />
              <Typography>{item?.bankName}</Typography>
            </Box>
            <Box>
              <Typography>Max. Loan Amount</Typography>
              <Typography>{item?.maxLoanAmount}</Typography>
              <Typography> EMI</Typography>
              <Typography>{item?.applyNow}</Typography>
            </Box>
            <Box>
              <Typography>Max. Tenure</Typography>
              <Typography>{item?.maxTenure}</Typography>
              <Typography>Rate of Interest</Typography>
              <Typography>{item?.rateOfInterest}</Typography>
            </Box>
            <Box>
              <Button variant="contained">Apply Now</Button>
            </Box>
          </Box>
        ))} */}

        <Box className="w-full flex flex-col items-center justify-center pl-[0px] pb-[70px] sm:pl-[0px] md:pl-[0px] lg:pl-[300px] xl:pl-[350px] 2xl:pl-[400px]">
          {bankLoans.map((item, index) => (
            <Grid
              container
              columnSpacing={isSmall ? 0 : 1}
              sx={{
                padding: isSmall ? "20px 0px 0px 0px" : "20px 40px 20px 40px",
              }}
              className="card"
            >
              <Grid
                item
                xs={4}
                sm={3}
                className="flex flex-col justify-center "
              >
                <img
                  src={item.img}
                  className="h-[20px] max-w-max mb-[13px]"
                  alt="bank logo"
                />
                <Typography className="bank-name">{item?.bankName}</Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography className="max-amount">Max. Loan Amount</Typography>
                <Typography className="bank-name">
                  {item?.maxLoanAmount}
                </Typography>
                <Typography className="max-amount"> EMI</Typography>
                <Typography className="bank-name">{item?.applyNow}</Typography>
              </Grid>
              <Grid item xs={4} sm={3} md={4}>
                <Typography className="max-amount">Max. Tenure</Typography>
                <Typography className="bank-name">{item?.maxTenure}</Typography>
                <Typography className="max-amount">Rate of Interest</Typography>
                <Typography className="bank-name">
                  {item?.rateOfInterest}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={2}
                className="flex flex-col justify-center "
              >
                <Button
                  variant="contained"
                  className="button"
                  onClick={() => handleNext()}
                >
                  Apply Now
                </Button>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Offers;
