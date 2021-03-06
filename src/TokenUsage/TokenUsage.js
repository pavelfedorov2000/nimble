import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenUsage.scss';

function TokenUsage(props) {
    const [usage, setusage] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setusage(result.usage);
                }
            );
    }, []);
    return (
        <section className="token-usage">
            <div className="container">
                <div className="token-usage__inner">
                    <div className="token-usage__content">
                        <h2 className="title token-usage__title title--orange">{props.title}</h2>
                        <ul className="token-usage__list">
                            {usage.map((item, index) => (
                                <li className="token-usage__list-item" key={`usage-${index}`}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <img src="img/n.svg" alt="decor" />
                </div>
            </div>
        </section>
    );
}

export default TokenUsage;