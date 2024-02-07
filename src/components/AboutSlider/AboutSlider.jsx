import React from 'react';
import { SliderStyled, Item, ItemTitle, ItemText } from './AboutSlider.styled';

const AboutSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderStyled {...settings}>
      <Item id="1">
        <ItemTitle>Kreatywne podejście i dbałość o szczegóły</ItemTitle>
        <ItemText>
          Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji
          balonowych, z dbałością o szczegóły
        </ItemText>
      </Item>
      <Item id="2">
        <ItemTitle>Materiały przyjazne dla środowiska</ItemTitle>
        <ItemText>
          Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne
          materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku.
        </ItemText>
      </Item>
      <Item id="3">
        <ItemTitle>Szeroka gama kolorów do personalizacji</ItemTitle>
        <ItemText>
          Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala
          spersonalizować wystrój na każdą okazję.
        </ItemText>
      </Item>
      <Item id="4">
        <ItemTitle>Gwarancja dostawy i montażu</ItemTitle>
        <ItemText>
          Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
          także ich montaż, zapewniając klientom kompleksową obsługę.
        </ItemText>
      </Item>
    </SliderStyled>
  );
};

export default AboutSlider;
