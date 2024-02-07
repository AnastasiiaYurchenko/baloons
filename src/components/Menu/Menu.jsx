import React from 'react';
import logo from '../../images/logo.png';
import {
  Button,
  CloseIcon,
  MenuContainer,
  WrapperTop,
  List,
  Link,
} from './Menu.styled';

const Menu = ({ isVisible, onClose }) => {
  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <MenuContainer isVisible={isVisible}>
      <WrapperTop>
        <a href="/baloons">
          <img src={logo} alt="Logo" width="104px" />
        </a>
        <Button type="button" onClick={handleCloseButtonClick}>
          <CloseIcon />
        </Button>
      </WrapperTop>
      <List>
        <li>
          <Link href="#hero" onClick={handleCloseButtonClick}>
            główna
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={handleCloseButtonClick}>
            O nas
          </Link>
        </li>
        <li>
          <Link href="#reviews" onClick={handleCloseButtonClick}>
            Recenzje
          </Link>
        </li>
        <li>
          <Link href="#contacts" onClick={handleCloseButtonClick}>
            Kontakty
          </Link>
        </li>
      </List>
    </MenuContainer>
  );
};

export default Menu;
