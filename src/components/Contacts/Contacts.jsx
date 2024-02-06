import React from 'react';
import {
  Title,
  Text,
  Contact,
  IconPhone,
  IconEnvelope,
  ContactText,
  ContactsWrapper,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <section>
      <Title>Kontakty</Title>
      <Text>
        Confetti - Studio <br /> Dekoracij Balonami
        <br /> Warszawa
      </Text>

      <ContactsWrapper>
        <Contact>
          <IconPhone />
          <ContactText>+48 793 351 407</ContactText>
        </Contact>
        <Contact>
          <IconEnvelope />
          <ContactText>confettibalony@gmail.com</ContactText>
        </Contact>
      </ContactsWrapper>
    </section>
  );
};

export default Contacts;
