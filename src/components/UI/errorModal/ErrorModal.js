import Button from '../button/Button';

import classes from './ErrorModal.module.scss';

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Зрозуміло</Button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;
