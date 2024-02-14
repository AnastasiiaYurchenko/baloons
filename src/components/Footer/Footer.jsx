import React from 'react';
import { Content, Text } from './Footer.styled';
import { Container } from 'components/Layout/Layout.styled';

import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Content>
          <a href="/baloons">
            <img src={logo} alt="Logo" width="104px" />
          </a>
          <Text>confetti &copy; 2023</Text>
        </Content>
      </Container>
    </footer>
  );
};

export default Footer;
