import classes from './Title.module.scss';

const Title = ({ className, text }) => {
  const titleClasses = `${classes.title} ${className}`;
  return <h2 className={titleClasses}>{text}</h2>;
};

export default Title;
