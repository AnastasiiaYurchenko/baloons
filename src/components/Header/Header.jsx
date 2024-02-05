import React, { useState } from 'react'
import { BurgerMenu, HeaderSection, FlexContainer, WrapperMenu, MenuText } from './Header.styled';
import Menu from 'components/Menu/Menu';
import logo from '../../images/logo.png';
import { Container } from 'components/Layout/Layout.styled';


const Header = () => {
const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <HeaderSection>
      <Container>
        <FlexContainer>
          <a href="/">
            <img src={logo} alt="Logo" width='104px' />
          </a>
          <WrapperMenu onClick={toggleMenu}>
            <MenuText>menu</MenuText>
            <BurgerMenu/>  
          </WrapperMenu>
        </FlexContainer>

    
      </Container>
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} />
    </HeaderSection>
  )
}

export default Header