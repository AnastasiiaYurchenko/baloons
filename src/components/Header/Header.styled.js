import styled from 'styled-components';
import { ReactComponent as Burger } from '../../images/svg/burger-menu.svg';

export const Head = styled.header`
    height: 200px;
    background: ${p => p.theme.colors.secondaryAccentColor};
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BurgerMenu = styled(Burger)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: ${p => p.theme.colors.mainTextColor};
  stroke: ${p => p.theme.colors.mainTextColor};;
  transition: all 250ms;

  &:hover {
    fill: ${p => p.theme.colors.accentColor};
    stroke: ${p => p.theme.colors.accentColor};
  }
`

export const WrapperMenu = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
` 

export const MenuText = styled.p`
    font-family: 'AnzeigenGroT';
    text-transform: uppercase;
    cursor: pointer;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 0.9;
    color:  ${p => p.theme.colors.mainTexColor};

    &:hover{
        color: ${p => p.theme.colors.accentColor};
    }

`