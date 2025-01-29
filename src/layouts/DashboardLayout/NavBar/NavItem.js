import React, { useEffect, useState } from "react";
import { NavLink as RouterLink, matchPath, useHistory } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, Collapse, List, ListItem, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useRouteMatch } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const StyledComponent = styled(ListItem)(({ theme }) => ({
  "& .item": {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .itemLeaf": {
    display: "flex",
    paddingTop: 0,
    textTransform: "uppercase",
    paddingBottom: 0,
  },
  "& .button": {
    color: theme.palette.text.primary,
    fontSize: "16px",
    textTransform: "uppercase",
    padding: "13px 10px 5px 38px",
    justifyContent: "flex-start",
    marginBottom: "8px",
    letterSpacing: 0,
    width: "100%",
    fontWeight: "400",
    "&:hover": {
      color: theme.palette.text.secondary,
      background: "#F8F8F8",
      borderRadius: "0px",
      "& .icon": {
        color: "#262626",
      },
    },
  },
  "& .buttonLeaf": {
    color: "#262626",
    fontWeight: 400,
    padding: "13px 5px 5px 38px",
    height: "50px",
    justifyContent: "flex-start",
    fontFamily: "Jost",
    textTransform: "capitalize",
    letterSpacing: 0,
    width: "100%",
    opacity: 1,
    fontSize: "16px",
    "& li": {
      "& .title": {
        marginLeft: "30px",
      },
    },
    "& .icon": {
      color: "#262626",
    },
    "&:hover": {
      color: theme.palette.text.secondary,
      background: "#F8F8F8",
      borderRadius: "0px",
      "& .icon": {
        color: theme.palette.text.secondary,
      },
    },
    "&.depth-0": {
      "& .title": {
        fontWeight: 400,
        fontSize: "16px",
        whiteSpace: "pre",
      },
    },
  },
  "& .icon": {
    display: "flex",
    alignItems: "center",
    marginRight: "19px",
    color: "#262626",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  "& .title": {
    marginRight: "auto",
  },
  "& .active": {
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
    fontWeight: 700,
    background: "#F8F8F8",
    padding: "13px 5px 5px 32px",
    borderRadius: "0px",
    "& .title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "6px",
      borderRadius: "0px 9.322px 9.322px 0px",
      backgroundColor: theme.palette.secondary.main,
    },
    "& .icon": {
      color: theme.palette.secondary.main,
      "&:hover": {
        color: "#000",
      },
    },
  },
}));

export default function NavItem({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  handleLogoutClick,
  pathname,
  isActive,
  subRoutes,
  setLastActiveTab,
  onMobileClose,
  ...rest
}) {
  console.log("isActive", isActive);
  const [open, setOpen] = useState(
    pathname === subRoutes?.find((item) => item)?.href ||
      pathname === "/course" ||
      false
  );

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    // onMobileClose();
  };
  return (
    <>
      <StyledComponent
        className={clsx("itemLeaf", className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          activeClassName={isActive ? "active" : ""}
          className={clsx("buttonLeaf", `depth-${depth}`)}
          component={subRoutes && subRoutes.length > 0 ? "div" : RouterLink}
          exact={!subRoutes || subRoutes.length === 0}
          to={subRoutes && subRoutes.length > 0 ? null : href}
          onClick={() => {
            if (subRoutes && subRoutes.length > 0) {
              handleClick();

              setLastActiveTab(href);
            } else if (title !== "LOGOUT") {
              setLastActiveTab(href);
              onMobileClose();
            }
          }}
        >
          {Icon && <Icon className="icon" size="20" />}
          <span className="title">{title}</span>
          {Info && <Info />}
          {subRoutes &&
            subRoutes.length > 0 &&
            (open ? <ExpandLess /> : <ExpandMore />)}
        </Button>
      </StyledComponent>

      {subRoutes && (
        <Collapse in={open}>
          <List component="div" disablePadding>
            {subRoutes.map((subRoute, index) => (
              <NavItem
                key={index}
                depth={depth + 1}
                href={subRoute.href}
                icon={subRoute.icon}
                info={subRoute.info}
                title={subRoute.title}
                isActive={isActive}
                setLastActiveTab={setLastActiveTab}
                pathname={pathname}
                onMobileClose={onMobileClose}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};
