import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import './base/_general.scss';
import AppHeader from './AppHeader/AppHeader';
import Promo from './Promo/Promo';
import TokenSale from './TokenSale/TokenSale';
import Footer from './Footer/Footer';

function App() {
    //style={{ backgroundImage: 'url(img/promo.jpg)' }}
  return (
    <div className="wrapper">
      <AppHeader />
      <main className="page">
        <Promo />
        <TokenSale />
      </main>
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
