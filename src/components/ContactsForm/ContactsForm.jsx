import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormStyled,
  Input,
  Label,
  Textarea,
  Error,
  Button,
} from './ContactsForm.styled';

let schema = object({
  name: string().min(2).max(20).required(),
  email: string().email().required(),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactsForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={schema}>
      <FormStyled>
        <Label htmlFor="">
          Imię*
          <Input type="text" name="name" placeholder="Imię*" />
          <Error name="name" component="div" />
        </Label>
        <Label htmlFor="">
          E-mail*
          <Input type="email" name="email" placeholder="mail@gmail.com" />
          <Error name="email" component="div" />
        </Label>
        <Label htmlFor="">
          Wiadomość
          <Textarea
            as="textarea"
            name="message"
            placeholder="Twoja wiadomość..."
          />
        </Label>
        <Button type="submit">Wyślij</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactsForm;
