import styled from 'styled-components';

export const List = styled.ul`
  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-gap: 24px;
    padding: 0 56px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1280px) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }
`;
