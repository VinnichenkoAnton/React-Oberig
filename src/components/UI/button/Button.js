import classes from './Button.module.scss';

const Button = ({ children, type, onClick }) => {
  return (
    <button className={classes.button} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
