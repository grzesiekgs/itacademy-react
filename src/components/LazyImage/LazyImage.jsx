import React from 'react';
import { joinClasses, conditionClass } from '../../utils/classNames';
import { viewportObserverAPI } from '../../utils/viewportObserver';
import './LazyImage.css';
import { PureComponent } from 'react';

const Styles = {
  image: 'image',
  loading: 'image--loading',
};

const getImageLoadingProps = (src, shouldLoad) =>
  shouldLoad ? { src } : { 'data-src': src };

export class LazyImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shouldLoad: false,
      loading: false,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    viewportObserverAPI.observe(
      this.imageRef.current,
      this.handleVisibilityChange
    );
  }

  handleVisibilityChange = () => {
    console.log('handleVisibilityChange', this.imageRef.current);
    this.setState({
      shouldLoad: true,
      loading: true,
    });

    viewportObserverAPI.unobserve(this.imageRef.current);
  };

  handleImageLoad = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { src, alt, className } = this.props;
    const { loading, shouldLoad } = this.state;
    console.log(
      'render shouldLoad',
      shouldLoad,
      getImageLoadingProps(src, shouldLoad)
    );
    return (
      <img
        {...getImageLoadingProps(src, shouldLoad)}
        ref={this.imageRef}
        alt={alt}
        onLoad={this.handleImageLoad}
        className={joinClasses(
          Styles.image,
          conditionClass(loading, Styles.loading),
          className
        )}
      />
    );
  }
}
