import styled from 'styled-components';

export const Container = styled.div`
position: relative;
margin: 0 auto;
padding: 0 20px;
width: 100%;
max-width: 480px;

@media screen and (min-width: 768px){
    padding: 0 30px;
    max-width: 768px;
}

@media screen and (min-width: 1280px){
    padding: 0 112px;
    max-width: 1280px;
}
`