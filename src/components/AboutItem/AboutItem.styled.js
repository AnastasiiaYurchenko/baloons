import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 24px;
  padding: 24px;

  &:nth-child(1) {
    background: ${p => p.theme.colors.accentColor};
  }

  &:nth-child(2) {
    background: ${p => p.theme.colors.mainTextColor};
  }

  &:nth-child(3) {
    background: #444;
  }

  &:nth-child(4) {
    background: #808080;
  }

  @media screen and (min-width: 768px) {
    padding: 48px;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 0.95;
    margin-bottom: 40px;
  }
`;

export const ItemText = styled.p`
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: #fffffe;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    line-height: 1.35;
  }
`;
