import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          [ Uzer ]
        </a>
        
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.navItem}>About</a></li>
          <li><a href="#projects" className={styles.navItem}>Projects</a></li>
          <li><a href="#contact" className={styles.navItem}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
