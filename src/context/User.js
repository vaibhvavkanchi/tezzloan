import ApiConfig from "../config/APICongig";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";

export const UserContext = createContext();

export default function AuthProvider(props) {
  let data = {};

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
