import React, { Component } from 'react';
import './CheckboxGroup.css';
import { Checkbox } from '../Checkbox/Checkbox';

const Styles = {
  group: 'checkbox-group',
  item: 'checkbox-group__item',
};

const renderGroupItem = (onChange) => (props) => (
  <li key={props.label} className={Styles.item}>
    <Checkbox {...props} onChange={onChange} />
  </li>
);

export class CheckboxGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items.map((label) => ({
        checked: false,
        label,
      })),
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.items === this.props.items) {
      return;
    }

    const newItems = newProps.items;
    const stateItems = this.state.items;
    const items = newItems.map((label) => {
      const exisitngItem = stateItems.find(
        (item) => item.label === label
      );
      const checked = exisitngItem ? exisitngItem.checked : false;

      return {
        checked,
        label,
      };
    });

    this.setState({ items });
  }

  handleChange = (event) => {
    const { checked } = event.target;
    const value = event.target.parentNode.textContent;
    const items = this.state.items.map((item) => {
      if (item.label !== value) {
        return item;
      }

      return {
        label: item.label,
        checked,
      };
    });

    this.setState(
      {
        items,
      },
      this.emitOnSelect
    );
  };

  emitOnSelect = () => {
    const { onSelect } = this.props;

    if (typeof onSelect !== 'function') {
      return;
    }

    const checkedItems = this.state.items
      .filter((item) => item.checked)
      .map((item) => item.label);

    onSelect(checkedItems);
  };

  render() {
    const { items } = this.state;

    return (
      <ul className={Styles.group}>
        {items.map(renderGroupItem(this.handleChange))}
      </ul>
    );
  }
}
