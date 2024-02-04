import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Subtitle = styled.div`
font-family: 'AnzeigenGroT';
font-weight: 500;
font-size: 36px;
letter-spacing: -0.01em;
line-height: 0.9;
text-transform: uppercase;
text-align: center;
color: ${p => p.theme.colors.mainTextColor};
margin-bottom: 16px;

@media screen and (min-width: 768px){
    font-size: 48px;
    }

@media screen and (min-width: 1280px){
    font-size: 56px;
    margin-bottom: 24px;
    }
`

export const Text = styled.p`
font-family: 'InterMedium';
font-weight: 500;
font-size: 20px;
line-height: 1.4;
letter-spacing: -0.01em;
text-align: center;
color: ${p => p.theme.colors.secondaryTextColor};
margin: 0 auto;
margin-bottom: 36px;

@media screen and (min-width: 768px){
    width: 584px;
    font-size: 24px;
    margin-bottom: 48px;
    }

@media screen and (min-width: 1280px){
    width: 700px;
    margin-bottom: 64px;
    }
`

export const SliderStyled = styled(Slider)`
 .slick-track {
      display: flex;
      gap: 24px;
    }

.slick-slide[data-index="0"]{
    background: ${p => p.theme.colors.mainTextColor};
}

  @media (min-width: 768px) {
    .slick-track{
    width: 100%;
    display: grid;
    grid-gap: 24px;
    padding: 0 56px;
    grid-template-columns: 1fr; 
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr); 
  }
`

export const Item = styled.div`
border-radius: 24px;
padding: 24px;

&:nth-child(1){
    background: ${p => p.theme.colors.accentColor};
}

&:nth-child(2){
    background: ${p => p.theme.colors.mainTextColor};
}

&:nth-child(3){
    background: #444;;
}

&:nth-child(4){
    background: #808080;;
}

@media screen and (min-width: 768px){
    padding: 48px;
    }
` 
export const ItemTitle = styled.h3`
    font-family: 'AnzeigenGroT';
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: ${p => p.theme.colors.textWhiteColor};
    margin-bottom: 55px;

    @media screen and (min-width: 768px){
    font-size: 40px;
    line-height: 0.95;
    margin-bottom: 40px;
    }
`

export const ItemText = styled.p`
    font-family: 'InterMedium';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.45;
    letter-spacing: -0.01em;
    color: #fffffe;

    @media screen and (min-width: 768px){
    font-size: 20px;
    }

     @media screen and (min-width: 768px){
    line-height: 1.35;
    }
`