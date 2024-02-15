import React from 'react';
import { useToggle } from 'hooks/useToggle';
import Menu from 'components/Menu/Menu';
import {
  BurgerMenu,
  HeaderSection,
  FlexContainer,
  WrapperMenu,
} from './Header.styled';
import { Container } from 'components/Layout/Layout.styled';

import logo from '../../images/logo.png';

const Header = () => {
  const { isOpen, open, close } = useToggle();
  // const [isMenuVisible, setMenuVisible] = useState(false);

  // const toggleMenu = () => {
  //   setMenuVisible(!isMenuVisible);
  // };

  return (
    <HeaderSection>
      <Container>
        <FlexContainer>
          <a href="/baloons">
            <img src={logo} alt="Logo" width="104px" />
          </a>
          {/* <WrapperMenu onClick={toggleMenu}> */}
          <WrapperMenu onClick={open}>
            menu
            <BurgerMenu />
          </WrapperMenu>
        </FlexContainer>
      </Container>
      <Menu isOpen={isOpen} onClose={close} />
    </HeaderSection>
  );
};

export default Header;
