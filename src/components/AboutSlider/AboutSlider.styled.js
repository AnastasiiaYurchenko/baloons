import styled, { css } from 'styled-components';
import Slider from 'react-slick';

export const SliderStyled = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 16px;
  }
`;

export const Item = styled.div`
  border-radius: 24px;
  padding: 24px;
  height: 253px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props =>
    props.id === '1' &&
    css`
      background-color: ${p => p.theme.colors.accentColor};
    `}
  ${props =>
    props.id === '2' &&
    css`
      background-color: ${p => p.theme.colors.mainTextColor};
    `} 
      ${props =>
    props.id === '3' &&
    css`
      background-color: #444;
    `}
  ${props =>
    props.id === '4' &&
    css`
      background-color: #808080;
    `}
`;
export const ItemTitle = styled.h3`
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textWhiteColor};
  margin-bottom: 55px;
`;

export const ItemText = styled.p`
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: #fffffe;
`;
