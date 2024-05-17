import * as styles from "./ContactLayout.styles";
import ContactContent from "../contact-content/ContactContent";
import ProjectScrollUp from "../../common/scroll/scroll-up/ScrollUp";

interface ContactLayoutProps {
  menuBar: string;
}

const ContactLayout = ({ menuBar }: ContactLayoutProps) => {
  const scrollToHome = () => {
    window.scrollTo({
      top: document.getElementById("home")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container id="contact" className={menuBar}>
      <styles.Title className={menuBar}>CONTACT</styles.Title>
      <ContactContent menuBar={menuBar} />
      <ProjectScrollUp onClick={scrollToHome} />
    </styles.Container>
  );
};

export default ContactLayout;
