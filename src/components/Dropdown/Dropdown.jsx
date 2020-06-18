import React, { PureComponent, Component } from 'react';
import { conditionClass, joinClasses } from '../../utils/classNames';
import './Dropdown.css';
import clickObserver from '../../utils/clickOberser';

const Styles = {
  dropdown: 'dropdown',
  content: 'dropdown__content',
  contentOpen: 'dropdown__content--open',
};

const createcontentStyle = (maxHeight) => ({
  maxHeight,
});

export class Dropdown extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.containerRef = React.createRef();
  }

  /* componentWillUnmount() {
    clickObserver.unobserve(this.closeDropdown);
  } */

  openDropdown() {
    if (this.state.open) {
      return;
    }

    this.setState({ open: true }, this.handleVisibilityChange);

    clickObserver.observe(
      this.closeDropdown,
      this.containerRef.current
    );
  }

  closeDropdown = () => {
    if (!this.state.open) {
      return;
    }

    this.setState({ open: false }, this.handleVisibilityChange);

    clickObserver.unobserve(this.closeDropdown);
  };

  toggleDropdown = (open) => {
    const close = open === undefined ? this.state.open : !open;

    close ? this.closeDropdown() : this.openDropdown();
  };

  handleVisibilityChange = () => {
    const { onToggle } = this.props;

    if (typeof onToggle === 'function') {
      onToggle(this.state.open);
    }
  };

  render() {
    const {
      content,
      maxHeight,
      children,
      className,
      contentClassName,
    } = this.props;
    const contentClass = joinClasses(
      Styles.content,
      conditionClass(this.state.open, Styles.contentOpen),
      contentClassName
    );
    console.log('Dropdown render');
    return (
      <div
        ref={this.containerRef}
        className={joinClasses(Styles.dropdown, className)}
      >
        {children}
        <div
          style={createcontentStyle(maxHeight)}
          className={contentClass}
        >
          {content}
        </div>
      </div>
    );
  }
}
