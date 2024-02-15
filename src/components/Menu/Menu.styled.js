import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { ReactComponent as Close } from '../../images/svg/close.svg';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  width: 100dvw;
  height: 100dvh;
  z-index: 2;
  background: ${p => p.theme.colors.mainBgColor};
  padding: 30px 20px;
  transition: left 0.3s ease;

  @media screen and (min-width: 768px) {
    padding: 32px 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 37px 112px;
  }
`;

export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 62px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
`;
export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 36px;
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;

export const Link = styled(ScrollLink)`
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  color: ${p => p.theme.colors.mainTextColor};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;
