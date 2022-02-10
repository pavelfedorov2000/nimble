import React, { Component } from "react";
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import './AppHeader.scss';

class AppHeader extends React.Component {
    render() { 
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Logo />
                        <NavMenu />
                        <button className="btn header__btn" type="button">Регистрация</button>
                        <button className="btn header__btn btn--border" type="button">Войти</button>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default AppHeader;