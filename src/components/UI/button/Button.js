import classes from './Button.module.scss';

const Button = ({ children, type, onClick, className }) => {
  const buttonClasses = `${classes.button} ${className}`;
  return (
    <button className={buttonClasses} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
