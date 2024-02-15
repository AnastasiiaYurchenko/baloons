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

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleCloseButtonClick}
          >
            główna
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={600}
            onClick={handleCloseButtonClick}
          >
            O nas
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={30}
            duration={600}
            onClick={handleCloseButtonClick}
          >
            Recenzje
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-20}
            duration={600}
            onClick={handleCloseButtonClick}
          >
            Kontakty
          </Link>
        </li>
      </List>
    </MenuContainer>
  );
};

export default Menu;
