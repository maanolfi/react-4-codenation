import React from 'react';
import styles from 'styled-components';
import Logo from '../../img/images';

const Nav = () => (
  <NavContainer data-testid="nav-container">
    <img src={Logo.MarvelLogo} height="100%" alt="logo" />
  </NavContainer>
);

const NavContainer = styles.div`
    height: 80px;
    background-color: black;
    width: 100%
`;

export default Nav;
