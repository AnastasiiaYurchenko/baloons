import styled from 'styled-components';

import { ReactComponent as Phone } from '../../images/svg/phone.svg';
import { ReactComponent as Envelope } from '../../images/svg/envelope.svg';

export const ContactsSection = styled.section`
  display: block;
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
    gap: 95px;
  }
  @media screen and (min-width: 1440px) {
    gap: 240px;
  }
`;

export const LeftWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 147px;
  }
`;

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
    text-align: start;
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
    text-align: start;
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
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    color: ${p => p.theme.colors.mainTextColor};
    margin-bottom: 0;
    align-items: flex-start;
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

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

export const WrapperForm = styled.div`
  position: relative;
  background: ${p => p.theme.colors.secondaryAccentColor};
  margin: 0 auto 80px auto;
  @media screen and (min-width: 768px) {
    padding-top: 88px;
    padding-bottom: 80px;
    max-width: 768px;
    margin: 0 auto;
    background: ${p => p.theme.colors.mainBgColor};
    overflow: hidden;
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
    padding: 200px 0 100px 0;
    overflow: visible;
  }
`;

export const BaloonsLeft = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    left: -42px;
    top: -14px;
  }
  @media screen and (min-width: 1280px) {
    width: 460px;
    left: -152px;
    top: 85px;
  }
`;

export const BaloonsRight = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: -28px;
    bottom: 180px;
  }

  @media screen and (min-width: 1280px) {
    right: -110px;
    bottom: 180px;
  }
`;
