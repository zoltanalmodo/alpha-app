import React from 'react';
import './Header.css';
import logo from '../images/logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <div className="container-01">
                <header className="header-content">
                    <img src={logo} className="logo" alt="" />
                    <h1>MANY HANDS BERMONDSEY</h1>
                    <h2>OPEN STUDIOS</h2>
                </header>
            </div>
        );
    }
}