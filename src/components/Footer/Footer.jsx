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
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className={styles.actions}>
            <a href="mailto:shaikhuzer7576@gmail.com" className="sketch-button">
              Email Me
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
