import React, { Component } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';
import './SearchInput.css';

const Styles = {
  container: 'search',
  input: 'search__input',
  item: 'search__item',
};

const createRenderItem = (onClick) => (item) => (
  <div onClick={onClick} key={item} className={Styles.item}>
    {item}
  </div>
);

export class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      itemsToRender: [],
    };

    this.dropdownRef = React.createRef();
  }

  handleInput = (event) => {
    const { value } = event.target;
    const searchValue = value.toLowerCase();
    const itemsToRender = this.props.items.filter((item) =>
      item.toLowerCase().startsWith(searchValue)
    );

    this.setState(
      {
        value,
        itemsToRender,
      },
      this.handleDrodownVisibility
    );
  };

  handleDrodownVisibility = () => {
    const { value, itemsToRender } = this.state;

    if (value && itemsToRender.length) {
      this.dropdownRef.current.openDropdown();
    } else {
      this.dropdownRef.current.closeDropdown();
    }
  };
  /* 
  handleFocus = () => {
    if (this.state.value) {
      this.dropdownRef.current.openDropdown();
    }
  };
 */

  handleItemClick = (event) => {
    const { onSelect } = this.props;
    const value = event.target.textContent;

    if (typeof onSelect === 'function') {
      onSelect(value);
    }

    this.setState({
      value,
    });

    this.dropdownRef.current.closeDropdown();
  };

  render() {
    const { value, itemsToRender } = this.state;

    return (
      <Dropdown
        content={itemsToRender.map(
          createRenderItem(this.handleItemClick)
        )}
        ref={this.dropdownRef}
        className={Styles.container}
      >
        <Input
          value={value}
          onChange={this.handleInput}
          onFocus={this.handleDrodownVisibility}
          className={Styles.input}
        />
      </Dropdown>
    );
  }
}
