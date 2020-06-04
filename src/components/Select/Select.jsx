import React, { Component } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import './Select.css';

const Styles = {
  container: 'select',
  button: 'select__button',
  item: 'select__item',
};

const createRenderItem = (onClick) => (item) => (
  <div onClick={onClick} key={item} className={Styles.item}>
    {item}
  </div>
);

export class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.items[0],
    };

    this.dropdownRef = React.createRef();
  }

  handleClick = () => {
    this.dropdownRef.current.toggleDropdown();
  };

  handleItemClick = (event) => {
    const { onSelect } = this.props;
    const value = event.target.textContent;

    this.setState({ value });

    if (typeof onSelect === 'function') {
      onSelect(value);
    }

    this.dropdownRef.current.closeDropdown();
  };

  render() {
    const { value } = this.state;
    const { items } = this.props;

    return (
      <Dropdown
        content={items.map(createRenderItem(this.handleItemClick))}
        ref={this.dropdownRef}
        className={Styles.container}
      >
        <button className={Styles.button} onClick={this.handleClick}>
          {value}
        </button>
      </Dropdown>
    );
  }
}
