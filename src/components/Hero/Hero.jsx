import { scrollToSection } from '../../utils/scrollToSection';
import { Sparkles, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          
          <div className={`sketch-box ${styles.helloBadge}`}>
            <span>👋 Engineering & Architecture Portfolio</span>
          </div>
          
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Shaikh Mohammed <span className="highlight">Uzer</span>
            </h1>
            <svg className={styles.starDoodle1} viewBox="0 0 100 100" aria-hidden="true">
              <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="none" stroke="var(--highlighter)" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
            <svg className={styles.starDoodle2} viewBox="0 0 100 100" aria-hidden="true">
              <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="none" stroke="var(--highlighter)" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.credentialPills}>
            <span className={styles.credPill}>
              <Cpu size={15} />
              Applied AI & PyTorch
            </span>
            <span className={styles.credPill}>
              <Terminal size={15} />
              Enterprise ERP & MERN
            </span>
            <span className={styles.credPill}>
              <ShieldCheck size={15} />
              120+ Automated Tests
            </span>
            <span className={styles.credPill}>
              <Sparkles size={15} />
              M.Sc. IT @ LJ Univ
            </span>
          </div>
          
          <div className={`sketch-box ${styles.descriptionBox}`}>
            <p>
              Full Stack & AI Engineer specializing in end-to-end architectures. 
              Creator of <strong>VitaLens</strong> (multimodal clinical diagnostics & PyTorch classifier), 
              <strong> AxiomERP</strong> (enterprise 3-way matching & inventory ledgers), and 
              <strong> Training Center Manager</strong> (production NGO operations with 104 passing tests).
            </p>
          </div>
          
          <div className={styles.actions}>
            <a 
              href="#projects" 
              className="sketch-button sketch-button-primary" 
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              Explore Flagship Systems 🚀
            </a>
            <a 
              href="#about" 
              className="sketch-button" 
              onClick={(e) => scrollToSection(e, 'about')}
            >
              Tech Stack & Bio 💡
            </a>
            <a 
              href="#contact" 
              className="sketch-button" 
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact Me 📬
            </a>
          </div>

          <div className={styles.doodleArrow}>
            <svg viewBox="0 0 100 100" className={styles.arrowSvg} aria-hidden="true">
              <path d="M10,10 Q40,50 90,90 M70,90 L90,90 L90,70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Explore systems!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
