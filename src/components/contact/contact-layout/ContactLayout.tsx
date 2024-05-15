import * as styles from "./ContactLayout.styles";
import ContactContent from "../contact-content/ContactContent";

interface ContactLayoutProps {
  menuBar: string;
}

const ContactLayout = ({ menuBar }: ContactLayoutProps) => {
  return (
    <styles.Container id="contact" className={menuBar}>
      <styles.Title className={menuBar}>CONTACT</styles.Title>
      <ContactContent menuBar={menuBar} />
    </styles.Container>
  );
};

export default ContactLayout;
