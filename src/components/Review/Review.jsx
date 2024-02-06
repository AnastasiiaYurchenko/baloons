import React from 'react';
import {
  ReviewItem,
  ReviewText,
  Avatar,
  Author,
  BottomWrapper,
} from './Review.styled';

const Review = ({ review }) => {
  const { text, author } = review;
  return (
    <ReviewItem>
      <ReviewText>{text}</ReviewText>
      <BottomWrapper>
        <Avatar />
        <Author>{author}</Author>
      </BottomWrapper>
    </ReviewItem>
  );
};

export default Review;
