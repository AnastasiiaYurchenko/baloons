import React from 'react';
import { List } from './AboutGrid.styled';
import AboutItem from 'components/AboutItem/AboutItem';

const AboutGrid = ({ about }) => {
  return (
    <List>
      {about.map(aboutItem => {
        return <AboutItem key={aboutItem.id} aboutItem={aboutItem} />;
      })}
    </List>
  );
};

export default AboutGrid;
