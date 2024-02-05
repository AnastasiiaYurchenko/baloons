import React from 'react'
import { FooterSection, Text } from './Footer.styled'
import { Container } from 'components/Layout/Layout.styled';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <FooterSection>
          <Container>
              
              <a href="/">
            <img src={logo} alt="Logo" width='104px' />
              </a>
              <Text>confetti &copy; 2023</Text>
          </Container>   
    </FooterSection>
  )
}

export default Footer