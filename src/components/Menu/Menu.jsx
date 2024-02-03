import React from 'react';
import logo from '../../images/logo.png'
import { Button, CloseIcon, MenuContainer, WrapperTop, List } from './Menu.styled';

const Menu = () => {
  return (
      <MenuContainer>
          <WrapperTop>
              <a href="/">
            <img src={logo} alt="Logo" width='104px' />
          </a>
          <Button type='button'>
              <CloseIcon/>
          </Button>
          </WrapperTop>
          <List>
            <li><a href="#hero">główna</a></li>
            <li><a href="#about">O nas</a></li>
            <li><a href="#reviews">Recenzje</a></li>
            <li><a href="#contacts">Kontakty</a></li>
          </List>
        
          
          
          
    </MenuContainer>
  )
}

export default Menu