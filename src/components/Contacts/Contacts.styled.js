import styled from 'styled-components';

import { ReactComponent as Phone } from '../../images/svg/phone.svg';
import { ReactComponent as Envelope } from '../../images/svg/envelope.svg';

export const Title = styled.h2`
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.accentColor};
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
    margin-bottom: 56px;
    line-height: 1;
  }
`;

export const Text = styled.p`
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.mainTextColor};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    line-height: 0.9;
    margin-bottom: 32px;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  color: ${p => p.theme.colors.secondaryTextColor};

  & :hover {
    color: ${p => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
  }
  @media screen and (min-width: 1280px) {
    color: ${p => p.theme.colors.mainTextColor};
    margin-bottom: 0;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconPhone = styled(Phone)`
  width: 24px;
  height: 24px;
  stroke: currentColor;
`;

export const IconEnvelope = styled(Envelope)`
  width: 24px;
  height: 24px;
  stroke: currentColor;
`;

export const ContactText = styled.p`
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-align: center;
  /* color: ${p => p.theme.colors.secondaryTextColor}; */

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    /* color: ${p => p.theme.colors.mainTextColor}; */
  }
`;
