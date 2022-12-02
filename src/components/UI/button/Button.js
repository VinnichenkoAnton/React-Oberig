import classNames from 'classnames/bind';

import classes from './Button.module.scss';

const Button = ({ children, type, onClick, className, buttonActivity }) => {
  const buttonClasses = classNames(classes.button, className, classes[`button_${buttonActivity}`]);
  return (
    <button className={buttonClasses} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
