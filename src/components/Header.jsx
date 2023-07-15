import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/components/Header.styl';
import AppContext from '@context/AppContext';
import logo from '@assets/logo.png';
import Title from '@components/Title';

const Header = () => {

  const context = React.useContext(AppContext);
  const { cart } = context

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/" style={{display: "flex"}}> 
          <img src={logo} alt="Logo"  width="32" /> &nbsp;
          <Title title="Platzi Store" />
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 &&
          <div className="Header-alert">{cart.length}</div>
        }
      </div>
    </div>
  ) 
};

export default Header;
