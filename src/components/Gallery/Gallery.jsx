import React, { PureComponent } from 'react';
import './Gallery.css';
import { GalleryItem } from './GalleryItem';
import { GalleryNavItem } from './GalleryNavItem';
import { joinClasses } from '../../utils/classNames';

const Styles = {
  gallery: 'gallery',
  itemsList: 'gallery__items-list',
  navigation: 'gallery__nav-list',
  button: 'gallery__button',
  buttonLeft: 'gallery__button--left',
  buttonRight: 'gallery__button--right',
};

const renderGalleryNavItem = (activeItem, onClick) => (
  imageSrc,
  index
) => (
  <GalleryNavItem
    key={imageSrc}
    src={imageSrc}
    onClick={onClick}
    active={activeItem === index}
    index={index}
  />
);

const renderGalleryItem = (imageSrc) => (
  <GalleryItem key={imageSrc} src={imageSrc} />
);

export class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 0,
      listWidth: null,
    };

    this.itemsListRef = React.createRef();
  }

  componentDidMount() {
    const listWidth = this.itemsListRef.current.getBoundingClientRect()
      .width;

    this.setState({ listWidth });
  }

  handleNavItemClick = (event) => {
    const activeItem = Number(event.currentTarget.dataset.index);

    this.setState({ activeItem }, this.scrollToActiveItem);
  };

  handleNavLeft = () => {
    let activeItem = this.state.activeItem - 1;

    if (activeItem < 0) {
      activeItem = 0;
    }

    this.setState({ activeItem }, this.scrollToActiveItem);
  };

  handleNavRight = () => {
    let activeItem = this.state.activeItem + 1;

    if (activeItem >= this.props.images.length) {
      activeItem = this.props.images.length - 1;
    }

    this.setState({ activeItem }, this.scrollToActiveItem);
  };

  scrollToActiveItem = () => {
    const { activeItem, listWidth } = this.state;

    this.itemsListRef.current.scrollTo(activeItem * listWidth, 0);
  };

  render() {
    const { activeItem } = this.state;
    const { images } = this.props;

    return (
      <div className={Styles.gallery}>
        <button
          className={joinClasses(Styles.button, Styles.buttonLeft)}
          onClick={this.handleNavLeft}
        >
          {'<'}
        </button>
        <button
          className={joinClasses(Styles.button, Styles.buttonRight)}
          onClick={this.handleNavRight}
        >
          {'>'}
        </button>
        <ul className={Styles.itemsList} ref={this.itemsListRef}>
          {images.map(renderGalleryItem)}
        </ul>
        <ul className={Styles.navigation}>
          {images.map(
            renderGalleryNavItem(activeItem, this.handleNavItemClick)
          )}
        </ul>
      </div>
    );
  }
}
