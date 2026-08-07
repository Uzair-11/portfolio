import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Bento.module.css';

const Bento = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className={styles.bentoSection}>
      <div className="container">
        
        <h2 className={styles.sectionHeading}>About & Skills</h2>

        <div ref={ref} className={`${styles.bentoGrid} ${isIntersecting ? styles.visible : ''}`}>
          
          {/* Profile Card */}
          <div className={`sketch-box ${styles.noteCard} ${styles.photoCard}`}>
            <div className={styles.tape}></div>
            <img 
              src="https://ik.imagekit.io/8wguvwsuie/IMG-20260119-WA0049.jpg?updatedAt=1782658489167" 
              alt="Shaikh Mohammed Uzer" 
              className={styles.profileImage}
            />
            <h3 className={styles.handwritten}>Shaikh Mohammed Uzer</h3>
            <p className={styles.subHand}>Full Stack Developer</p>
          </div>

          {/* Education & Bio */}
          <div className={`sketch-box ${styles.noteCard} ${styles.aboutCard}`}>
            <div className={styles.pin}></div>
            <h3 className={styles.handTitle}>About Me & Education</h3>
            <p className={styles.typeText}>
              I am a passionate Full Stack Developer based in India. I specialize in building complete end-to-end web applications, modular APIs, and relational/NoSQL databases.
            </p>
            <div className={styles.eduSection}>
              <div className={styles.eduItem}>
                <span className={styles.badge}>Pursuing</span>
                <strong>M.Sc. IT</strong> — LJ University <em>(Expected 2027)</em>
              </div>
              <div className={styles.eduItem}>
                <span className={styles.badgeCompleted}>Completed</span>
                <strong>B.Sc. IT</strong> — LJ University <em>(CGPA: 6.29)</em>
              </div>
            </div>
            <div className={styles.langBar}>
              <strong>🗣️ Languages Spoken:</strong> English, Hindi, Gujarati
            </div>
          </div>

          {/* Tech Stack */}
          <div className={`sketch-box ${styles.noteCard} ${styles.techCard}`}>
            <div className={styles.tape}></div>
            <h3 className={styles.handTitle}>Languages & Stacks</h3>
            <ul className={styles.techList}>
              <li><span className="highlight">Languages:</span> HTML, CSS, JS, Python, Java, C, C++</li>
              <li><span className="highlight">Stacks:</span> MERN, MEAN, Django, Laravel</li>
              <li><span className="highlight">Tools:</span> GitHub, VS Code</li>
            </ul>
          </div>

          {/* Current Focus */}
          <div className={`sketch-box ${styles.noteCard} ${styles.focusCard}`}>
            <div className={styles.pin}></div>
            <h3 className={styles.handTitle}>Current Focus & Projects</h3>
            <p className={styles.typeText}>
              • <strong>AxiomERP</strong>: Engineering a full-fledged MERN Enterprise Resource Planning system.<br/>
              • <strong>JIH Sewing Classes Management System</strong>: Multi-branch operations & financial balance system.<br/>
              • Expanding backend scalability, clean architecture, and modern UI performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bento;

