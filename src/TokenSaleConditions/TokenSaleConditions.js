import React, { Component } from "react";
import { useState, useEffect } from 'react';

function TokenSaleConditions(title) {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetch("nimble.json")
      .then(res => res.json())
      .then(
        (result) => {
          setConditions(result.tokenConditions);
        }
      );
  }, []);
  return (
    <div className="token-sale-conditions">
      <div className="token-sale-condition__top">
        <h3 className="token-sale-condition__title">{props.title}</h3>
        <img className="token-sale-condition__logo" src="img/logo.svg" alt="nimble logo" />
      </div>
      <dl className="token-sale-conditions__list">
        <div className="token-sale-conditions__list-item"></div>
      </dl>
    </div>
  );
}

export default TokenSaleConditions;