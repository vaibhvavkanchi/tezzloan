import React from "react";
import { styled, Backdrop } from "@mui/material";
import Loader from "react-js-loader";
import Logo from "./Logo";
const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const FullScreenLoading = ({ open }) => {
  return (
    <StyledBackdrop open={open}>
      <img
        src="/images/logo.png"
        alt="logo"
        style={{ width: "60px", position: "absolute" }}
      />
      <Loader
        size={100}
        type="spinner-default"
        bgColor={"rgb(45,74,164)"}
        color="rgb(45,74,164)"
        // title={"Loading..."}
      />
    </StyledBackdrop>
  );
};

export default FullScreenLoading;
