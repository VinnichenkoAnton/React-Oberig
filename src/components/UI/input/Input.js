import { useState } from 'react';
import classNames from 'classnames';

import classes from './Input.module.scss';

const Input = ({ name, type, text, enteredValue, onChange }) => {
  const [labelIsUp, setLabelIsUp] = useState(false);
  const inputBlurHandler = () => {
    if (labelIsUp && enteredValue.trim().length === 0) {
      setLabelIsUp(false);
    }
  };
  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onFocus={() => setLabelIsUp(true)}
        onBlur={inputBlurHandler}
        value={enteredValue}
      />
      <label
        className={classNames(classes.label, labelIsUp ? classes.label_up : '')}
        htmlFor={name}
      >
        {text}
      </label>
    </div>
  );
};

export default Input;
