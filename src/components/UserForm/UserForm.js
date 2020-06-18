import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';

export const UserForm = () => {
  const {
    toggleModal,
    handleInput,
    name,
    lastName,
    email,
  } = useContext(UserContext);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();

        toggleModal(true);
      }}
    >
      <Input
        name={'name'}
        value={name}
        placeholder={'name'}
        onChange={handleInput}
      />
      <Input
        name={'lastName'}
        value={lastName}
        placeholder={'last name'}
        onChange={handleInput}
      />
      <Input
        name={'email'}
        value={email}
        placeholder={'email address'}
        onChange={handleInput}
      />
    </Form>
  );
};
