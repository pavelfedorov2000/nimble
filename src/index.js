import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import './base/_general.scss';
import AppHeader from './AppHeader/AppHeader';
import Promo from './Promo/Promo';
import Footer from './Footer/Footer';

function App() {
    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                }
            );
    });

    return (
        <div className="wrapper" style={{backgroundImage: 'url(img/promo.jpg)'}}>
            <AppHeader/>
            <main className="page">
                <Promo/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
