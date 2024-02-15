import React, { useEffect } from 'react';

import {
  Button,
  CloseIcon,
  MenuContainer,
  WrapperTop,
  List,
  Link,
} from './Menu.styled';

import logo from '../../images/logo.png';

const Menu = ({ isOpen, onClose }) => {
  const handleCloseButtonClick = () => {
    onClose();
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });
  return (
    <MenuContainer isOpen={isOpen}>
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
