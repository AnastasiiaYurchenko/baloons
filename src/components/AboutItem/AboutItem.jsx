import React from 'react';
import { Item, ItemText, ItemTitle } from './AboutItem.styled';

const AboutItem = ({ aboutItem }) => {
  const { title, text } = aboutItem;
  return (
    <Item>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{text} </ItemText>
    </Item>
  );
};

export default AboutItem;
