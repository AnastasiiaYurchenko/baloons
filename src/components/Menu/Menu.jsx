import React from 'react';
import logo from '../../images/logo.png'
import { Button, CloseIcon, MenuContainer, WrapperTop, List, Link } from './Menu.styled';

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
            <li><Link href="#hero">główna</Link></li>
            <li><Link href="#about">O nas</Link></li>
            <li><Link href="#reviews">Recenzje</Link></li>
            <li><Link href="#contacts">Kontakty</Link></li>
          </List>
        
          
          
          
    </MenuContainer>
  )
}

export default Menu