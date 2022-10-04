import classes from './SingleContact.module.scss';

const SingleContact = ({ href, img, alt, text }) => {
  return (
    <a href={href} className={classes.contact}>
      <div className={classes.contact__icn}>
        <img src={img} alt={alt} />
      </div>
      <p className={classes.contact__text}>{text}</p>
    </a>
  );
};

export default SingleContact;
