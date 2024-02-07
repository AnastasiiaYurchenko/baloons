import { Container } from 'components/Layout/Layout.styled';
import React from 'react';
import {
  Subtitle,
  Text,
  SliderStyled,
  Item,
  ItemTitle,
  ItemText,
} from './About.styled';

const About = () => {
  const settings = {
    infinite: false,
    // dots: true,
    // arrows: false,
    // infinite: true,
    adaptiveHeight: true,
    // speed: 500,
    // slidesToShow:  1 ,
    // slidesToScroll: 1,
    // swipeToSlide: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="about">
      <Container>
        <Subtitle>kreatywny zespół dekoratorów</Subtitle>
        <Text>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </Text>
        <SliderStyled {...settings}>
          <Item>
            <ItemTitle>Kreatywne podejście i dbałość o szczegóły</ItemTitle>
            <ItemText>
              Specjaliści zapewniają doradztwo i kreatywność przy wyborze
              dekoracji balonowych, z dbałością o szczegóły
            </ItemText>
          </Item>
          <Item>
            <ItemTitle>Materiały przyjazne dla środowiska</ItemTitle>
            <ItemText>
              Wykorzystywane są materiały najwyższej jakości, w tym
              biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
              ślad na środowisku.
            </ItemText>
          </Item>
          <Item>
            <ItemTitle>Szeroka gama kolorów do personalizacji</ItemTitle>
            <ItemText>
              Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
              pozwala spersonalizować wystrój na każdą okazję.
            </ItemText>
          </Item>
          <Item>
            <ItemTitle>Gwarancja dostawy i montażu</ItemTitle>
            <ItemText>
              Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
              także ich montaż, zapewniając klientom kompleksową obsługę.
            </ItemText>
          </Item>
        </SliderStyled>
      </Container>
    </section>
  );
};

export default About;
