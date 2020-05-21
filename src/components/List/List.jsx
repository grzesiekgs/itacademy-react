import React, { Component } from 'react';
import './List.css';
import { ListItem } from '../ListItem/ListItem';

export class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
    };
  }

  handleItemClick = (event) => {
    const value = Number(event.target.dataset.value);
    const alreadySelected = this.state.selected.includes(value);
    let selected;

    if (alreadySelected) {
      selected = this.state.selected.filter(
        (itemValue) => itemValue !== value
      );
    } else {
      selected = [...this.state.selected, value];
    }

    this.setState({
      selected,
    });
    console.log('handleItemClick');
    console.log('handleItemClick', this.state.selected);
  };

  render() {
    const { selected } = this.state;

    return (
      <ul className={'list'}>
        {this.props.items.map((item, index) => (
          <ListItem
            label={item.label}
            value={item.value}
            checked={selected.includes(item.value)}
            key={index}
            onClick={this.handleItemClick}
          />
        ))}
      </ul>
    );
  }
}
