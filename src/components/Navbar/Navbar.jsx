import { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/scrollToSection';
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

  const handleNavClick = (e, id) => {
    setMenuOpen(false);
    scrollToSection(e, id);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
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
          <li><a href="#about" className={styles.navItem} onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#projects" className={styles.navItem} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#certificates" className={styles.navItem} onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a></li>
          <li><a href="#contact" className={styles.navItem} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



