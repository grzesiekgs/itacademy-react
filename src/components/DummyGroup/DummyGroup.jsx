import React, { Component } from 'react';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';

export class DummyGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Ala', 'Bartek', 'Ela', 'Ewa', 'Marek', 'Zbyszek'],
    };
  }

  handleOnSelect = (selectedItems) => {
    console.log('onSelect', selectedItems);
  };

  handleRandomItem = () => {
    const randomItem = Math.floor(Math.random() * 10000).toString();
    const items = [...this.state.items, randomItem];

    this.setState({
      items,
    });
  };

  render() {
    const { items } = this.state;
    console.log('Dummygroup render', items);

    return (
      <>
        <CheckboxGroup items={items} onSelect={this.handleOnSelect} />
        <button onClick={this.handleRandomItem}>
          add random item
        </button>
      </>
    );
  }
}
