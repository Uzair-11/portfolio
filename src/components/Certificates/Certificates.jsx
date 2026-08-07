import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './Certificates.module.css';

const Certificates = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const certificatesList = [
    {
      title: "Blockchain Basics",
      issuer: "University at Buffalo",
      category: "Blockchain",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Blockchain%20Basics.pdf?updatedAt=1766241045037"
    },
    {
      title: "Build Your First Android App",
      issuer: "CentraleSupélec",
      category: "Mobile Dev",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Build%20Your%20First%20Android%20App.pdf?updatedAt=1766241044627"
    },
    {
      title: "C++ For C Programmers, Part A",
      issuer: "University of California, Santa Cruz",
      category: "Programming",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/C++%20For%20C%20Programmers,%20Part%20A.pdf?updatedAt=1766241044649"
    },
    {
      title: "Data Analysis with R Programming",
      issuer: "Google (Data Analytics Track)",
      category: "Data Science",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Data%20Analysis%20with%20R%20Programming.pdf?updatedAt=1766241044646"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google Career Certificates",
      category: "Cybersecurity",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Foundations%20of%20Cybersecurity.pdf?updatedAt=1766241044496"
    },
    {
      title: "Generative AI - Introduction and Applications",
      issuer: "IBM",
      category: "AI / ML",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Generative%20AI-%20Introduction%20and%20Applications.pdf?updatedAt=1768979931274"
    },
    {
      title: "Interactivity with JavaScript",
      issuer: "University of Michigan (Web Design Track)",
      category: "Web Dev",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Interactivity%20with%20JavaScript.pdf?updatedAt=1766241044909"
    },

    {
      title: "Introduction to C# Programming and Unity",
      issuer: "University of Colorado System",
      category: "Game / C#",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Introduction%20to%20C_%20Programming%20and%20Unity.pdf?updatedAt=1766241044695"
    },
    {
      title: "Introduction to Cybersecurity Essentials",
      issuer: "IBM",
      category: "Cybersecurity",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Introduction%20to%20Cybersecurity%20Essentials.pdf?updatedAt=1766241044611"
    },
    {
      title: "Introduction to Data Analytics",
      issuer: "IBM",
      category: "Data Science",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Introduction%20to%20Data%20Analytics.pdf?updatedAt=1768979931391"
    },
    {
      title: "Introduction to Relational Databases",
      issuer: "IBM",
      category: "Databases",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Introduction%20to%20Relational%20Databases.pdf?updatedAt=1766241044744"
    },
    {
      title: "Web and Mobile Testing with Selenium",
      issuer: "University of Minnesota",
      category: "Software QA",
      url: "https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Web%20and%20Mobile%20Testing%20with%20Selenium.pdf?updatedAt=1766241044751"
    }
  ];

  return (
    <section id="certificates" className={styles.certSection}>
      <div className="container">
        <h2 className={styles.sectionHeading}>Certifications & Badges</h2>
        <p className={styles.sectionSub}>Specialized certifications earned across Cloud, AI, Web, Security, and Engineering</p>

        <div ref={ref} className={`${styles.certGrid} ${isIntersecting ? styles.visible : ''}`}>
          {certificatesList.map((cert, index) => (
            <div key={index} className={`sketch-box ${styles.certCard}`}>
              <div className={styles.pin}></div>
              <div>
                <span className={styles.categoryBadge}>{cert.category}</span>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>📜 Offered by <strong>{cert.issuer}</strong></p>
              </div>
              {cert.url && (
                <div className={styles.certLinkWrapper}>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sketch-button"
                  >
                    View PDF 📄
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

