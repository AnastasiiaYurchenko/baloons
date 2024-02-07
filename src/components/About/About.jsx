import { Container } from 'components/Layout/Layout.styled';
import React, { useState, useEffect } from 'react';
import { Subtitle, Text } from './About.styled';
import AboutGrid from 'components/AboutGrid/AboutGrid';
import AboutSlider from 'components/AboutSlider/AboutSlider';

const About = () => {
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
        {isWideScreen ? (
          <AboutGrid />
        ) : (
          // <SliderStyled>
          //   <Item>
          //     <ItemTitle>Kreatywne podejście i dbałość o szczegóły</ItemTitle>
          //     <ItemText>
          //       Specjaliści zapewniają doradztwo i kreatywność przy wyborze
          //       dekoracji balonowych, z dbałością o szczegóły
          //     </ItemText>
          //   </Item>
          //   <Item>
          //     <ItemTitle>Materiały przyjazne dla środowiska</ItemTitle>
          //     <ItemText>
          //       Wykorzystywane są materiały najwyższej jakości, w tym
          //       biodegradowalne materiały balonowe, aby pozostawić jak
          //       najmniejszy ślad na środowisku.
          //     </ItemText>
          //   </Item>
          //   <Item>
          //     <ItemTitle>Szeroka gama kolorów do personalizacji</ItemTitle>
          //     <ItemText>
          //       Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
          //       pozwala spersonalizować wystrój na każdą okazję.
          //     </ItemText>
          //   </Item>
          //   <Item>
          //     <ItemTitle>Gwarancja dostawy i montażu</ItemTitle>
          //     <ItemText>
          //       Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień,
          //       ale także ich montaż, zapewniając klientom kompleksową obsługę.
          //     </ItemText>
          //   </Item>
          // </SliderStyled>
          // <div>Слайдер</div>
          <AboutSlider />
        )}
      </Container>
    </section>
  );
};

export default About;
