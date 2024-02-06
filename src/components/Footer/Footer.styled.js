import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.accentColor};
  padding: 32px 0;
  @media screen and (min-width: 768px) {
    padding: 24px 0 28px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 0 36px 0;
  }
`;

export const Text = styled.p`
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${p => p.theme.colors.mainTextColor};
`;
