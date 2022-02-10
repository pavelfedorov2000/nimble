import React, { Component } from "react";
import { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';

function TokenSaleList() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    fetch("nimble.json")
      .then(res => res.json())
      .then(
        (result) => {
          setTokens(result.tokenSale);
        }
      );
  }, []);

  //{ tokenSaleItems }
  return (
    <ol className="token-sale-list">
      {tokens.map((token, index) => (
        <li className="token-sale-list__item">
          <div className="token-sale-list__item-title">Раунд {index + 1}</div>
          <div className="token-sale-list__item-content">
            <div className="token-sale-list__item-price">{token}</div>
            <div className="token-sale-list__item-price">3 000 000</div>
          </div>
        </li>
      ))};
    </ol>
  );
}

export default TokenSaleList;