import React, { useState, useEffect } from 'react';
import AboutGrid from 'components/AboutGrid/AboutGrid';
import AboutSlider from 'components/AboutSlider/AboutSlider';
import { Container } from 'components/Layout/Layout.styled';
import { Subtitle, Text } from './About.styled';

const About = ({ about }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="about">
      <Container>
        <Subtitle>kreatywny zespół dekoratorów</Subtitle>
        <Text>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </Text>
        {isWideScreen ? <AboutGrid about={about} /> : <AboutSlider />}
      </Container>
    </section>
  );
};

export default About;
