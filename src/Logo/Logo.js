import React, { Component } from "react";
import './Logo.scss';

function Logo() {
  return (
    <a href="#" className="logo">
      <img className="logo__img" src="img/logo.svg" alt="logo" />
      <span className="logo__descr">
        nimble<br />
        token
      </span>
    </a>
  );
}

export default Logo;