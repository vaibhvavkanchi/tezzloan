import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User";
import { AuthContext } from "../../context/Auth";
import LogoBox from "../../component/LogoBox";
import CommonDialog from "../../component/CommonDialog";

const useStyles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
    flexGrow: 1,
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  drawerContainer: {
    padding: "20px 0px 20px 20px",
    height: "100%",
    background: "#ffffff",
    color: "#262626",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "20px",
  },
  drawericon: {
    color: "#000",
    marginLeft: "0px !important",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
      width: "75px",
    },
  },
  paper1: {
    background: "black",
    color: "white",
  },
  search: {
    height: "40px",
    position: "relative",
    color: "#ABABAB",
    borderRadius: "100px",
    backgroundColor: "#DAF4FF",
    border: "1px solid #fff",
    marginLeft: 20,
    width: "100%",
  },
  searchIcon: {
    fontSize: "16px",
    padding: "0px 9px",
    color: "#000000",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontSize: "16px",
    width: "100%",
  },
  inputInput: {
    padding: "8px 6px 8px 0px",
    fontSize: "12px",
    marginTop: "-2px",
    width: "100%",
    color: "#000",
  },
  searcBox: {
    backgroundColor: "#DAF4FF",
    borderRadius: " 50px",
  },
  menuMobile1: {
    padding: "15px 0",
    "& h4": {
      fontSize: "14px !important",
      lineHeight: " 17px",
      margin: "0 8px",
      fontWeight: "400",
    },
    "& svg": {
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& figure": {
      margin: 0,
      width: 40,
      height: 40,
      borderRadius: "50px",
      overflow: "hidden",
      display: "flex",
      justifyContent: " center",
      alignItems: "center",
      "& img": {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
      },
    },
  },
  menuMobile2: {
    "& h4": {
      fontSize: "14px",
      lineHeight: " 17px",
      // color: theme.palette.background.dark,
      margin: "0 5px",
      whiteSpace: "pre",
      fontWeight: "300",
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "& svg": {
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff3965",
    },
  },
  menuMobiledrawer: {
    "& h4": {
      fontSize: "16px",
      lineHeight: " 17px",
      color: "#000",

      whiteSpace: "pre",
      fontWeight: "400",
    },
  },
  searchdiaogBox: {
    "& .MuiDialogContent-root": {
      minHeight: "calc(100vh - 100px)",
    },
    "& .MuiDialog-paperScrollPaper": {
      overflowY: "auto",
    },
  },
  afterLogin: {
    display: "flex",
    alignItems: "center",
    gap: "24px",

    "& h6": {
      "& span": {
        fontWeight: 600,
      },
    },

    "& .MuiIconButton-root": {
      padding: "0",
      // color: theme.palette.text.primary,
    },

    "& p": {
      cursor: "pointer",
    },
  },

  mobileview: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  searchContainer: {
    width: "100%",
    maxWidth: "400px",

    "& .searchTextfield": {
      width: "100%",

      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
      },
    },
  },
};

export default function Header() {
  const {
    toolbar,
    drawerContainer,
    drawericon,
    afterLogin,
    mobileview,
    searchContainer,
  } = useStyles;

  const Navigate = useNavigate();
  const user = useContext(UserContext);
  const auth = useContext(AuthContext);
  const userName = localStorage.getItem("username");
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const handleLogoutClose = () => {
    setIsLogoutOpen(!isLogoutOpen);
  };

  function TopbarContent(view) {
    return <></>;
  }

  function displayDesktop() {
    return <Toolbar className={toolbar}>{TopbarContent("desktop")}</Toolbar>;
  }

  //mobile end
  function displayMobile() {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={toolbar}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{TopbarContent("mobile")}</div>
        </Drawer>

        <Box
          className="flex items-center"
          style={{ position: "absolute", right: "0" }}
        >
          {/* <IconButton
            className={drawericon}
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon
              width="60px"
              height="60px"
              style={{ color: "#EC1F24", fontSize: "26px" }}
            />
          </IconButton> */}
        </Box>
      </Toolbar>
    );
  }

  const displayLogo = (
    <Box style={{ cursor: "pointer" }} onClick={() => Navigate("/")}>
      <LogoBox className="logoImg" />
    </Box>
  );

  return (
    <>
      <AppBar
        position={window.location.pathname !== "/" ? "relative" : "absolute"}
        elevation={0}
        style={{
          backgroundColor: "#010B24",
          // borderBottom: "3px solid #FF7F26",
          height: "64px",
        }}
      >
        <Container
          maxWidth="xl"
          className="flex justify-between"
          style={{ height: "100%" }}
        >
          <div className="flex items-center">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              {displayLogo}
            </Box>
          </div>
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>

      <CommonDialog
        open={isLogoutOpen}
        onClose={handleLogoutClose}
        type="logout"
      />
    </>
  );
}
