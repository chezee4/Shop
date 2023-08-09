import React from "react";
import { Link } from "react-router-dom";

import { СontainerLodo, LogoCO } from "./styles";

import logo from "../../assets/img/Logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <СontainerLodo>
        <LogoCO src={logo} alt="Logo Company" />
      </СontainerLodo>
    </Link>
  );
};

export default Logo;
