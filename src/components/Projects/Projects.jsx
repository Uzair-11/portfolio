import { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useScrollTilt from '../../hooks/useScrollTilt';
import vitalensImg from '../../assets/vitalens.png';
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Boxes, 
  Activity,
  FileCheck2
} from 'lucide-react';
import styles from './Projects.module.css';

const GitHubIcon = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ verticalAlign: 'middle', flexShrink: 0 }}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const tiltRef = useScrollTilt(index % 2 === 0 ? 1 : -1, 1.4);

  return (
    <div 
      ref={ref} 
      className={`${styles.showcaseWrapper} ${isIntersecting ? styles.visible : ''}`}
    >
      <article ref={tiltRef} className={`sketch-box sketch-box-folded ${styles.showcaseCard}`}>
        {/* Tactile Sketch Decors */}
        <div className={styles.tape}></div>
        <div className={styles.pin}></div>

        {/* Visual Preview / Feature Banner */}
        {project.image ? (
          <div className={styles.imageBannerWrapper}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.browserUrl}>vitalens.health / clinical-portal</span>
              <span className={styles.bannerTag}>AI & ML Architecture</span>
            </div>
            <div className={styles.imageContainer}>
              <img 
                src={project.image} 
                alt={`${project.title} Preview`} 
                className={styles.bannerImage}
                loading="lazy"
              />
            </div>
          </div>
        ) : project.visualType === 'terminal' ? (
          <div className={styles.terminalBanner}>
            <div className={styles.terminalHeader}>
              <div className={styles.browserDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.terminalTitle}>axiomerp-engine --lifecycle-monitor</span>
              <span className={styles.terminalTag}>Enterprise Architecture</span>
            </div>
            <div className={styles.lifecycleFlow}>
              <div className={styles.flowStep}>
                <span className={styles.stepNum}>01</span>
                <span>DRAFT PO</span>
              </div>
              <span className={styles.flowArrow}>➔</span>
              <div className={styles.flowStep}>
                <span className={styles.stepNum}>02</span>
                <span>SUPPLIER DISPATCH</span>
              </div>
              <span className={styles.flowArrow}>➔</span>
              <div className={styles.flowStep}>
                <span className={styles.stepNum}>03</span>
                <span>GRN RECEIPT</span>
              </div>
              <span className={styles.flowArrow}>➔</span>
              <div className={`${styles.flowStep} ${styles.flowStepHighlight}`}>
                <span className={styles.stepNum}>04</span>
                <span>3-WAY MATCH & POST</span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.statsBanner}>
            <div className={styles.statsBannerHeader}>
              <div className={styles.browserDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.statsBannerTitle}>class-management.org / branch-operations</span>
              <span className={styles.statsBannerTag}>Live Production NGO Platform</span>
            </div>
            <div className={styles.statsRibbon}>
              <div className={styles.ribbonItem}>
                <FileCheck2 size={18} className={styles.ribbonIcon} />
                <div>
                  <strong>104 Backend Tests</strong>
                  <span>12/12 Jest Suites Passed</span>
                </div>
              </div>
              <div className={styles.ribbonDivider}></div>
              <div className={styles.ribbonItem}>
                <ShieldCheck size={18} className={styles.ribbonIcon} />
                <div>
                  <strong>4-Tier Scoped RBAC</strong>
                  <span>Zero-Trust IDOR Security</span>
                </div>
              </div>
              <div className={styles.ribbonDivider}></div>
              <div className={styles.ribbonItem}>
                <Activity size={18} className={styles.ribbonIcon} />
                <div>
                  <strong>17 Playwright E2E</strong>
                  <span>Automated Browser Specs</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Area */}
        <div className={styles.infoArea}>
          <div className={styles.infoHeader}>
            <div className={styles.titleColumn}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                
                {project.statusType === 'live' ? (
                  <span className={`${styles.statusBadge} ${styles.statusLive}`}>
                    <span className={styles.pulseDotLive}></span>
                    {project.status}
                  </span>
                ) : (
                  <span className={`${styles.statusBadge} ${styles.statusUpdating}`}>
                    <span className={styles.pulseDotUpdating}></span>
                    {project.status}
                  </span>
                )}
                
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>
              <p className={styles.tagline}>{project.tagline}</p>
            </div>

            <div className={styles.links}>
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`sketch-button sketch-button-primary ${styles.actionBtn}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span className={styles.inProgressPill} title="In active development & iteration">
                  <Clock size={15} />
                  <span>Updation in Progress</span>
                </span>
              )}

              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`sketch-button ${styles.actionBtn}`}
                >
                  <GitHubIcon size={16} />
                  <span>GitHub Repo</span>
                </a>
              )}
            </div>
          </div>

          <p className={styles.description}>{project.description}</p>

          {/* Quick Metrics Matrix */}
          {project.metrics && (
            <div className={styles.metricsGrid}>
              {project.metrics.map((metric, i) => (
                <div key={i} className={styles.metricCard}>
                  <span className={styles.metricLabel}>{metric.label}</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Key System Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className={styles.highlightsContainer}>
              <h4 className={styles.highlightsTitle}>
                <Sparkles size={18} className={styles.highlightIcon} />
                Architectural Highlights & Engineering Impact:
              </h4>
              <ul className={styles.highlightsList}>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className={styles.bulletCheck} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Architecture Bar */}
          <div className={styles.architectureBar}>
            <span className={styles.archLabel}>
              <Boxes size={18} />
              Tech Stack:
            </span>
            <div className={styles.techTags}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.techTagPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: "vitalens",
      title: "VitaLens",
      status: "⚡ Under Updation",
      statusType: "updating",
      category: "AI & Healthcare",
      tagline: "Multimodal Clinical Diagnostics & Lab Biomarker Parsing Platform",
      description: "An intelligent clinical decision-support ecosystem engineered with FastAPI and PyTorch. Ingests unstructured lab reports (PDFs and image scans) via custom OCR pipelines, normalizes ambiguous biomarker measurements against medical ontologies, and runs neural network specialty classification to triage medical conditions.",
      image: vitalensImg,
      metrics: [
        { label: "Core AI", value: "PyTorch Specialty Classifier" },
        { label: "Backend Microservice", value: "FastAPI Async + Pydantic v2" },
        { label: "Dual Client Ecosystem", value: "Expo React Native + Vite React" },
        { label: "Data Persistence", value: "PostgreSQL Async + MongoDB" }
      ],
      highlights: [
        "Multimodal Report OCR & Ingestion: Normalizes messy blood tests and pathology sheets into standardized numerical biomarker indices.",
        "PyTorch Specialty Classification Engine: Neural network computing multi-class probability scores across hospital clinical specialties.",
        "Layman-Friendly AI Context Explainer: Translates clinical metrics into plain English for patients with curated doctor consultation questions.",
        "Dual Monorepo Architecture: Native patient mobile app (React Native / Expo SDK 51) + hospital operations portal (React 18 / Vite)."
      ],
      tech: ["Python", "FastAPI", "PyTorch", "React Native", "Expo SDK 51", "React 18", "TypeScript", "PostgreSQL", "MongoDB Atlas", "Docker"],
      link: null,
      github: "https://github.com/Uzair-11/vitalens"
    },
    {
      id: "axiomerp",
      title: "AxiomERP",
      status: "⚡ Under Updation",
      statusType: "updating",
      category: "Enterprise ERP",
      tagline: "Enterprise Purchasing, Multi-Tenant Inventory & 3-Way Match System",
      description: "An enterprise-grade procurement and supply chain management platform engineered for complex business purchasing workflows, automated inventory ledger transactions, and accounts payable validation.",
      visualType: "terminal",
      metrics: [
        { label: "Validation Engine", value: "Automated 3-Way Invoice Matching" },
        { label: "Database Schema", value: "13 Un-embedded Collections" },
        { label: "State Machine", value: "Multi-Revision PO Lifecycles" },
        { label: "Audit Ledger", value: "Immutable POSTED Transaction Logs" }
      ],
      highlights: [
        "Automated 3-Way Match Engine: Validates commercial Purchase Orders against warehouse Goods Receipts (GRN) and vendor invoices to eliminate billing mismatches.",
        "Purchase Order Lifecycle State Machine: Enforces rigid commercial state transitions (DRAFT ➔ SENT ➔ SUPPLIER_RESPONDED ➔ AWAITING_SHIPMENT ➔ GRN ➔ COMPLETED).",
        "Physical Receiving & Damaged Goods Ledger: Separates Good vs Defective stock with automated double-entry ledger transactions.",
        "Accounts Payable & Debit Notes: Complete payment voucher generation and return debit note workflows for supplier rejections."
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "PostgreSQL", "Lucide Icons"],
      link: null,
      github: "https://github.com/Uzair-11/AxiomERP"
    },
    {
      id: "training-center-manager",
      title: "Training Center Manager",
      status: "✨ Production Platform",
      statusType: "live",
      category: "Full-Stack Operations",
      tagline: "Multi-Branch Vocational Operations, Fee Relief Engine & Asset Ledger",
      description: "Production administration system built independently for an active NGO managing multi-branch vocational training centers, student lifecycles, staff hierarchy, automated fee relief billing cycles, and branch-level financial accounting.",
      visualType: "metrics",
      metrics: [
        { label: "Automated Testing", value: "104 Jest + 17 Playwright E2E" },
        { label: "Authorization", value: "4-Tier Scoped RBAC + IDOR Safe" },
        { label: "Financial Engine", value: "Automated Fee Relief & Subsidy" },
        { label: "Credential Studio", value: "Visual Canvas Certificate Editor" }
      ],
      highlights: [
        "4-Tier Scoped RBAC: Granular access control for Admin, Amir-e-Muqami (regional exec), Supervisor, and Teacher with branch-level IDOR security.",
        "Recurring Fee Engine: Monthly billing automation with Full Fee, Partial Relief, and 100% Waiver relief handling per student.",
        "Server-Enforced Attendance: Daily attendance tracking with holiday lockout, server-side date locks, and student leave workflows.",
        "Sewing Machine Asset Ledger: Equipment tracking with repair costs auto-linked to branch operating expenses.",
        "Visual Certificate Canvas Editor: Drag-and-drop editor for dynamically positioning student fields on certificate templates.",
        "100% Automated Testing: 104 backend Jest/Supertest tests and 17 frontend Playwright E2E browser tests passing in CI."
      ],
      tech: ["React 18", "Node.js", "Express", "PostgreSQL", "JWT", "Jest", "Supertest", "Playwright", "Vite"],
      link: "https://class-management-umber.vercel.app/",
      github: "https://github.com/Uzair-11/class_management"
    }
  ];

  const categories = ['All', 'AI & Healthcare', 'Enterprise ERP', 'Full-Stack Operations'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        
        <div className={styles.sectionHeader}>
          <div className={styles.headingBadge}>
            <span>Engineering Showcase</span>
          </div>
          <h2 className={styles.sectionHeading}>Featured Systems & Flagship Projects</h2>
          <p className={styles.sectionSub}>
            Real-world enterprise systems, applied AI architectures, and high-reliability full stack applications built with modern engineering standards.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.filterPills}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? `All Flagships (${projects.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.projectsContainer}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
