import React from 'react';
import './Promo.scss';

function Promo() {
  return (
    <section className='promo'>
      <div className="container">
        <div className="promo__content">
          <h1 className="promo__title">
            Присоединяйся к революции в мире гемблинга
          </h1>
          <div className="promo__text">100% честность игры и распределения средств</div>
          <button className="btn promo__btn" type="button">Открыть аккаунт</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;