import { createPortal } from 'react-dom';

const Portal = ({ children, portalId }) =>
  createPortal(children, document.getElementById(portalId));

export default Portal;
