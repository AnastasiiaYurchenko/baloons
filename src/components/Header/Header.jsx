import React from 'react'
import { BurgerMenu, Head, WrapperMenu, MenuText } from './Header.styled';
import Menu from 'components/Menu/Menu';
import logo from '../../images/logo.png'


const Header = () => {
  return (
    <Head>
        <a href="/">
          <img src={logo} alt="Logo" width='104px' />
        </a>
      <WrapperMenu>
        <MenuText>menu</MenuText>
        <BurgerMenu/>  
      </WrapperMenu>
      <Menu/>
      
    </Head>
  )
}

export default Header