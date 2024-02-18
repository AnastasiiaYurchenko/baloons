import React from 'react';
import { Item, ItemText, ItemTitle } from './AboutItem.styled';

const AboutItem = ({ aboutItem }) => {
  const { id, title, text } = aboutItem;
  return (
    <Item id={id}>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{text} </ItemText>
    </Item>
  );
};

export default AboutItem;
