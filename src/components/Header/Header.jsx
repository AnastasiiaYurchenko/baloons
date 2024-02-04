import React, { useState } from 'react'
import { BurgerMenu, Head, WrapperMenu, MenuText } from './Header.styled';
import Menu from 'components/Menu/Menu';
import logo from '../../images/logo.png';


const Header = () => {
const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <Head>
        <a href="/">
          <img src={logo} alt="Logo" width='104px' />
        </a>
      <WrapperMenu onClick={toggleMenu}>
        <MenuText>menu</MenuText>
        <BurgerMenu/>  
      </WrapperMenu>
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} />
      
    </Head>
  )
}

export default Header