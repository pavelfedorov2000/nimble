import React from 'react';
import './Promo.scss';

function Promo(props) {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo__content">
                    <h1 className="promo__title">{props.title}</h1>
                    <div className="promo__text">{props.text}</div>
                    <button className="btn promo__btn" type="button">{props.btn}</button>
                </div>
            </div>
        </section>
    );
}

export default Promo;