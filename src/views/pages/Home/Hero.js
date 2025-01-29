import { ArrowForward, East } from "@mui/icons-material";
import {
  Box,
  Grid,
  styled,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingBottom: "150px",
  "& .h1Span": {
    color: theme.palette.primary.main,
  },
  "& .subLinks": {
    color: theme.palette.text.light,
    fontSize: "11px",
    fontFamily: "Open Sans",
    fontWeight: 400,
    marginBottom: "15px",
    marginLeft: "30px",
    "@media (max-width: 680px)": {
      textAlign: "center",
      marginTop: "33px",
    },
  },

  "& .card": {
    cursor: "pointer",
    backgroundColor: theme.palette.background.default,
    border: "1px solid #CADCFF",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 1px 7px 0px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition:
      "background-color 0.3s ease, color 0.3s ease, fill 0.3s ease, transform 0.3s ease", // Added transform to transition

    "& .card-head": {
      fontSize: "12px",
      color: theme.palette.primary.main,
      textAlign: "center",
      fontWeight: 600,
      fontFamily: "Open Sans",
      transition: "color 0.3s ease",
      [theme.breakpoints.down("sm")]: {
        fontSize: "9px",
        fontWeight: 500,
      },
    },

    "& .card-subhead": {
      fontSize: "10px",
      color: theme.palette.text.main,
      textAlign: "center",
      fontWeight: 400,
      fontFamily: "Open Sans",
      transition: "color 0.3s ease", // Optional: Add transition for text color
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
        fontWeight: 400,
      },
    },

    "& .card-btn": {
      fontSize: "10px",
      color: theme.palette.primary.main,
      textAlign: "center",
      fontWeight: 400,
      fontFamily: "Open Sans",
      transition: "color 0.3s ease",
      [theme.breakpoints.down("sm")]: {
        fontSize: "7px",
        fontWeight: 400,
      },
    },

    "& .icon": {
      fill: theme.palette.primary.main,
      transition: "fill 0.3s ease", // Optional: Add transition for icon fill
    },

    "&:hover": {
      backgroundColor: "#4154FA",
      transform: "translateY(-5px)", // Lift the card up by 5px
      "& .card-head": {
        color: "#FFFFFF",
      },
      "& .card-subhead": {
        color: "#FFFFFF",
      },
      "& .card-btn": {
        color: "#FFFFFF",
      },
      "& .icon": {
        fill: "#FFFFFF",
      },
    },
  },
}));

const Hero = () => {
  const navigate = useNavigate();
  const isSmall = useMediaQuery("(max-width:680px)");

  return (
    <StyledBox>
      <Typography variant="h1" align="center" data-aos="fade-up">
        Sirf tez nahi sabse, <span className="h1Span">tez.</span>
      </Typography>

      <Grid container spacing={1} sx={{ marginTop: "55px" }}>
        <Grid item sm={12} md={8}>
          <Grid container spacing="20px">
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card" onClick={() => navigate("/home-loan")}>
                <SvgIcon
                  sx={{ width: "30px !important", height: "30px !important" }}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    {/* <g clip-path="url(#clip0_1253_896)"> */}
                    <path d="M19.6718 2.00063C19.5561 2.01223 19.4488 2.06643 19.3708 2.15272C19.2928 2.23901 19.2497 2.35123 19.2498 2.46755V2.71842L22.9998 5.32945V2.46755C22.9993 2.34323 22.9494 2.22417 22.8612 2.13661C22.7729 2.04904 22.6535 2.00015 22.5292 2.00063H19.7204C19.7042 1.99979 19.688 1.99979 19.6718 2.00063ZM16.44 2.00771C16.3436 2.00702 16.2493 2.0361 16.17 2.09097L7.06595 8.43012C6.96417 8.50094 6.89459 8.60917 6.87245 8.73116C6.8503 8.85316 6.87739 8.97895 6.94778 9.08103L8.08303 10.7143C8.1182 10.765 8.16302 10.8083 8.21494 10.8417C8.26685 10.875 8.32484 10.8977 8.38557 10.9086C8.4463 10.9195 8.50857 10.9183 8.56883 10.905C8.62909 10.8918 8.68614 10.8668 8.73672 10.8314L16.4363 5.4683L24.1386 10.8314C24.2406 10.9019 24.3663 10.9292 24.4883 10.9072C24.6103 10.8853 24.7186 10.8159 24.7896 10.7143L25.9276 9.08103C25.998 8.97895 26.025 8.85316 26.0029 8.73116C25.9807 8.60917 25.9112 8.50094 25.8094 8.43012L16.7063 2.09097C16.628 2.03681 16.5352 2.00777 16.44 2.00771ZM16.4365 6.611L9.87499 11.1804V16.0931C10.027 16.0807 10.1824 16.0738 10.3428 16.0738L13.6268 16.0729V10.9148C13.6259 10.6559 13.8349 10.4452 14.0937 10.4442H18.7822C19.0414 10.4447 19.2509 10.6556 19.25 10.9148V16.0719H20.1939C20.9477 16.0843 21.6366 16.3437 22.1879 16.7687C22.4586 16.4983 22.7292 16.2279 23 15.9575V11.1803L16.4365 6.611ZM27.3853 13.8199C26.8164 13.8198 26.2461 14.0379 25.8142 14.4698C24.8249 15.4592 23.8355 16.4486 22.8461 17.438C23.2357 17.9774 23.4687 18.6371 23.4687 19.3524C23.4687 21.1621 21.9981 22.6327 20.1884 22.6327H15.0789C14.3979 22.6938 14.3979 21.6377 15.0789 21.6989H20.1884C21.495 21.6989 22.5313 20.6589 22.5313 19.3524C22.5313 18.8925 22.3971 18.4708 22.1724 18.1127C21.759 17.46 21.0323 17.0224 20.1884 17.0096L10.3438 17.0105C8.35211 17.0107 7.24612 18.0403 6.32001 18.9642L12.8285 25.4727C12.9291 25.4568 13.0354 25.4461 13.1572 25.4461H21.1259C22.7365 25.4461 24.0826 24.6508 25.0361 23.2699C26.1099 21.715 28.1204 18.8055 29.0086 17.546C29.3319 17.0876 29.5389 16.5628 29.5588 16.0171C29.5787 15.4715 29.39 14.9034 28.9564 14.4698C28.5245 14.0379 27.9541 13.8199 27.3853 13.8199ZM4.73606 18.8702C4.62037 18.8648 4.49917 18.9084 4.38816 19.0193L1.57566 21.8327C1.39145 22.016 1.39145 22.3141 1.57566 22.4974L9.07748 29.9956C9.26033 30.1773 9.55565 30.1773 9.7385 29.9956L12.551 27.1821C12.7328 26.9993 12.7328 26.704 12.551 26.5211L5.04915 19.0193C4.96163 18.9318 4.8517 18.876 4.73606 18.8702Z" />
                    {/* </g> */}
                    <defs>
                      <clipPath id="clip0_1253_896">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>

                <Typography className="card-head">Home Loan</Typography>
                <Typography className="card-subhead">
                  Choose from lowest interest rates available for your dream
                  home
                </Typography>
                <Typography className="card-btn">
                  {" "}
                  Know more <East sx={{ width: "12px" }} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card">
                <SvgIcon
                  sx={{ width: "30px !important", height: "30px !important" }}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path d="M19.0834 10.773C18.8329 10.62 18.4824 10.5 17.9994 10.5C17.1344 10.5 16.2314 10.943 16.2224 10.948C16.0299 11.043 15.7969 11.0055 15.6459 10.854C15.6384 10.847 14.7624 10.0005 13.4994 10.0005C12.8244 10.0005 12.2634 10.238 11.8809 10.466C12.5034 10.917 13.4274 11.7635 13.8634 13.0005H17.0454C17.2719 11.754 18.3219 11.0935 19.0834 10.7735V10.773Z" />
                    <path d="M15.5 4.34814L3.5485 11.7031C3.374 11.8101 3.1885 11.8776 3 11.9261V26.0002C3 26.2762 3.224 26.5002 3.5 26.5002H7.5525C7.201 25.7382 7 24.8932 7 24.0002C7 21.3952 8.185 19.0152 10.427 17.1182C11.0785 16.5667 11.726 16.1342 12.2795 15.8077C11.817 15.5517 11.4995 15.0647 11.4995 14.5002C11.4995 13.7432 12.065 13.1222 12.7945 13.0211C12.315 11.9926 11.413 11.3341 10.998 11.0756C10.797 10.9501 10.6705 10.7346 10.659 10.4996C10.6485 10.2646 10.753 10.0396 10.9405 9.89665C11.3785 9.56215 12.294 9.00065 13.4995 9.00065C14.726 9.00065 15.6525 9.58165 16.085 9.91665C16.49 9.75315 17.237 9.50065 17.9995 9.50065C19.2 9.50065 19.879 10.0621 20.1765 10.3966C20.3385 10.5781 20.3965 10.8271 20.3315 11.0626C20.2655 11.2996 20.0865 11.4841 19.8515 11.5571C19.375 11.7046 18.361 12.1181 18.077 13.0081C18.8675 13.0496 19.4995 13.6997 19.4995 14.5002C19.4995 15.0652 19.182 15.5522 18.7195 15.8077C19.273 16.1342 19.9205 16.5667 20.572 17.1182C22.814 19.0152 23.999 21.3952 23.999 24.0002C23.999 24.8932 23.7975 25.7382 23.4465 26.5002H27.499C27.775 26.5002 27.999 26.2762 27.999 26.0002V11.9341C27.807 11.8846 27.6215 11.8086 27.4505 11.7031L15.499 4.34814H15.5Z" />
                    <path d="M12.5 14.5C12.5 14.776 12.724 15 13 15H18C18.276 15 18.5 14.776 18.5 14.5C18.5 14.224 18.276 14 18 14H13C12.724 14 12.5 14.224 12.5 14.5Z" />
                    <path d="M17 24.4999C17 24.0989 16.632 23.8814 16 23.6724V25.4364C16.575 25.2954 17 24.9254 17 24.4999Z" />
                    <path d="M8 24C8 26.757 10.243 29 13 29H18C20.757 29 23 26.757 23 24C23 18.774 17.63 16.31 16.901 16H14.099C13.37 16.31 8 18.774 8 24ZM15 19.5405V19.5C15 19.2235 15.2235 19 15.5 19C15.7765 19 16 19.2235 16 19.5V19.543C16.6725 19.6505 17.2615 19.968 17.6285 20.4445C17.797 20.663 17.7565 20.9765 17.5375 21.1455C17.3185 21.3135 17.005 21.2735 16.8365 21.0545C16.655 20.819 16.3515 20.651 16 20.5655V22.623C16.9685 22.9105 18 23.332 18 24.4995C18 25.4655 17.1395 26.273 16 26.459V26.4995C16 26.776 15.7765 26.9995 15.5 26.9995C15.2235 26.9995 15 26.776 15 26.4995V26.4565C14.3275 26.349 13.7385 26.0315 13.3715 25.555C13.203 25.3365 13.2435 25.023 13.4625 24.854C13.6815 24.686 13.9945 24.726 14.1635 24.945C14.345 25.1805 14.6485 25.3485 15 25.434V23.3765C14.0315 23.089 13 22.6675 13 21.5C13 20.534 13.8605 19.7265 15 19.5405Z" />
                    <path d="M15 22.3275V20.5635C14.425 20.7045 14 21.0745 14 21.5C14 21.901 14.368 22.1185 15 22.3275Z" />
                    <path d="M3.02426 10.851L15.2373 3.33551C15.3178 3.28601 15.4088 3.26151 15.4993 3.26151C15.5898 3.26151 15.6808 3.28651 15.7613 3.33551L27.9753 10.8515C28.4333 11.1335 29.0703 10.9785 29.3508 10.5245C29.6398 10.055 29.4928 9.43701 29.0233 9.14801L16.0233 1.14801C15.7003 0.950012 15.2983 0.950012 14.9748 1.14801L1.97526 9.14801C1.50626 9.43701 1.35926 10.0545 1.64776 10.524C1.93676 10.9935 2.55376 11.1385 3.02426 10.851Z" />
                    <path d="M24.5 2.5H22.5V3.959L24.5 5.19V2.5Z" />
                  </svg>
                </SvgIcon>

                <Typography className="card-head">
                  Commercial property Loan
                </Typography>
                <Typography className="card-subhead">
                  Choose from lowest interest rates available for your dream
                  home
                </Typography>
                <Typography className="card-btn">
                  {" "}
                  Know more <East sx={{ width: "12px" }} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card">
                <SvgIcon
                  sx={{ width: "30px !important", height: "30px !important" }}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path d="M12.4776 0H5.66406V4.15489L12.4776 3.0193V0Z" />
                    <path d="M27.4776 28.2418V8.57096H16.3783V28.2418H14.6204V6.813V4.44385L3.52104 6.29369V28.2418H0.498047V29.9998H30.5006V28.2418H27.4776ZM23.1372 11.0987H25.0045V12.8567H23.1372V11.0987ZM23.1372 15.3845H25.0045V17.1425H23.1372V15.3845ZM23.1372 19.6703H25.0045V21.4282H23.1372V19.6703ZM23.1372 23.9561H25.0045V25.714H23.1372V23.9561ZM18.8515 11.0987H20.7187V12.8567H18.8515V11.0987ZM18.8515 15.3845H20.7187V17.1425H18.8515V15.3845ZM18.8515 19.6703H20.7187V21.4282H18.8515V19.6703ZM18.8515 23.9561H20.7187V25.714H18.8515V23.9561ZM10.2799 6.813H12.1472V8.57096H10.2799V6.813ZM10.2799 11.0987H12.1472V12.8567H10.2799V11.0987ZM10.2799 15.3845H12.1472V17.1425H10.2799V15.3845ZM10.2799 19.6703H12.1472V21.4282H10.2799V19.6703ZM5.9942 11.0987H7.86146V12.8567H5.9942V11.0987ZM5.9942 15.3845H7.86146V17.1425H5.9942V15.3845ZM5.9942 19.6703H7.86146V21.4282H5.9942V19.6703ZM6.04882 23.9561H12.0926V28.2418H10.3346V25.714H7.80678V28.2418H6.04882V23.9561Z" />
                  </svg>
                </SvgIcon>

                <Typography className="card-head">
                  Property Mortgage Loan
                </Typography>
                <Typography className="card-subhead">
                  Choose from lowest interest rates available for your dream
                  home
                </Typography>
                <Typography className="card-btn">
                  {" "}
                  Know more <East sx={{ width: "12px" }} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card">
                <SvgIcon
                  sx={{ width: "30px !important", height: "30px !important" }}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path d="M17.6832 24.6978H17.5872C17.1631 24.6978 16.7645 24.8626 16.4654 25.1627L15.6978 25.9298L14.9306 25.1627C14.631 24.8626 14.2324 24.6978 13.8083 24.6978H13.7123C12.837 24.6978 12.125 25.4098 12.125 26.2846C12.125 26.7485 12.3271 27.188 12.6793 27.4901L15.1317 29.5924C15.4461 29.8614 15.9489 29.8614 16.2633 29.5924L18.7162 27.4901C19.0684 27.1875 19.2705 26.7485 19.2705 26.2846C19.2705 25.4098 18.5585 24.6978 17.6832 24.6978Z" />
                    <path d="M26.673 5.30268H27.4386V3.63012C27.1349 3.45352 26.9282 3.12789 26.9282 2.75071C26.9282 2.18672 27.385 1.72992 27.949 1.72992C28.513 1.72992 28.9698 2.18672 28.9698 2.75071C28.9698 3.12738 28.763 3.45301 28.4594 3.63012V5.30268H29.225L29.99 4.28189C30.3198 3.84346 30.5004 3.29938 30.5004 2.75071C30.5004 1.34355 29.3556 0.19873 27.9485 0.19873C26.5413 0.19873 25.3965 1.34355 25.3965 2.75071C25.3965 3.29938 25.5777 3.84346 25.9069 4.28138L26.673 5.30268Z" />
                    <path d="M28.4589 7.34403C28.7401 7.34403 28.9693 7.11538 28.9693 6.83364V6.32324H26.9277V6.83364C26.9277 7.11538 27.1569 7.34403 27.4381 7.34403H28.4589Z" />
                    <path d="M3.38311 6.1146C3.70568 6.38358 4.2125 6.38307 4.53405 6.11511C6.01011 4.88557 6.8982 3.11603 7.00947 1.21175C5.92998 1.15969 4.88673 0.845283 3.95883 0.291504C3.03094 0.845283 1.98769 1.15969 0.908203 1.21124C1.01947 3.11603 1.90756 4.88557 3.38311 6.1146Z" />
                    <path d="M0.5 24.3005L1.2217 25.0222C3.01319 23.2307 5.92703 23.2307 7.71852 25.0222L8.44022 24.3005C6.25113 22.1114 2.68908 22.1114 0.5 24.3005Z" />
                    <path d="M1.94336 25.7446L2.66506 26.4663C3.14687 25.9845 3.78793 25.7185 4.4693 25.7185C5.15068 25.7185 5.79174 25.9845 6.27406 26.4663L6.99576 25.7446C6.32102 25.0698 5.42374 24.6978 4.4693 24.6978C3.51487 24.6978 2.6181 25.0698 1.94336 25.7446Z" />
                    <path d="M4.47064 29.8016C5.31629 29.8016 6.00182 29.1161 6.00182 28.2704C6.00182 27.4248 5.31629 26.7393 4.47064 26.7393C3.62499 26.7393 2.93945 27.4248 2.93945 28.2704C2.93945 29.1161 3.62499 29.8016 4.47064 29.8016Z" />
                    <path d="M26.0615 20.6148C25.6951 20.6148 25.3965 20.9128 25.3965 21.2798C25.3965 21.4115 25.4353 21.5391 25.5083 21.6488L26.1799 22.6563H28.6962L29.3679 21.6483C29.4409 21.5386 29.4796 21.411 29.4796 21.2793C29.4796 20.9123 29.1816 20.6143 28.8146 20.6143H28.6702L27.4381 21.8464L26.206 20.6148H26.0615Z" />
                    <path d="M28.7236 23.6768H26.1517L25.0084 25.1059C24.6001 25.6163 24.375 26.2578 24.375 26.9111C24.375 28.5051 25.6714 29.8015 27.2654 29.8015H27.6099C29.2038 29.8015 30.5003 28.5051 30.5003 26.9111C30.5003 26.2578 30.2752 25.6163 29.8668 25.1054L28.7236 23.6768Z" />
                    <path d="M13.1471 4.28189H14.6783V5.81308C14.6783 6.09481 14.9075 6.32347 15.1887 6.32347H16.2095C16.4907 6.32347 16.7199 6.09481 16.7199 5.81308V4.28189H18.2511C18.5323 4.28189 18.7615 4.05323 18.7615 3.7715V2.75071C18.7615 2.46897 18.5323 2.24031 18.2511 2.24031H16.7199V0.709125C16.7199 0.427387 16.4907 0.19873 16.2095 0.19873H15.1887C14.9075 0.19873 14.6783 0.427387 14.6783 0.709125V2.24031H13.1471C12.8659 2.24031 12.6367 2.46897 12.6367 2.75071V3.7715C12.6367 4.05323 12.8659 4.28189 13.1471 4.28189Z" />
                    <path d="M14.1666 18.573C14.1666 18.0101 13.7088 17.5522 13.1458 17.5522C12.5828 17.5522 12.125 18.0101 12.125 18.573V20.6146H14.1666V18.573Z" />
                    <path d="M10.084 20.6147H11.1048V18.5731C11.1048 17.4472 12.0204 16.5315 13.1464 16.5315C14.2723 16.5315 15.1879 17.4472 15.1879 18.5731V20.6147H21.3127V15.5107H10.084V20.6147ZM16.7191 17.0419H19.7815V19.0835H16.7191V17.0419Z" />
                    <path d="M9.21875 14.49H22.1802L16.3515 10.6043C15.9636 10.3461 15.4359 10.3461 15.0475 10.6043L9.21875 14.49ZM16.72 12.4484C16.72 13.0124 16.2632 13.4692 15.6992 13.4692C15.1352 13.4692 14.6784 13.0124 14.6784 12.4484C14.6784 11.8844 15.1352 11.4276 15.6992 11.4276C16.2632 11.4276 16.72 11.8844 16.72 12.4484Z" />
                    <path d="M15.7458 24.4404C15.8872 24.299 16.0449 24.1811 16.2102 24.0775V21.6353H15.1895V24.0775C15.3553 24.1816 15.5136 24.2995 15.6549 24.4414L15.6998 24.4863L15.7458 24.4404Z" />
                    <path d="M16.2083 7.34424H15.1875V9.45421C15.3534 9.41542 15.5239 9.3899 15.6979 9.3899C15.8719 9.3899 16.0424 9.41542 16.2083 9.45421V7.34424Z" />
                    <path d="M22.333 20.9136L21.6113 21.6353L24.3144 24.3388L24.9559 23.5365L22.333 20.9136Z" />
                    <path d="M6.03711 6.06104L11.6305 11.6545L12.4967 11.0772L6.66949 5.24951C6.47758 5.53329 6.26526 5.80329 6.03711 6.06104Z" />
                    <path d="M7.57227 22.4039C7.87901 22.5662 8.16994 22.7592 8.44963 22.97L9.78432 21.6353L9.06262 20.9136L7.57227 22.4039Z" />
                    <path d="M25.706 5.71496L25.09 4.89322L25.0879 4.88965L18.9004 11.0767L19.7665 11.6539L25.706 5.71496Z" />

                    <defs>
                      <clipPath id="clip0_1253_955">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>

                <Typography className="card-head">Facility Required</Typography>
                <Typography className="card-subhead">
                  Choose from lowest interest rates available for your dream
                  home
                </Typography>
                <Typography className="card-btn">
                  {" "}
                  Know more <East sx={{ width: "12px" }} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card">
                <SvgIcon
                  sx={{ width: "30px !important", height: "30px !important" }}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path d="M27.8636 10.0944L16.3468 0.82146C16.1057 0.629452 15.8067 0.524902 15.4985 0.524902C15.1903 0.524902 14.8913 0.629452 14.6502 0.82146L9.43889 5.02228V2.42339C9.43889 2.33463 9.42141 2.24673 9.38744 2.16472C9.35348 2.08271 9.30369 2.0082 9.24092 1.94543C9.17815 1.88266 9.10364 1.83287 9.02163 1.79891C8.93962 1.76494 8.85173 1.74745 8.76296 1.74746H6.33302C6.24426 1.74746 6.15637 1.76494 6.07436 1.79891C5.99235 1.83288 5.91784 1.88267 5.85507 1.94544C5.79231 2.0082 5.74252 2.08272 5.70855 2.16473C5.67459 2.24673 5.6571 2.33463 5.65711 2.42339V8.06392L3.13656 10.0944C2.85731 10.3196 2.67891 10.6464 2.64057 11.0031C2.60223 11.3597 2.70709 11.717 2.93211 11.9964C3.15712 12.2757 3.48387 12.4543 3.84051 12.4928C4.19714 12.5313 4.55448 12.4266 4.83395 12.2018L15.4985 3.61301L26.1666 12.2023C26.3653 12.3624 26.6053 12.463 26.8589 12.4924C27.1124 12.5219 27.369 12.479 27.5992 12.3689C27.8294 12.2587 28.0237 12.0856 28.1598 11.8697C28.2958 11.6537 28.368 11.4037 28.368 11.1485V11.1483C28.368 10.9461 28.3227 10.7465 28.2354 10.5641C28.1481 10.3817 28.021 10.2212 27.8636 10.0944Z" />
                    <path d="M5.65625 13.9242V26.5064H8.37344L9.20145 25.6784V23.5459L8.33965 22.6841V19.9263C8.34004 19.4587 8.52344 19.0098 8.85062 18.6757C9.17779 18.3415 9.62274 18.1487 10.0903 18.1385V17.9053C10.0912 16.4714 10.6615 15.0965 11.6758 14.0828C12.6901 13.0692 14.0654 12.4998 15.4993 12.4998C16.9333 12.4998 18.3085 13.0692 19.3228 14.0828C20.3371 15.0965 20.9074 16.4714 20.9084 17.9053V18.1385C21.3753 18.1495 21.8195 18.3426 22.146 18.6767C22.4725 19.0107 22.6554 19.4592 22.6556 19.9263V22.6841L21.7938 23.5459V25.6784L22.6218 26.5064H25.339V13.9208L15.4976 5.99902L5.65625 13.9242Z" />
                    <path d="M20.8714 19.6596H19.387V17.9061C19.3862 16.8754 18.9762 15.8872 18.2472 15.1587C17.5181 14.4302 16.5296 14.021 15.4989 14.021C14.4682 14.021 13.4797 14.4302 12.7507 15.1587C12.0216 15.8872 11.6116 16.8754 11.6108 17.9061V19.6596H10.1265C10.0916 19.6596 10.0571 19.6664 10.025 19.6797C9.99277 19.693 9.96352 19.7125 9.93889 19.7372C9.91426 19.7618 9.89473 19.791 9.88143 19.8232C9.86812 19.8554 9.86129 19.8899 9.86133 19.9247V22.0543L10.723 22.9159V26.3062C10.3859 26.6433 10.1984 26.8323 9.86133 27.1693V29.21C9.86129 29.2448 9.86812 29.2793 9.88143 29.3115C9.89474 29.3437 9.91427 29.3729 9.9389 29.3975C9.96353 29.4222 9.99277 29.4417 10.025 29.455C10.0571 29.4683 10.0916 29.4751 10.1265 29.4751H12.2123L13.0739 28.6134H17.9239L18.7856 29.4751H20.8714C20.9062 29.4751 20.9407 29.4683 20.9729 29.455C21.005 29.4417 21.0343 29.4222 21.0589 29.3975C21.0835 29.3729 21.1031 29.3437 21.1164 29.3115C21.1297 29.2793 21.1365 29.2448 21.1365 29.21V27.1693L20.2748 26.3062V22.9159L21.1365 22.0542V19.9247C21.1365 19.8899 21.1297 19.8554 21.1164 19.8232C21.1031 19.791 21.0836 19.7618 21.0589 19.7372C21.0343 19.7125 21.0051 19.693 20.9729 19.6797C20.9407 19.6664 20.9062 19.6596 20.8714 19.6596ZM13.4754 17.9061C13.476 17.3698 13.6894 16.8557 14.0688 16.4767C14.4483 16.0977 14.9626 15.8848 15.4989 15.8848C16.0351 15.8848 16.5495 16.0977 16.9289 16.4767C17.3083 16.8557 17.5217 17.3698 17.5223 17.9061V19.6596H13.4754L13.4754 17.9061ZM12.2198 22.4291C12.2131 22.182 12.2476 21.9355 12.3219 21.6998C12.3882 21.537 12.5043 21.3995 12.6537 21.3069C12.8031 21.2143 12.978 21.1714 13.1532 21.1845C13.3551 21.1754 13.5538 21.2368 13.7154 21.358C13.8771 21.4792 13.9916 21.6528 14.0394 21.8491C14.0943 22.0264 14.1212 22.2112 14.1191 22.3968C14.1472 22.7196 14.0569 23.0416 13.8652 23.3028C13.7764 23.3972 13.6679 23.4709 13.5475 23.5187C13.427 23.5664 13.2975 23.5871 13.1682 23.5792C12.4189 23.5792 12.2198 22.8573 12.2198 22.4291ZM14.5555 27.0044C14.4918 27.1233 14.3976 27.2232 14.2825 27.2936C14.1675 27.3641 14.0357 27.4026 13.9008 27.4051C13.7712 27.4067 13.6438 27.3719 13.533 27.3047C13.4222 27.2376 13.3325 27.1407 13.2739 27.0252C13.2153 26.9096 13.1903 26.7799 13.2017 26.6508C13.2131 26.5218 13.2604 26.3985 13.3382 26.2949L16.4025 21.3438C16.4646 21.2276 16.5499 21.1254 16.653 21.0436C16.7562 20.9617 16.8751 20.9019 17.0024 20.8679H17.2196C17.3466 20.8889 17.4658 20.9432 17.565 21.0252L17.5874 21.0426C17.8762 21.294 17.8811 21.645 17.6048 22.0856L17.4704 22.2972C17.2215 22.7054 16.532 23.8156 14.5679 26.9819L14.5555 27.0044ZM18.5114 26.8027C18.4064 26.9087 18.2775 26.988 18.1354 27.034C17.9934 27.0799 17.8424 27.0911 17.6952 27.0666C17.549 27.0485 17.4092 26.9953 17.2879 26.9117C17.1666 26.8281 17.0672 26.7164 16.9982 26.5862C16.907 26.3768 16.8637 26.1497 16.8713 25.9215C16.8458 25.5865 16.9268 25.2519 17.1028 24.9657C17.1893 24.8645 17.299 24.7859 17.4225 24.7365C17.5461 24.687 17.6798 24.6683 17.8122 24.6819C18.0313 24.6755 18.2458 24.7458 18.4185 24.8808C18.5466 25.0137 18.645 25.1723 18.7069 25.3462C18.7689 25.5201 18.7932 25.7051 18.778 25.8891C18.8065 26.2162 18.7114 26.5422 18.5114 26.8027Z" />
                  </svg>
                </SvgIcon>

                <Typography className="card-head">
                  Security/ Collateral{" "}
                </Typography>
                <Typography className="card-subhead">
                  Choose from lowest interest rates available for your dream
                  home
                </Typography>
                <Typography className="card-btn">
                  {" "}
                  Know more <East sx={{ width: "12px" }} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card">
                <SvgIcon
                  sx={{ width: "30px !important", height: "30px !important" }}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path d="M7.83133 7.13451H8.26053C8.9128 7.13451 9.44154 6.60559 9.44154 5.9535V2.69443V1.47538C9.44154 0.823291 8.9128 0.294434 8.26053 0.294434H7.83133C7.17912 0.294434 6.65039 0.823291 6.65039 1.47538V2.69449V5.9535C6.65039 6.60559 7.17912 7.13451 7.83133 7.13451Z" />
                    <path d="M22.9799 7.10521H23.4091C24.0613 7.10521 24.59 6.57635 24.59 5.9242V2.38508V1.44602C24.59 0.793994 24.0613 0.265137 23.4091 0.265137H22.9799C22.3276 0.265137 21.7988 0.793994 21.7988 1.44602V2.38508V5.92414C21.799 6.57635 22.3277 7.10521 22.9799 7.10521Z" />
                    <path d="M28.5801 2.69434H25.5491V6.23339C25.5491 7.41397 24.5887 8.06513 23.4083 8.06513H22.9791C21.7985 8.06513 20.8381 7.10466 20.8381 5.92409V2.69434H10.4012V5.95335C10.4012 7.13392 9.44078 8.09439 8.26021 8.09439H7.83101C6.6505 8.09439 5.69009 7.13392 5.69009 5.95335V2.69434H2.41995C1.3613 2.69434 0.5 3.55564 0.5 4.61434V27.8144C0.5 28.8731 1.3613 29.7344 2.41995 29.7344H28.5801C29.6388 29.7344 30.5 28.8731 30.5 27.8144V4.61434C30.5001 3.5557 29.6388 2.69434 28.5801 2.69434ZM28.5801 27.8144H2.42001L2.41995 10.2943H28.5805L28.5815 27.8144C28.5814 27.8144 28.581 27.8144 28.5801 27.8144Z" />
                    <path d="M16.4916 16.171H19.939C20.0756 16.171 20.1864 16.0602 20.1864 15.9235V12.9384C20.1864 12.8017 20.0756 12.6909 19.939 12.6909H16.4916C16.3549 12.6909 16.2441 12.8017 16.2441 12.9384V15.9235C16.2441 16.0602 16.3549 16.171 16.4916 16.171Z" />
                    <path d="M22.1166 16.171H25.564C25.7006 16.171 25.8114 16.0602 25.8114 15.9235V12.9384C25.8114 12.8017 25.7006 12.6909 25.564 12.6909H22.1166C21.9799 12.6909 21.8691 12.8017 21.8691 12.9384V15.9235C21.8691 16.0602 21.9799 16.171 22.1166 16.171Z" />
                    <path d="M5.23964 21.0582H8.68695C8.82361 21.0582 8.9344 20.9474 8.9344 20.8108V17.8256C8.9344 17.6889 8.82361 17.5781 8.68695 17.5781H5.23964C5.10298 17.5781 4.99219 17.6889 4.99219 17.8256V20.8108C4.99219 20.9474 5.10298 21.0582 5.23964 21.0582Z" />
                    <path d="M10.8646 21.0582H14.312C14.4486 21.0582 14.5594 20.9474 14.5594 20.8108V17.8256C14.5594 17.6889 14.4486 17.5781 14.312 17.5781H10.8646C10.728 17.5781 10.6172 17.6889 10.6172 17.8256V20.8108C10.6172 20.9474 10.728 21.0582 10.8646 21.0582Z" />
                    <path d="M16.4916 21.0582H19.9389C20.0756 21.0582 20.1864 20.9474 20.1864 20.8108V17.8256C20.1864 17.6889 20.0756 17.5781 19.9389 17.5781H16.4916C16.3549 17.5781 16.2441 17.6889 16.2441 17.8256V20.8108C16.2441 20.9474 16.3549 21.0582 16.4916 21.0582Z" />
                    <path d="M22.1166 21.0582H25.564C25.7006 21.0582 25.8114 20.9474 25.8114 20.8108V17.8256C25.8114 17.6889 25.7006 17.5781 25.564 17.5781H22.1166C21.9799 17.5781 21.8691 17.6889 21.8691 17.8256V20.8108C21.8691 20.9474 21.9799 21.0582 22.1166 21.0582Z" />
                    <path d="M8.68689 22.4653H5.23964C5.10298 22.4653 4.99219 22.5761 4.99219 22.7128V25.698C4.99219 25.8346 5.10298 25.9454 5.23964 25.9454H8.68695C8.82361 25.9454 8.9344 25.8346 8.9344 25.698V22.7128C8.93434 22.5761 8.82354 22.4653 8.68689 22.4653Z" />
                    <path d="M14.312 22.4653H10.8646C10.728 22.4653 10.6172 22.5761 10.6172 22.7128V25.698C10.6172 25.8346 10.728 25.9454 10.8646 25.9454H14.312C14.4486 25.9454 14.5594 25.8346 14.5594 25.698V22.7128C14.5594 22.5761 14.4486 22.4653 14.312 22.4653Z" />
                    <path d="M19.939 22.4653H16.4916C16.3549 22.4653 16.2441 22.5761 16.2441 22.7128V25.698C16.2441 25.8346 16.3549 25.9454 16.4916 25.9454H19.939C20.0756 25.9454 20.1864 25.8346 20.1864 25.698V22.7128C20.1864 22.5761 20.0756 22.4653 19.939 22.4653Z" />
                    <path d="M25.564 22.4653H22.1166C21.9799 22.4653 21.8691 22.5761 21.8691 22.7128V25.698C21.8691 25.8346 21.9799 25.9454 22.1166 25.9454H25.564C25.7006 25.9454 25.8114 25.8346 25.8114 25.698V22.7128C25.8114 22.5761 25.7006 22.4653 25.564 22.4653Z" />

                    <defs>
                      <clipPath id="clip0_1253_982">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>

                <Typography className="card-head">
                  No. of years of business
                </Typography>
                <Typography className="card-subhead">
                  Choose from lowest interest rates available for your dream
                  home
                </Typography>
                <Typography className="card-btn">
                  {" "}
                  Know more <East sx={{ width: "12px" }} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={12}
          md={4}
          sx={{
            display: {
              xs: "none !important",
              sm: "none !important",
              md: "block !important",
            },
          }}
          className="flex justify-end items-center"
        >
          <img src="images/hero1.png" alt="banner" />
        </Grid>
      </Grid>

      {/* <Typography className="subLinks">
        <SvgIcon sx={{ width: "9px !important", height: "11px !important" }}>
          <svg
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82031 4.70508H7.16504V2.96484C7.20085 2.39909 7.1346 1.93717 6.96631 1.5791C6.79801 1.22103 6.62435 0.941731 6.44531 0.741211C6.23047 0.519206 5.97624 0.340169 5.68262 0.204102C5.389 0.0680342 5.07389 0 4.7373 0H3.46973C3.13314 0 2.81803 0.0680342 2.52441 0.204102C2.23079 0.340169 1.97656 0.519206 1.76172 0.741211H1.75098C1.57194 0.941731 1.40007 1.21924 1.23535 1.57373C1.07064 1.92822 1.0026 2.38477 1.03125 2.94336V4.70508H0.365234C0.264974 4.70508 0.179036 4.7391 0.107422 4.80713C0.0358073 4.87516 0 4.95931 0 5.05957V10.6348C0 10.735 0.0358073 10.821 0.107422 10.8926C0.179036 10.9642 0.261393 11 0.354492 11H7.82031C7.92057 11 8.00472 10.9642 8.07275 10.8926C8.14079 10.821 8.1748 10.735 8.1748 10.6348V5.05957C8.1748 4.95931 8.14079 4.87516 8.07275 4.80713C8.00472 4.7391 7.92057 4.70508 7.82031 4.70508ZM1.51465 2.93262C1.486 2.4528 1.53971 2.06429 1.67578 1.76709C1.81185 1.46989 1.95508 1.24251 2.10547 1.08496C2.27734 0.898763 2.47966 0.753743 2.7124 0.649902C2.94515 0.546062 3.19759 0.49056 3.46973 0.483398H4.7373C5.00228 0.49056 5.25114 0.546062 5.48389 0.649902C5.71663 0.753743 5.91895 0.895183 6.09082 1.07422V1.08496C6.24121 1.24251 6.38444 1.46989 6.52051 1.76709C6.65658 2.06429 6.71029 2.45638 6.68164 2.94336V4.70508H5.91895V3.20117C5.93327 2.82878 5.8903 2.528 5.79004 2.29883C5.68978 2.06966 5.58236 1.89779 5.46777 1.7832C5.34603 1.64714 5.19922 1.5415 5.02734 1.46631C4.85547 1.39111 4.67285 1.35352 4.47949 1.35352C4.47949 1.35352 4.47591 1.35352 4.46875 1.35352H3.72754C3.53418 1.35352 3.35156 1.39111 3.17969 1.46631C3.00781 1.5415 2.861 1.64714 2.73926 1.7832C2.62467 1.90495 2.51546 2.07861 2.41162 2.3042C2.30778 2.52979 2.2666 2.8252 2.28809 3.19043V4.70508H1.51465V2.93262ZM2.77148 4.70508V3.17969C2.76432 2.95052 2.78581 2.74642 2.83594 2.56738C2.88607 2.38835 2.96842 2.23438 3.08301 2.10547C3.16178 2.01953 3.25667 1.95329 3.36768 1.90674C3.47868 1.86019 3.59505 1.83691 3.7168 1.83691C3.7168 1.83691 3.71859 1.83691 3.72217 1.83691C3.72575 1.83691 3.72754 1.83691 3.72754 1.83691H4.46875C4.47591 1.83691 4.47949 1.83691 4.47949 1.83691C4.47949 1.83691 4.48307 1.83691 4.49023 1.83691C4.61198 1.83691 4.72835 1.86019 4.83936 1.90674C4.95036 1.95329 5.04525 2.01953 5.12402 2.10547C5.23861 2.22721 5.32275 2.37939 5.37646 2.56201C5.43018 2.74463 5.44987 2.95052 5.43555 3.17969V4.70508H2.77148ZM7.69141 10.5166H0.483398V5.18848H7.69141V10.5166ZM3.88867 8.55078V9.38867C3.88867 9.45312 3.91195 9.50863 3.9585 9.55518C4.00505 9.60173 4.06413 9.625 4.13574 9.625C4.2002 9.625 4.2557 9.60173 4.30225 9.55518C4.3488 9.50863 4.37207 9.45312 4.37207 9.38867V8.55078C4.64421 8.49349 4.86979 8.35742 5.04883 8.14258C5.22786 7.92773 5.31738 7.67708 5.31738 7.39062C5.31738 7.0612 5.2028 6.78011 4.97363 6.54736C4.74447 6.31462 4.46517 6.19824 4.13574 6.19824C3.80632 6.19824 3.52523 6.31462 3.29248 6.54736C3.05973 6.78011 2.94336 7.0612 2.94336 7.39062C2.94336 7.67708 3.03288 7.92773 3.21191 8.14258C3.39095 8.35742 3.61296 8.49349 3.87793 8.55078H3.88867ZM4.13574 6.69238C4.3291 6.69238 4.49381 6.76042 4.62988 6.89648C4.76595 7.03255 4.83398 7.19727 4.83398 7.39062C4.83398 7.58398 4.76595 7.7487 4.62988 7.88477C4.49381 8.02083 4.3291 8.08887 4.13574 8.08887C3.94954 8.08887 3.78662 8.02083 3.64697 7.88477C3.50732 7.7487 3.4375 7.58398 3.4375 7.39062C3.4375 7.19727 3.50553 7.03255 3.6416 6.89648C3.77767 6.76042 3.94238 6.69238 4.13574 6.69238Z"
              fill="#A3A3A3"
            />
          </svg>
        </SvgIcon>{" "}
        Privacy Secured | Advertising Disclosures
      </Typography> */}
    </StyledBox>
  );
};

export default Hero;
