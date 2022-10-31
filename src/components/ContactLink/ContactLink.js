import classes from './ContactLink.module.scss';

const ContactLink = ({ href, Icn, text, className }) => {
  const contactLinkClasses = `${classes.contact} ${className}`;
  return (
    <a href={href} className={contactLinkClasses}>
      <Icn className={classes.contact__icn} />
      <p className={classes.contact__text}>{text}</p>
    </a>
  );
};

export default ContactLink;
