import styled from 'styled-components';
import Slider from 'react-slick';
import { ReactComponent as ArrowLeft } from '../../images/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/arrow-right.svg';

export const ReviewsSection = styled.section`
  padding: 80px 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 184px;
  }

  @media screen and (min-width: 1280px) {
    padding: 100px 0 0 0;
  }
`;

export const Title = styled.h2`
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 36px;
  letter-spacing: -0.01em;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.accentColor};
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
    margin-bottom: 64px;
    line-height: 1;
  }
`;

export const SliderStyled = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 16px;
  }
  justify-content: center;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    .slick-arrow::before {
      display: none;
    }
    .slick-prev,
    .slick-next {
      top: 135%;
    }
    .slick-prev {
      left: 40%;
    }
    .slick-next {
      right: 40%;
    }
  }
  @media screen and (min-width: 1280px) {
    .slick-track {
      justify-content: center;
      display: flex;
      gap: 26px;
    }
    justify-content: center;
    display: flex;
    gap: 26px;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #d2d2d2;
`;

export const ArrowPrew = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
`;

export const ArrowNext = styled(ArrowRight)`
  width: 24px;
  height: 24px;
`;
