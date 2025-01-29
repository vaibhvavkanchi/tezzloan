import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("createurAccessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("createurAccessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin(token) {
  const accessToken = window.localStorage.getItem("token") ?? token;
  return accessToken ? true : false;
}

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [timerActive, setTimerActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [expiredOTP, setExpiredOTP] = useState(false);

  //effect to calculate the remaining time of otp
  useEffect(() => {
    const storedRemainingTime = localStorage.getItem("remainingTime");

    if (storedRemainingTime !== null) {
      setRemainingTime(parseInt(storedRemainingTime, 10));
    }

    if (storedRemainingTime > 0) {
      setTimerActive(true);
    }

    if (timerActive && remainingTime > 0) {
      const timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          const newTime = prevTime - 1;

          localStorage.setItem("remainingTime", newTime.toString());

          return newTime;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    } else if (remainingTime == 0) {
      setTimerActive(false);
      setExpiredOTP(true);
      localStorage.removeItem("remainingTime");
    }
  }, [remainingTime, timerActive]);

  let data = {
    userLoggedIn: isLogin,
    userLogin: (type, token) => {
      setIsLogin(type);
      setSession(token);
    },
    expiredOTP,
    timerActive,
    setTimerActive,
    setRemainingTime,
    remainingTime,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
