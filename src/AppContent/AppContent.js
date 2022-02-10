import React, { Component } from "react";
import AppMain from '../AppMain/AppMain';
import AppAside from '../AppAside/AppAside';
import './AppContent.scss';

class AppContent extends React.Component {
    render() { 
        return (
            <main className="app-content">
                <div className="app-content__grid">
                    <AppMain />
                    <AppAside />
                </div>
            </main>
        );
    }
}
 
export default AppContent;