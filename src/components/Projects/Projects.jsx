import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useScrollTilt from '../../hooks/useScrollTilt';
import styles from './Projects.module.css';

const ProjectShowcase = ({ project, index }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const tiltRef = useScrollTilt(index % 2 === 0 ? 1 : -1, 1.8);

  return (
    <div ref={ref} className={`${styles.showcaseWrapper} ${isIntersecting ? styles.visible : ''}`}>
      <div ref={tiltRef} className={`sketch-box sketch-box-folded ${styles.showcaseCard}`}>
        <div className={styles.tape}></div>
        <div className={styles.pin}></div>



        <div className={styles.infoArea}>
          <div className={styles.infoHeader}>
            <div>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.status && (
                  <span className={styles.statusBadge}>{project.status}</span>
                )}
              </div>
              <p className={styles.tagline}>{project.tagline}</p>
            </div>
            <div className={styles.links}>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="sketch-button">
                  Live Demo 🚀
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="sketch-button">
                  GitHub Code 💻
                </a>
              )}
            </div>
          </div>
          
          <p className={styles.description}>{project.description}</p>
          
          {project.highlights && project.highlights.length > 0 && (
            <div className={styles.highlightsContainer}>
              <h4 className={styles.highlightsTitle}>📌 Key System Features:</h4>
              <ul className={styles.highlightsList}>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

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
      id: "axiomerp",
      title: "AxiomERP",
      status: "⚡ Currently Working",
      tagline: "Full-Scale Enterprise Resource Planning Platform",
      description: "An Enterprise Resource Planning (ERP) platform engineered for business workflows, ledger accounting, and multi-tenant data architecture.",
      highlights: [
        "Multi-tenant data isolation & secure role-based access control (RBAC)",
        "Double-entry financial ledger accounting with automated statement reporting",
        "Real-time inventory management and operational workflow tracking"
      ],
      tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      link: "#",
      github: "https://github.com/Uzair-11/AxiomOS-ERP.git"
    },
    {
      id: "jih-sewing",
      title: "JIH Sewing Classes Management System",
      status: "✨ NGO Platform",
      tagline: "Multi-Branch Operations & Financial Accounting System",
      description: "Comprehensive administration system built to manage multi-branch vocational sewing training operations across Kalupur, Shahpur, and other NGO branches.",
      highlights: [
        "3-Tier Role Access: Amir-e-Muqami (Multi-Branch Exec), Supervisor, and Branch Teacher roles",
        "Fee Concession Engine: Supports Full Fee, Concession/Partial Relief, and 100% Fee Waiver accounting",
        "Sewing Machine Asset Ledger: Tracks machine IDs, maintenance status (Working, Repair, Replaced), and repair costs",
        "NGO Branch Balance Engine: Computes Branch Balance = Total Fees Collected - Operating Expenses, tracking financial support balances"
      ],
      tech: ["MERN Stack", "Node.js", "React", "Express", "MongoDB", "REST APIs"],
      link: "#",
      github: "https://github.com/Uzair-11"
    },
    {
      id: "screenpass",
      title: "ScreenPass",
      status: "🍿 Featured Project",
      tagline: "Concurrent Movie Ticket Booking & Management Platform",
      description: "Full-stack movie ticketing platform handling real-time seat matrix reservations, concurrent booking locks, and manager screening administration.",
      highlights: [
        "Interactive seat grid selection with concurrent reservation lockouts",
        "Manager dashboard for movie scheduling, ticket tier pricing, and hall capacity control",
        "Seamless customer checkout workflow with instant digital pass generation"
      ],
      tech: ["MEAN Stack", "MongoDB", "Express", "Angular", "Node.js"],
      link: "https://screen-pass-azure.vercel.app",
      github: "https://github.com/Uzair-11/ScreenPass.git"
    },
    {
      id: "srp-rentals",
      title: "SRP Rentals",
      status: "🚗 Vehicle Booking",
      tagline: "Vehicle Rental Reservation & Fleet Management System",
      description: "Full-stack web application designed for vehicle rental cataloging, reservation scheduling, and customer booking management.",
      highlights: [
        "Dynamic vehicle fleet catalog with real-time availability status filtering",
        "Customer reservation scheduling and rental duration cost calculation engine",
        "Booking history tracking and administrative fleet controls"
      ],
      tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
      link: "#",
      github: "https://github.com/Uzair-11"
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.sectionHeading}>My Projects</h2>
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectShowcase key={index} project={project} index={index} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;


