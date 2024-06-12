import * as styles from './ContactLayout.styles';
import ContactContent from '@components/contact/contact-content/ContactContent';
import ProjectScrollUp from '@components/common/scroll/scroll-up/ScrollUp';

const ContactLayout = () => {
  const scrollToHome = () => {
    window.scrollTo({
      top: document.getElementById('home')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  return (
    <styles.Container id="contact">
      <styles.Title>CONTACT</styles.Title>
      <ContactContent />
      <ProjectScrollUp onClick={scrollToHome} />
    </styles.Container>
  );
};

export default ContactLayout;
