import React from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import { UserModal } from './Modals/UserModal';

export const ModalsManager = () => (
  <UserContext.Consumer>
    {({ toggleModal, isSubmitted, name, lastName, email }) =>
      isSubmitted ? (
        <UserModal
          name={name}
          lastName={lastName}
          email={email}
          onClick={() => {
            toggleModal(false);
          }}
        />
      ) : null
    }
  </UserContext.Consumer>
);
