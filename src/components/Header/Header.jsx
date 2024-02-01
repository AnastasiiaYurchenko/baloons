import React from 'react'
import { BurgerMenu, Head, WrapperMenu, Menu } from './Header.styled';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <Head>
        <a href="/">
            <img src={logo} alt="Logo" width='104px' />
          </a>
          <WrapperMenu>
            <Menu>menu</Menu>
            <BurgerMenu/>  
          </WrapperMenu>
    </Head>
  )
}

export default Header