import React from 'react';
import { List, Item, ItemTitle, ItemText } from './AboutGrid.styled';

const AboutGrid = () => {
  return (
    <List>
      <Item>
        <ItemTitle>Kreatywne podejście i dbałość o szczegóły</ItemTitle>
        <ItemText>
          Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji
          balonowych, z dbałością o szczegóły
        </ItemText>
      </Item>
      <Item>
        <ItemTitle>Materiały przyjazne dla środowiska</ItemTitle>
        <ItemText>
          Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne
          materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku.
        </ItemText>
      </Item>
      <Item>
        <ItemTitle>Szeroka gama kolorów do personalizacji</ItemTitle>
        <ItemText>
          Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala
          spersonalizować wystrój na każdą okazję.
        </ItemText>
      </Item>
      <Item>
        <ItemTitle>Gwarancja dostawy i montażu</ItemTitle>
        <ItemText>
          Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
          także ich montaż, zapewniając klientom kompleksową obsługę.
        </ItemText>
      </Item>
    </List>
  );
};

export default AboutGrid;
