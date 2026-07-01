import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
  const { id } = useParams();
  
  // This would ideally be fetched from a data file based on the ID.
  const projectName = id === 'screenpass' ? 'ScreenPass' : id === 'axiomerp' ? 'AxiomERP' : id;

  return (
    <>
      <Navbar />
      <main className={styles.caseStudyMain}>
        <div className="container">
          <div className={styles.backLink}>
            <Link to="/"><ArrowLeft size={18} /> Back</Link>
          </div>
          
          <header className={styles.header}>
            <h1 className={styles.title}>{projectName}</h1>
            <div className={styles.meta}>
              <div className={styles.links}>
                <a href="#" className={styles.iconLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Source
                </a>
                <a href="#" className={styles.iconLink}><ExternalLink size={18} /> Live</a>
              </div>
            </div>
          </header>

          <article className={styles.documentation}>
            <div className={styles.imagePlaceholder}>
              Screenshot / Architecture Diagram
            </div>

            <section>
              <h2>Overview</h2>
              <p>
                A high-level summary of the project, why it was built, and the primary problem it solves. Keep this concise and engineering-focused.
              </p>
            </section>

            <section>
              <h2>The Problem</h2>
              <p>
                Describe the technical or business problem. What were the pain points? Why was this system necessary?
              </p>
            </section>

            <section>
              <h2>The Solution</h2>
              <p>
                How did the system solve the problem? Highlight the core workflows and primary features.
              </p>
            </section>

            <section>
              <h2>Architecture & Tech Stack</h2>
              <p>
                Explain the system architecture. Why did you choose specific technologies?
              </p>
              <ul>
                <li><strong>Frontend:</strong> React, Vite</li>
                <li><strong>Backend:</strong> Node.js / NestJS</li>
                <li><strong>Database:</strong> PostgreSQL / MongoDB</li>
              </ul>
            </section>

            <section>
              <h2>Database Design</h2>
              <p>
                Discuss schema design, relationships, and how you handled data consistency.
              </p>
            </section>

            <section>
              <h2>Authentication & Security</h2>
              <p>
                Explain how users are authenticated and authorized (e.g., JWT, Role-Based Access Control).
              </p>
            </section>

            <section>
              <h2>Key Challenges Solved</h2>
              <p>
                Highlight specific technical hurdles you overcame during development (e.g., handling concurrent transactions, designing multi-tenant isolation).
              </p>
            </section>

            <section>
              <h2>Lessons Learned</h2>
              <p>
                What would you do differently next time? What did this project teach you about system design?
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
