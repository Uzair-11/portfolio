import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`sketch-box ${styles.helloBadge}`}>
            Hello, my name is
          </div>
          
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Shaikh Mohammed <span className="highlight">Uzer</span>
            </h1>
            <svg className={styles.starDoodle1} viewBox="0 0 100 100">
              <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="none" stroke="var(--highlighter)" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
            <svg className={styles.starDoodle2} viewBox="0 0 100 100">
              <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="none" stroke="var(--highlighter)" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className={`sketch-box ${styles.descriptionBox}`}>
            <p>
              I build web apps, APIs, and databases. 
              No fluff, just solid engineering sketched out into reality.
            </p>
          </div>
          
          <div className={styles.actions}>
            <a href="#projects" className="sketch-button">See My Work</a>
            <a href="#contact" className="sketch-button">Say Hi</a>
          </div>
          
          <div className={styles.doodleArrow}>
            <svg viewBox="0 0 100 100" className={styles.arrowSvg}>
              <path d="M10,10 Q40,50 90,90 M70,90 L90,90 L90,70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Scroll down!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
