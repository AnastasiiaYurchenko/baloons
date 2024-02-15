import styled from 'styled-components';
import { ReactComponent as Burger } from '../../images/svg/burger-menu.svg';

export const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 37px;
  }
`;
export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 139px;
  @media screen and (min-width: 768px) {
    gap: 527px;
  }

  @media screen and (min-width: 1280px) {
    gap: 900px;
  }
`;

export const BurgerMenu = styled(Burger)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: currentColor;
  stroke: currentColor;
`;

export const WrapperMenu = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'AnzeigenGroT';
  text-transform: uppercase;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 0.9;
  color: ${p => p.theme.colors.mainTexColor};
  transition: all 250ms;

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

// export const MenuText = styled.p`
//   font-family: 'AnzeigenGroT';
//   text-transform: uppercase;
//   cursor: pointer;
//   font-size: 24px;
//   font-weight: 500;
//   letter-spacing: -0.01em;
//   line-height: 0.9;
//   color: ${p => p.theme.colors.mainTexColor};
//   transition: all 250ms;

//   &:hover {
//     color: ${p => p.theme.colors.accentColor};
//   }
// `;
