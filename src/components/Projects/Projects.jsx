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
      id: "training-center-manager",
      title: "Training Center Manager",
      status: "✨ NGO Platform",
      tagline: "Multi-Branch Operations & Financial Accounting System",
      description: "Full-stack administration system for managing multi-branch vocational sewing training operations — built independently for a real NGO use case, covering student lifecycle, staff hierarchy, and branch-level financial accounting.",
      highlights: [
        "4-Tier Role Access: Admin, Amir-e-Muqami (multi-branch exec), Supervisor, and Branch Teacher — each scoped to their own permissions and branch access",
        "Recurring Fee Engine: Monthly billing cycles with Full Fee, Partial Relief, and 100% Waiver handling, auto-generated per student",
        "Attendance System: Daily tracking with holiday blocking, server-enforced date locking, and a student leave request/approval workflow",
        "Sewing Machine Asset Ledger: Tracks machine status and maintenance, with repair costs auto-linked to branch expenses",
        "Branch Finance Engine: Computes Branch Balance = Fees Collected − Operating Expenses, with NGO financial support accounting",
        "Certificate System: Configurable certificate templates with dynamic field positioning and auto-generation on exam completion",
        "Security: JWT access/refresh token auth, RBAC with branch-scoped access control, input validation, rate limiting",
        "Testing: 97 backend (Jest/Supertest) + 17 frontend (Playwright) automated tests"
      ],
      tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
      link: "https://class-management-umber.vercel.app/",
      github: "https://github.com/Uzair-11/class_management.git"
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


