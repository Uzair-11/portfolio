import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Projects.module.css';

const ProjectShowcase = ({ project }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className={`${styles.showcaseWrapper} ${isIntersecting ? styles.visible : ''}`}>
      <div className={`sketch-box ${styles.showcaseCard}`}>
        
        <div className={styles.tape}></div>

        <div className={styles.imageArea}>
          {project.image ? (
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>Draw {project.title} here...</span>
            </div>
          )}
          <div className={styles.imageCaption}>
            "{project.title} - Screenshot"
          </div>
        </div>

        <div className={styles.infoArea}>
          <div className={styles.infoHeader}>
            <h3 className={styles.title}>{project.title}</h3>
            <div className={styles.links}>
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="sketch-button">
                  Live
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="sketch-button">
                Code
              </a>
            </div>
          </div>
          
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.architectureBar}>
            <span className={styles.archLabel}>Built with:</span>
            <div className={styles.techTags}>
              {project.tech.map((tech, i) => (
                <span key={i} className="highlight">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: "screenpass",
      title: "ScreenPass",
      description: "A comprehensive movie ticket booking platform handling concurrent reservations, role-based access for managers, and a seamless customer booking flow.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://screen-pass-azure.vercel.app",
      github: "https://github.com/Uzair-11/ScreenPass.git",
      image: "https://ik.imagekit.io/8wguvwsuie/image.png"
    },
    {
      id: "axiomerp",
      title: "AxiomERP",
      description: "An enterprise resource planning system engineered for Indian businesses. Features complex ledger accounting and strict multi-tenant data isolation.",
      tech: ["NestJS", "PostgreSQL", "Prisma", "React"],
      link: "#",
      github: "https://github.com/Uzair-11/AxiomOS-ERP.git",
      image: "https://ik.imagekit.io/8wguvwsuie/Screenshot%20(688).png"
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.sectionHeading}>My Portfolio</h2>
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectShowcase key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
