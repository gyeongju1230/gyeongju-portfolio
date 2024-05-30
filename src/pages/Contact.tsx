import ContactLayout from '../components/contact/contact-layout/ContactLayout';
import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';

const Contact = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? '' : 'none-menu';

  return <ContactLayout menuBar={menuBar} />;
};

export default Contact;
