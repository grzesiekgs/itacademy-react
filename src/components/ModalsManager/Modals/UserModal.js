import React from 'react';
import { Modal } from '../../Modal/Modal';

export const UserModal = ({ name, lastName, email, onClick }) => (
  <Modal>
    <span>{`The user name is: ${name}`}</span>
    <span>{`The user lastName is: ${lastName}`}</span>
    <span>{`The user email is: ${email}`}</span>
    <button onClick={onClick}>{'Send user data'}</button>
  </Modal>
);
