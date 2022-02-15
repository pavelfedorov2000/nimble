import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenFeatures.scss';

function TokenFeatures(props) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("nimble.json")
      .then(res => res.json())
      .then(
        (result) => {
          setFeatures(Object.entries(result.features));
        }
      );
  }, []);
  return (
    <section className="token-features">
      <div className="container">
        <h2 className="title token-features__title">{props.title}</h2>
        <dl className="token-features__list">
          {features.map(feature => (
            <div className="token-features__list-item">
              <dt>{feature[0]}:</dt>
              <dd>{feature[1]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default TokenFeatures;