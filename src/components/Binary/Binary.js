import React, { PureComponent, Component } from 'react';
import { joinClasses } from '../../utils/classNames';
import './Binary.css';

export class Binary extends PureComponent {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  handleClick = () => {
    this.setState({ value: Number(!this.state.value) });

    this.props.onClick();
  };

  render() {
    const { value } = this.state;
    const { outsideValue } = this.props;
    console.log(
      `Binary value: ${value}, outsideValue: ${outsideValue}`
    );
    return (
      <div
        className={joinClasses('binary', `binary--${value}`)}
        onClick={this.handleClick}
      >
        {outsideValue}
        {value}
      </div>
    );
  }
}
