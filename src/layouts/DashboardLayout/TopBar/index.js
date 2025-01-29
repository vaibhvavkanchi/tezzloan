import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Box,
  Dialog,
  Avatar,
  Typography,
  SvgIcon,
  Popover,
  Hidden,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItemButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "src/context/User";
import { AuthContext } from "src/context/Auth";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import styled from "@emotion/styled";
import { IoIosArrowDown } from "react-icons/io";

import { MdLogout } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import { MarkChatRead, Notifications } from "@mui/icons-material";
import ApiConfig from "../../../config/APICongig";
import axios from "axios";
import toast from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";

const headersData = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Media Center",
    href: "/media-center",
  },
  {
    label: "Services",
    href: "/services",
  },

  {
    label: "Creators",
    href: "/creators",
  },

  {
    label: "Charges",
    href: "/charges",
  },

  {
    label: "Subscribe",
    href: "/subscription-plans",
  },

  {
    label: "Demo",
    href: "/demo",
  },

  {
    label: "Team",
    href: "/team",
  },

  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paperWidthXs": {
    maxWidth: "560px !important",
  },
  "& .MuiDialogContent-root": {
    padding: "8px 39px",
  },
  "& .icon": {
    color: "#fff",
    alignItems: "end",
    // paddingRight: "25px",
    position: "absolute",
    top: "0px",
    right: "0px",
  },
  "& .titleBox": {
    flex: 1,
    textAlign: "center",
    padding: "18px 0px",
  },
  "& .MuiDialogTitle-root": {
    background: "#767676 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    "& .MuiTypography-h6": {
      width: "100%",
    },
  },
  "& .MuiTypography-h5": {
    color: "#fff",
  },
  "& .MuiTypography-body2": {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Jost",
  },
  "& .MuiDialogActions-root": {
    justifyContent: "center",
    padding: "8px 39px",
  },
  "& .imgBox": {
    paddingTop: "32px",
  },
  "& .img": {
    paddingBottom: "27px",
  },
  "& .actionBtn": {
    padding: "32px 0px",
    [theme.breakpoints.up("xs")]: {
      "& .MuiButton-contained": {
        fontSize: "18px",
      },
    },
    [theme.breakpoints.up("xs")]: {
      "& .btn": {
        padding: "8px 21px",
        maxWidth: "186px",
        width: "100%",
        height: "44px",
      },
    },
  },
}));
const StyledComponent = styled("div")(({ theme }) => ({
  "& .menuButton": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily: "Jost ",
    borderRadius: 0,
    minWidth: "auto",
    color: "#262626",
    textDecoration: "none",
    "@media (max-width: 900px)": {
      fontStyle: "normal",
      letterSpacing: "-0.6px",
      lineHeight: "24px",
      padding: "15px !important",
      height: "51px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "&.active": {
      color: "#EC1F24",
    },
    "&:hover": {
      color: "#EC1F24",
    },
  },

  "& .toolbar": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    color: "#262626",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },

  ".maindrawer": {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },

  "& .logoDrawer": {
    width: "140px",
  },

  "& .drawerContainer": {
    padding: "20px 0px 20px 20px",
    height: "100%",
    background: "#ffffff",
    color: "#262626",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  "& .drawericon": {
    color: "#000",
    marginLeft: "0px !important",
    fontSize: "25px",
  },

  ".logoImg": {
    width: "75px",
    margin: "14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: "11px 1px 3px 0px",
      width: "52px",
    },
  },

  "& .menuMobile": {
    fontSize: "14px",
    fontWeight: 500,
    paddingLeft: "10px",
    "@media (max-width: 500px)": {
      padding: "7px 0",
      width: "100%",
    },
  },

  ".paper1": {
    background: "black",
    color: "white",
  },

  "& .mainHeader": {
    justifyContent: "space-between",
    padding: "0px",
  },

  "& .search": {
    height: "40px",
    position: "relative",
    color: "#ABABAB",
    borderRadius: "100px",
    backgroundColor: "#DAF4FF",
    border: "1px solid #fff",
    marginLeft: 20,
    width: "100%",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
    },
  },

  "& .searchIcon": {
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

  "& .inputRoot": {
    color: "inherit",
    fontSize: "16px",
    width: "100%",
  },

  "& .inputInput": {
    padding: "8px 6px 8px 0px",
    fontSize: "12px",
    marginTop: "-2px",
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "#000",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "& :focus": {
        width: "100%",
      },
    },
  },

  "& .menuButton1": {
    paddingLeft: "0",
  },

  "& .searcBox": {
    backgroundColor: "#DAF4FF",
    borderRadius: "50px",
  },

  "& .menuMobile1": {
    padding: "15px 0",
    "& h4": {
      fontSize: "14px !important",
      lineHeight: "17px",
      color: theme.palette.text.main,
      margin: "0 8px",
      fontWeight: 400,
      [theme.breakpoints.only("xs")]: {
        fontSize: "12px !important",
      },
    },
    "& svg": {
      color: theme.palette.text.main,
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "& :hover": {
      backgroundColor: "transparent",
    },
    "& figure": {
      margin: 0,
      width: 40,
      height: 40,
      borderRadius: "50px",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& img": {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
      },
    },
  },

  ".menuMobile2": {
    "& h4": {
      fontSize: "14px",
      lineHeight: "17px",
      color: theme.palette.background.dark,
      margin: "0 5px",
      whiteSpace: "pre",
      fontWeight: 300,
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

  ".menuMobiledrawer": {
    "& h4": {
      fontSize: "16px",
      lineHeight: "17px",
      color: "#000",
      whiteSpace: "pre",
      fontWeight: 400,
    },
  },

  ".searchdiaogBox": {
    "& .MuiDialogContent-root": {
      minHeight: "calc(100vh - 100px)",
      [theme.breakpoints.only("xs")]: {
        padding: "20px 0 !important",
      },
    },
    "& .MuiDialog-paperScrollPaper": {
      overflowY: "auto",
    },
  },

  "& .afterLogin": {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    "& .MuiIconButton-root": {
      padding: "0",
      color: theme.palette.text.primary,
    },
    "& p": {
      cursor: "pointer",
    },
  },

  "& .popoverContent": {},
  "& .icon-and-name": {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& p": {
      lineHeight: "35px",
      whiteSpace: "nowrap",
    },
  },
}));

export default function TopBar({ className, onMobileNavOpen, ...rest }) {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const user = useContext(UserContext);
  const auth = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [notification, setNotifications] = useState(user?.Notifications || []);
  const [type, setType] = useState("yes");
  const handleClose4 = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsLogout(false);
  };

  const handleLogoutClick = () => {
    setIsLogout(true);
  };

  const history = useNavigate();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const readNotification = async (data) => {
    try {
      const res = await axios({
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        url: ApiConfig.readNotification,
        data: {
          ids: data,
        },
      });
      if (res.status === 200) {
        user.getAllNotifications();
        handleClose4();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1280
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    // user.getAllNotifications();
    setNotifications(user?.Notifications || []);
    window.addEventListener("resize", () => setResponsiveness());
  }, [user?.Notifications]);

  //function to render the logout dialog
  function renderLogoutDialog() {
    return (
      <StyledDialog
        maxWidth="xs"
        fullWidth
        className="DialogMan"
        open={isLogout}
        onClose={() => setIsLogout(false)}
      >
        <DialogTitle id="form-dialog-title">
          <Box className="displaySpacebetween">
            <Box className="titleBox">
              <Typography variant="h5">Logout</Typography>
            </Box>
          </Box>
          <IconButton className="icon" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box align="center" className="imgBox">
            {/* <img src="images/Logout.svg" className="img" /> */}
            <Typography variant="body2">
              Are you sure, you want to logout?
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions className="actionBtn">
          {/* <Box mt={2} mb={2} className="displayCenter"> */}
          <Button
            color={type === "no" ? "primary" : "secondary"}
            variant="contained"
            className="btn"
            onClick={() => {
              setType("no");
              setIsLogout(false);
            }}
          >
            No
          </Button>
          &nbsp; &nbsp;
          <Button
            color={type === "yes" ? "primary" : "secondary"}
            variant="contained"
            className="btn"
            onClick={() => {
              setType("yes");
              window.localStorage.removeItem("userToken");
              window.localStorage.removeItem("userId");
              window.localStorage.removeItem("activeStep");
              auth?.userLogin(false, null);
              history("/");
              window.location.reload();
            }}
          >
            Yes
          </Button>
          {/* </Box> */}
        </DialogActions>
      </StyledDialog>
    );
  }
  const [open1, setOpen1] = useState({ community: false, user: false });
  const anchorRef = { community: useRef(null), user: useRef(null) };

  const displayDesktop = () => {
    return (
      <Toolbar className="toolbar">
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Hidden mdUp>
            <IconButton
              color="#00e0b0"
              onClick={onMobileNavOpen}
              // style={{ padding: "0px" }}
            >
              <SvgIcon>
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </Hidden>
          {femmecubatorLogo}
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            style={{ gap: "24px" }}
          >
            <IconButton
              onClick={(e) => {
                if (notification.length !== 0) {
                  handleClick(e);
                } else {
                  toast.success("No unread Notifications!");
                }
              }}
            >
              <Badge badgeContent={notification.length} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>

            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose4}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ marginTop: "15px" }}
            >
              {" "}
              <div>
                <div
                  className="flex justify-end"
                  style={{
                    maxWidth: "330px",
                    minWidth: "250px",
                    width: "100%",
                  }}
                >
                  <Button
                    sx={{ color: "red", textTransform: "capitalize" }}
                    onClick={() => {
                      readNotification(notification?.map((item) => item._id));
                    }}
                  >
                    Read All
                  </Button>
                </div>
                {notification?.map((item, index) => (
                  <ListItemButton
                    sx={{
                      maxWidth: "330px",
                      minWidth: "250px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          gap: "10px",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Avatar>
                          <img src="/images/logo.png" alt="logo" />
                        </Avatar>
                        <div>
                          <Typography fontWeight={700}>
                            {item?.title}
                          </Typography>
                          <Box
                            dangerouslySetInnerHTML={{ __html: item?.message }}
                            sx={{
                              color: "gray",
                              fontSize: "14px",
                              "& strong": {
                                fontSize: "12px",
                                fontWeight: "500",
                              },
                            }}
                          ></Box>
                        </div>
                      </div>
                      <IconButton
                        onClick={() => {
                          readNotification([item._id]);
                        }}
                      >
                        <MarkChatRead color="secondary" />
                      </IconButton>
                    </div>
                  </ListItemButton>
                ))}
              </div>
            </Popover>
            <PopupState
              variant="popover"
              popupId="popup-popover0"
              className="popover"
            >
              {(popupState) => (
                <div style={{ cursor: "pointer" }}>
                  <div {...bindTrigger(popupState)}>
                    {user?.profile?.avatarUrl ? (
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Avatar src={user?.profile?.avatarUrl} />
                        <Hidden mdDown>
                          <Box>
                            <Typography
                              variant="body2"
                              style={{
                                color: "#262626",
                                fontFamily: "Jost",
                                fontWeight: "500",
                                lineHeight: "24px",
                              }}
                            >
                              {user?.applicationData?.data?.firstName &&
                              user?.applicationData?.data?.firstName.length > 10
                                ? user?.applicationData?.data?.firstName.slice(
                                    0,
                                    10
                                  )
                                : user?.applicationData?.data?.firstName}
                            </Typography>
                          </Box>
                        </Hidden>
                        <IoIosArrowDown />
                      </Box>
                    ) : (
                      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Avatar />
                        <Hidden mdDown>
                          <Box>
                            <Typography
                              variant="body2"
                              style={{
                                color: "#262626",
                                fontFamily: "Jost",
                                fontWeight: "500",
                                lineHeight: "24px",
                              }}
                            >
                              {user?.applicationData?.data?.firstName &&
                              user?.applicationData?.data?.firstName.length > 10
                                ? user?.applicationData?.data?.firstName.slice(
                                    0,
                                    10
                                  )
                                : user?.applicationData?.data?.firstName}
                            </Typography>
                          </Box>
                        </Hidden>
                        <IoIosArrowDown />
                      </Box>
                    )}
                  </div>

                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{ marginTop: "10px" }}
                  >
                    <div
                      style={{
                        width: "230px !important",
                        height: "auto",
                        boxSizing: "border-box",
                        padding: "10px 10px 10px 16px",
                      }}
                    >
                      <Button
                        className="icon-and-name"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          "& p": {
                            lineHeight: "35px",
                            whiteSpace: "nowrap",
                          },
                        }}
                        onClick={() => {
                          navigate("/my-profile");
                          popupState.close();
                        }}
                      >
                        <BiUserCircle />
                        <Typography variant="body2">My Profile</Typography>
                      </Button>
                      <Button
                        className="icon-and-name"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          "& p": {
                            lineHeight: "35px",
                            whiteSpace: "nowrap",
                          },
                        }}
                        onClick={() => handleLogoutClick()}
                      >
                        <MdLogout />
                        <Typography variant="body2">Logout</Typography>
                      </Button>
                    </div>
                  </Popover>
                  {isLogout && renderLogoutDialog()}
                </div>
              )}
            </PopupState>
          </Box>
        </Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    //mobile
    return (
      <Toolbar className="mainHeader">
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="drawerContainer">
            <Box mb={1}>
              <img
                className="logoDrawer"
                src="images/fulilizo_logo_image.svg"
                alt="logo"
              />
            </Box>

            {getDrawerChoices()}
          </div>
        </Drawer>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Hidden lgUp>
            <IconButton
              color="#00e0b0"
              onClick={onMobileNavOpen}
              // style={{ padding: "0px" }}
            >
              <SvgIcon>
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </Hidden>

          <Box display="flex" justifyContent="space-between">
            {femmecubatorLogo}
          </Box>
        </div>
      </Toolbar>
    );
  };

  //mobile end
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: Link,
              className: "menuButton1",
            }}
          >
            <MenuItem className="menuMobile">{label}</MenuItem>
          </Button>
        </>
      );
    });
  };

  const femmecubatorLogo = (
    <Box>
      <Link
        to="/home"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: "5px",
        }}
      >
        {/* <Logo className="logoImg" /> */}
        <img src="/images/logo.png" style={{ width: "32px" }} alt="logo" />
        <Hidden smDown>
          <Typography variant="h6" fontWeight={700}>
            Codestrup Infotech
          </Typography>
        </Hidden>
      </Link>
    </Box>
  );

  return (
    <StyledComponent>
      <AppBar
        elevation={0}
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "3px solid #8231d3",
          position: "fixed",
        }}
      >
        {/* <Container maxWidth="xl" style={{ padding: "15px 24px" }}> */}
        {displayDesktop()}
        {/* </Container> */}
      </AppBar>
    </StyledComponent>
  );
}
