import React, { PureComponent } from 'react';

export const UserContext = React.createContext({
  name: '',
  lastName: '',
  email: '',
  isSubmitted: false,
  handleInput: () => null,
  handleSubmit: () => null,
});

export class UserContextProvider extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: '',
      lastName: '',
      email: '',
      isSubmitted: false,
      handleInput: this.handleInputChange,
      toggleModal: this.toggleModal,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  toggleModal = (isSubmitted) => {
    this.setState({
      isSubmitted,
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
