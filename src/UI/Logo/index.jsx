import React from 'react';

import {СontainerLodo, LogoCO} from "./styles";

import logo from "../../assets/img/Logo.svg" 
const Logo = () => {
    return (
        <СontainerLodo>
            <LogoCO src={logo} alt='Logo Company'/>
        </СontainerLodo>
    );
};

export default Logo;