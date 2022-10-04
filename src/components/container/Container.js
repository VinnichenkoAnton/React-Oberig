import classes from './Container.module.scss';

const Container = (props) => {
  const containerClasses = `${classes.container} ${props.className}`;

  return <div className={containerClasses}>{props.children}</div>;
};

export default Container;
