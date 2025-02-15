import React, { lazy } from "react";
import HomeLayout from "../src/layouts/HomeLayout";
import LoginLayout from "../src/layouts/LoginLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import FormLayout from "./layouts/FormLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("../src/views/pages/Home/Home")),
  },
  {
    exact: true,
    path: "/home-loan",
    layout: FormLayout,
    component: lazy(() => import("../src/views/pages/Loan/index")),
  },
  {
    exact: true,
    path: "/thank-you",
    component: lazy(() => import("../src/views/pages/Loan/ThankYou")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("../src/views/errors/NotFound")),
  },
];
