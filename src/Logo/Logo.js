import React, { Component } from "react";
import './Logo.scss';

function Logo() {
    return (
        <a href="#" className="logo">
            <img src="img/logo.svg" alt="logo" className="logo__img" />
        </a>
    );
}

export default Logo;