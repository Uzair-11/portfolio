import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Bento.module.css';

const Bento = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className={styles.bentoSection}>
      <div className="container">
        
        <h2 className={styles.sectionHeading}>About & Skills</h2>

        <div ref={ref} className={`${styles.bentoGrid} ${isIntersecting ? styles.visible : ''}`}>
          
          <div className={`sketch-box ${styles.noteCard} ${styles.photoCard}`}>
            <div className={styles.tape}></div>
            <img 
              src="https://ik.imagekit.io/8wguvwsuie/IMG-20260119-WA0049.jpg?updatedAt=1782658489167" 
              alt="Shaikh Mohammed Uzer" 
              className={styles.profileImage}
            />
            <h3 className={styles.handwritten}>Yup, that's me.</h3>
          </div>

          <div className={`sketch-box ${styles.noteCard} ${styles.aboutCard}`}>
            <div className={styles.pin}></div>
            <h2 className={styles.handTitle}>The Short Version</h2>
            <p className={styles.typeText}>
              I am a Full Stack Developer located in Ahmedabad, India. I am currently pursuing my MSc in IT.
              I don't just write code; I architect systems. Whether it is a complex relational database schema or a responsive UI, I build it from scratch.
            </p>
          </div>

          <div className={`sketch-box ${styles.noteCard} ${styles.techCard}`}>
            <div className={styles.tape}></div>
            <h3 className={styles.handTitle}>Tools of the Trade</h3>
            <ul className={styles.techList}>
              <li><span className="highlight">Frontend:</span> React, Vite, JS, CSS</li>
              <li><span className="highlight">Backend:</span> Node.js, Express, NestJS</li>
              <li><span className="highlight">Database:</span> MongoDB, PostgreSQL</li>
              <li><span className="highlight">Other:</span> Git, Docker, REST</li>
            </ul>
          </div>

          <div className={`sketch-box ${styles.noteCard} ${styles.focusCard}`}>
            <div className={styles.pin}></div>
            <h3 className={styles.handTitle}>Currently Focusing On</h3>
            <p className={styles.typeText}>
              - Message Queues (RabbitMQ)<br/>
              - Distributed Systems<br/>
              - Finishing AxiomERP's ledger module
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bento;
