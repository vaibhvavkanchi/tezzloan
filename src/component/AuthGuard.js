import React, { useContext, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import PageLoading from "./PageLoading";

export default function AuthGuard(props) {
  const { children } = props;
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  useEffect(() => {
    if (!auth.userLoggedIn) {
      navigate("/auth/login");
    }
  }, [window.location]);

  return auth.userLoggedIn ? <>{children}</> : <PageLoading />;
}
