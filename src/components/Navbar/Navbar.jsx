import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          [ Uzer ]
        </a>
        
        {/* Hamburger Toggle Button */}
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <li><a href="#about" className={styles.navItem} onClick={closeMenu}>About</a></li>
          <li><a href="#projects" className={styles.navItem} onClick={closeMenu}>Projects</a></li>
          <li><a href="#certificates" className={styles.navItem} onClick={closeMenu}>Certificates</a></li>
          <li><a href="#contact" className={styles.navItem} onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


