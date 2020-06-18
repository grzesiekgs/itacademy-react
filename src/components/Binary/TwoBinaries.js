import React, { PureComponent } from 'react';
import './Binary.css';
import { Binary } from './Binary';

export class TwoBinary extends PureComponent {
  constructor() {
    super();

    this.state = {
      value1: 0,
      value2: 0,
    };
  }

  handleBinary1Click = () => {
    this.setState({ value1: this.state.value1 + 1 });
  };

  handleBinary2Click = () => {
    this.setState({ value2: this.state.value2 + 1 });
  };

  render() {
    const { value1, value2 } = this.state;

    return (
      <div>
        <Binary
          outsideValue={value1}
          onClick={this.handleBinary1Click}
        />
        <Binary
          outsideValue={value2}
          onClick={this.handleBinary2Click}
        />
      </div>
    );
  }
}
