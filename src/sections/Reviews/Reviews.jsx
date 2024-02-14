import React from 'react';
import {
  Circle,
  ReviewsSection,
  Title,
  SliderStyled,
  ArrowPrew,
  ArrowNext,
} from './Reviews.styled';
import { Container } from 'components/Layout/Layout.styled';
import Review from 'components/Review/Review';

const Reviews = ({ reviews }) => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Circle
        className={className}
        style={{ ...style, display: 'flex' }}
        onClick={onClick}
      >
        <ArrowNext />
      </Circle>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Circle
        className={className}
        style={{ ...style, display: 'flex' }}
        onClick={onClick}
      >
        <ArrowPrew />
      </Circle>
    );
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ReviewsSection id="reviews">
      <Container>
        <Title>Recenzje</Title>

        <SliderStyled {...settings}>
          {reviews.map(review => {
            return (
              <div key={review.id}>
                <Review review={review} />
              </div>
            );
          })}
        </SliderStyled>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;
