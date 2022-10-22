import { useState, useEffect, useCallback } from 'react';

import classes from './NumericItem.module.scss';

const NumericItem = ({ img, title, amount }) => {
  const [number, setNumber] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const increment = useCallback(() => {
    const counter = (length = 1000) => {
      setNumber(0);
      let n = amount;
      let start = Date.now();
      let end = start + length;
      let interval = length / n;
      const sInt = setInterval(() => {
        let time = Date.now();
        if (time < end) {
          let count = Math.floor((time - start) / interval);
          setNumber(count);
        } else {
          setNumber(n);
          clearInterval(sInt);
        }
      }, interval);
    };

    counter();
  }, [amount]);

  document.addEventListener('scroll', async () => {
    const element = document.getElementById('root');
    const elementPosition = element.getBoundingClientRect().top;

    if (window.pageYOffset > elementPosition) setTrigger(true);
  });

  useEffect(() => {
    if (trigger) {
      increment();
    }
  }, [trigger, increment]);
  return (
    <li className={classes.numericitem}>
      <div className={classes.numericitem__img}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.numericitem__amount} data-amount={amount}>
        {number}
      </div>
      <p className={classes.numericitem__title}>{title}</p>
    </li>
  );
};

export default NumericItem;
