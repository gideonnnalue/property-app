import React from 'react';
// import logo from '/logo.png';

import AccountsUIWrapper from './AccountsUIWrapper';


const Header = () => {
    return (
        <div className="container main-nav">
            <img src='img/logo.png' className="main-nav__logo"/>
            <div className="main-nav__account">
                <AccountsUIWrapper />
            </div>
            
        </div>
    );
};

export default Header;