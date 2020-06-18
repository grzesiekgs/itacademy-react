import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import { joinClasses } from '../../utils/classNames';
import './Binary.css';

export const BinaryWithHooks = () => {
  const [value, setValue] = useState(0);
  const handleClick = useCallback(() => {
    console.log('handleClick');

    setValue(Number(!value));
  }, [value, setValue]);

  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div
      className={joinClasses('binary', `binary--${value}`)}
      onClick={handleClick}
    >
      H{value}
    </div>
  );
};
