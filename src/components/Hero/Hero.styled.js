import styled from 'styled-components';
import bg1mob from '../../images/bg1mobile.png';
import bg2mob from '../../images/bg2mobile.png';
import bg1tabl from '../../images/bg1-tablet.png';
import bg2tabl from '../../images/bg2-tablet.png';
import bg1desk from '../../images/bg1-desk.png';
import bg2desk from '../../images/bg2-desk.png';

export const HeroContainer = styled.div`
    padding-top: 156px;
    padding-bottom: 234px;
    background-image: url(${bg1mob}), url(${bg2mob});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

@media screen and (min-width: 768px){
    background-image: url(${bg1tabl}), url(${bg2tabl});
}

@media screen and (min-width: 1280px){
    background-image: url(${bg1desk}), url(${bg2desk});
}

`;

export const Title = styled.h1`
    font-family: 'AnzeigenGroT';
    font-weight: 500;
    font-size: 40px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    text-align: center;
    line-height: 0.9;
    width: 319px;
    margin: 0 auto;
    color: ${p => p.theme.colors.accentColor};

    & span{
        color: ${p => p.theme.colors.mainTextColor};
    }

    @media screen and (min-width: 768px){
        width: 484px;
        font-size: 64px;
    }

    @media screen and (min-width: 1280px){
        width: 660px;
        font-size: 80px;
    }
`
