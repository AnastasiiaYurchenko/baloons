import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Subtitle = styled.div`
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 36px;
  letter-spacing: -0.01em;
  line-height: 0.9;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.mainTextColor};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 56px;
    margin-bottom: 24px;
  }
`;

export const Text = styled.p`
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${p => p.theme.colors.secondaryTextColor};
  margin: 0 auto;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 584px;
    font-size: 24px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 700px;
    margin-bottom: 64px;
  }
`;
