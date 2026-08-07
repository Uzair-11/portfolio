import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Footer.module.css';

const Footer = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <footer id="contact" className={styles.footerSection}>
      <div className="container">
        <div ref={ref} className={`${styles.envelope} ${isIntersecting ? styles.visible : ''}`}>
          
          <div className={styles.stamp}>
            HIRE<br/>ME
          </div>

          <h2 className={styles.handTitle}>Drop me a line!</h2>
          <p className={styles.typeText}>
            I'm open for full-stack developer opportunities, software engineering roles, and project collaborations. 
            Feel free to reach out via email or phone!
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <strong>📧 Email:</strong> <a href="mailto:shaikhuzer7576@gmail.com">shaikhuzer7576@gmail.com</a>
            </div>
            <div className={styles.detailItem}>
              <strong>📞 Phone:</strong> <a href="tel:+917984622267">+91 7984622267</a>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="mailto:shaikhuzer7576@gmail.com" className="sketch-button">
              Send Email
            </a>
            <a href="tel:+917984622267" className="sketch-button">
              Call Me
            </a>
          </div>

          <div className={styles.doodleLinks}>
            <a href="https://github.com/Uzair-11" target="_blank" rel="noopener noreferrer">
              [ GitHub ]
            </a>
            <a href="https://www.linkedin.com/in/uzershaikh76" target="_blank" rel="noopener noreferrer">
              [ LinkedIn ]
            </a>
          </div>

          <div className={styles.signature}>
            ~ Uzer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

