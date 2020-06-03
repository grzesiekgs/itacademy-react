const filterEmpty = (value) => value !== undefined && value !== '';

export const conditionClass = (
  condition,
  className,
  alternateClassName
) => (condition ? className : alternateClassName || '');

export const joinClasses = (...classNames) =>
  classNames.filter(filterEmpty).join(' ');
