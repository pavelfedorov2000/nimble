import React from "react";
import './LogoutBtn.scss';

function LogoutBtn() {
    return (
        <button className="logout-btn nav-btn" type="button">
            <img src="img/icons/logout.svg" alt="иконка выхода" />
        </button>
    );
}

export default LogoutBtn;