import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  padding: 51px 20px;
  margin: 0 auto;
  background: ${p => p.theme.colors.secondaryAccentColor};
  max-width: 480px;

  @media screen and (min-width: 768px) {
    position: relative;
    padding: 57px 82px;
    border-radius: 24px;
    width: 608px;
    max-width: 608px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.labelsColor};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Input = styled(Field)`
  padding: 20px 24px;
  border: 1px solid #d2d2d2;
  border-radius: 9px;
  height: 62px;
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.mainTextColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  &::placeholder {
    font-family: 'InterMedium';
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.placeholderColor};
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const Textarea = styled(Field)`
  padding: 20px 24px;
  border: 1px solid #d2d2d2;
  border-radius: 9px;
  height: 150px;
  resize: none;
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.mainTextColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  &::placeholder {
    font-family: 'InterMedium';
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.placeholderColor};
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  font-family: 'InterMedium';
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-align: right;
  color: ${p => p.theme.colors.accentColor};
`;

export const Button = styled.button`
  border-radius: 24px;
  padding: 20px 32px;
  color: ${p => p.theme.colors.textWhiteColor};
  background: ${p => p.theme.colors.accentColor};
  border: none;
  width: 100%;
  font-family: 'AnzeigenGroT';
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    font-size: 40px;
  }
`;
