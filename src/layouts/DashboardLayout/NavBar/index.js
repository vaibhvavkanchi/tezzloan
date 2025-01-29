import React, { useEffect, useState, useContext } from "react";
import { useLocation, matchPath, useNavigate, Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import PropTypes from "prop-types";
import { Box, Drawer, Hidden, List, Typography, styled } from "@mui/material";
import NavItem from "./NavItem";
import { AuthContext } from "src/context/Auth";
import { sections } from "./SidebarTabs";
import { UserContext } from "../../../context/User";

const StyledComponent = styled("div")(({ theme }) => ({
  "& .sectionsHeading": {
    padding: "2px 0px 0px 22px",
    lineHeight: "normal",
    color: "#7C7C7C",
    fontSize: "12px",
  },
  "& .desktopDrawer": {
    top: "70px",
    width: "260px",
    height: "calc(100% - 70px)",
    background: "#fff",
    borderRight: "1.17px solid #E8E8E8",
  },

  "& .socialIcon": {
    cursor: "pointer",
    marginRight: 5,
  },
  "& .button": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "45px",
    paddingLeft: "17px",
    borderRadius: "12px",
    marginTop: "-30px",
    "& .MuiCollapse-root .MuiList-root a": {
      color: "blue",
    },
    "&:hover": {
      color: "#F5C843",
    },
    "& svg": {
      color: "#F5C843",
      fontSize: "20px",
    },
  },
  "& .btnBox": {
    position: "relative",
    left: "30%",
    bottom: "-250px",
  },
  "& .logoutButton": {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    position: "absolute",
    bottom: "19px",
    left: "17px",
    background: "transparent",
    fontWeight: 400,
    fontSize: "13px",
    color: "#EC1F24",
  },
  "& .sideMenuBox": {
    "& .MuiCollapse-wrapperInner": {
      marginLeft: "45px",
    },
  },
  "& .DialogMan": {
    "& .MuiDialog-paperWidthXs": {
      maxWidth: "560px !important",
    },
    "& .MuiDialogContent-root": {
      padding: "8px 39px",
    },
    "& .icon": {
      color: "#fff",
      alignItems: "end",
      paddingRight: "25px",
      position: "absolute",
      top: "0px",
      right: "-10px",
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
      fontFamily: "Open Sans",
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
      [theme.breakpoints.down("xs")]: {
        "& .displayCenter": {
          flexDirection: "column",
        },
      },
      [theme.breakpoints.up("xs")]: {
        "& .btn": {
          padding: "8px 21px",
          width: "186px",
          height: "44px",
        },
      },
    },
  },
  "& .logoutBtnList": {
    cursor: "pointer",
    "& .logoutBtn": { marginLeft: "30px" },
    "& .logOutIcon": { marginRight: "8px", fontSize: "20px" },
    "&:hover": {
      backgroundColor: "#F8F8F8",
      "& .logoutBtn": {
        color: "#e35f24",
      },
    },
  },
}));

export default function NavBar({ onMobileClose, openMobile }) {
  const auth = useContext(AuthContext);
  let userType = auth.userData?.userType;
  const history = useNavigate();
  const [isLogout, setIsLogout] = useState(false);
  const [type, setType] = useState("yes");
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [lastActiveTab, setLastActiveTab] = useState("");
  const Appsetting = useContext(UserContext);

  const status = Appsetting?.appSetting[0]?.showReferralProgram;

  const filteredSections = sections[0]?.items.filter((section) => {
    return section.modules !== "Referral";
  });

  function renderContent() {
    return (
      <Box height="100%" display="flex" flexDirection="column">
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <Box pb={2}>
            <Box
              className="sideMenuBox"
              style={{
                paddingTop: "16px",
              }}
            >
              {[
                {
                  sections: sections,
                  heading: null,
                },
              ].map((category, categoryIndex) => (
                <React.Fragment key={`category${categoryIndex}`}>
                  <Typography className="sectionsHeading">
                    {category.heading}
                  </Typography>
                  {renderNavItems(
                    status === true
                      ? category.sections[0]?.items
                      : filteredSections || []
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>

          {/* {isLogout && renderLogoutDialog()} */}
        </PerfectScrollbar>
      </Box>
    );
  }

  //function to render navbar items
  function renderNavItems(items) {
    return (
      <List disablePadding>
        {items.map((item, index) => (
          <NavItem
            key={index}
            depth={0}
            href={item.href}
            icon={item.icon}
            info={item.info}
            title={item.title}
            pathname={location.pathname}
            isActive={isActiveTab(item)}
            subRoutes={item.subRoutes || []}
            setLastActiveTab={setLastActiveTab}
            onMobileClose={onMobileClose}
          />
        ))}
      </List>
    );
  }

  function isActiveTab(item) {
    const isActive =
      currentRoute === item.href ||
      item.subRoutes?.some((subRoute) => currentRoute === subRoute.href);

    if (!isActive && item.subRoutes) {
      const isSubrouteActive = item.subRoutes.some(
        (subRoute) => currentRoute === subRoute.href
      );
      return isSubrouteActive && lastActiveTab === item.href;
    }
    return isActive;
  }

  return (
    <StyledComponent>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          // classes={{ paper: "mobileDrawer" }}
          sx={{
            "& .MuiDrawer-paper ": {
              width: "280px",
              background: "#fff",
            },
          }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Box mt={2} ml={2}>
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
              <img
                src="/images/logo.png"
                style={{ width: "32px" }}
                alt="logo"
              />
              <Typography variant="h6" fontWeight={700}>
                Codestrup Infotech
              </Typography>
            </Link>
          </Box>
          <Box>{renderContent()}</Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: "desktopDrawer" }}
          open
          variant="persistent"
        >
          {renderContent()}
        </Drawer>
      </Hidden>
    </StyledComponent>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};
