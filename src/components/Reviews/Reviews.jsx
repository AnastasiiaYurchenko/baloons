import React from 'react';
import { Arrows, Circle, ReviewsSection, Title, ArrowPrew, ArrowNext } from './Reviews.styled';
import { Container } from 'components/Layout/Layout.styled';
import Review from 'components/Review/Review';

const Reviews = ({reviews}) => {
  return (
    <ReviewsSection>
      <Container>
        <Title>Recenzje</Title>

        <div>
      {reviews.map(review => {
        return (
          <div key={review.id}>
            <Review review={review} />
          </div>
        );
      })}
        </div>
        
      <Arrows>
          <Circle><ArrowPrew/></Circle>
          <Circle><ArrowNext/></Circle>
      </Arrows>

      </Container>
    </ReviewsSection>
  )
}

export default Reviews