import React, { useState } from 'react'
import { BurgerMenu, HeaderSection, WrapperMenu, MenuText } from './Header.styled';
import Menu from 'components/Menu/Menu';
import logo from '../../images/logo.png';
import { Container } from 'components/Layout/Layout.styled';


const Header = () => {
const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <Container>
    <HeaderSection>
      
        <a href="/">
          <img src={logo} alt="Logo" width='104px' />
        </a>
      <WrapperMenu onClick={toggleMenu}>
        <MenuText>menu</MenuText>
        <BurgerMenu/>  
      </WrapperMenu>
        <Menu isVisible={isMenuVisible} onClose={toggleMenu} />
    </HeaderSection>
    </Container>

  )
}

export default Header