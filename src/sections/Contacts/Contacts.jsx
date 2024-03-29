import React from 'react';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import {
  ContactsSection,
  LeftWrapper,
  Title,
  Text,
  Contact,
  IconPhone,
  IconEnvelope,
  ContactText,
  ContactsWrapper,
  WrapperForm,
  BaloonsLeft,
  BaloonsRight,
} from './Contacts.styled';

import baloonsLeft from '../../images/baloons-left.png';
import baloonsRight from '../../images/baloons-right.png';

const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <LeftWrapper>
        <Title>Kontakty</Title>
        <Text>
          Confetti - Studio <br /> Dekoracij Balonami
          <br /> Warszawa
        </Text>

        <ContactsWrapper>
          <Contact>
            <IconPhone />
            <ContactText href="tel:+48793351407">+48 793 351 407</ContactText>
          </Contact>
          <Contact>
            <IconEnvelope />
            <ContactText href="mailto:confettibalony@gmail.com">
              confettibalony@gmail.com
            </ContactText>
          </Contact>
        </ContactsWrapper>
      </LeftWrapper>

      <WrapperForm>
        <BaloonsLeft src={baloonsLeft} alt="Baloons" width="412px" />
        <BaloonsRight src={baloonsRight} alt="Baloons" width="383px" />
        <ContactsForm />
      </WrapperForm>
    </ContactsSection>
  );
};

export default Contacts;
