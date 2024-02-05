import styled from 'styled-components';
import { ReactComponent as Burger } from '../../images/svg/burger-menu.svg';

export const HeaderSection = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 30px;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */

@media screen and (min-width: 768px){
    padding-top: 32px;
}

@media screen and (min-width: 1280px){
    padding-top: 37px;
}
`
export const FlexContainer = styled.div`
width: 100%;
    /* position: absolute; */
    /* padding-top: 30px; */
    display: flex;
    justify-content: space-between;
    /* @media screen and (min-width: 768px){
    padding-top: 32px;
}

@media screen and (min-width: 1280px){
    padding-top: 37px;
} */
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