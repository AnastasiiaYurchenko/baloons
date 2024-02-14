import React, { useState } from 'react';
import Menu from 'components/Menu/Menu';
import {
  BurgerMenu,
  HeaderSection,
  FlexContainer,
  WrapperMenu,
  MenuText,
} from './Header.styled';
import { Container } from 'components/Layout/Layout.styled';

import logo from '../../images/logo.png';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <HeaderSection>
      <Container>
        <FlexContainer>
          <a href="/baloons">
            <img src={logo} alt="Logo" width="104px" />
          </a>
          <WrapperMenu onClick={toggleMenu}>
            <MenuText>menu</MenuText>
            <BurgerMenu />
          </WrapperMenu>
        </FlexContainer>
      </Container>
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} />
    </HeaderSection>
  );
};

export default Header;
