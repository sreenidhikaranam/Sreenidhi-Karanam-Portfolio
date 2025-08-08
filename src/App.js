import React, { useState, useEffect } from 'react';
import './App.css';

// Social Media Icon Components
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Scroll listener to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if user just clicked navigation
      if (isNavigating) return;
      
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'contact'];
      // Use responsive offset - mobile needs more space
      const navbarOffset = window.innerWidth <= 768 ? 120 : 100;
      const scrollPosition = window.scrollY + navbarOffset;

      // Check if we're at the top (home section)
      if (window.scrollY < navbarOffset) {
        setActiveSection('home');
        return;
      }

      // Check each section
      for (const sectionId of sections.slice(1)) { // Skip 'home' as it's handled above
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    setIsNavigating(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navbar (mobile needs more space)
      const navbarHeight = window.innerWidth <= 768 ? 120 : 100;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Re-enable scroll listener after navigation animation
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const skills = [
    { name: 'MS Excel', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Power BI', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Tableau', level: 82 },
    { name: 'MLP', level: 75 },
    { name: 'Deep Learning', level: 78 },
    { name: 'AWS', level: 70 }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Sreenidhi Karanam</h2>
          <div className="nav-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('home');
                  setIsMobileMenuOpen(false);
                  setIsNavigating(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    setIsNavigating(false);
                  }, 1000);
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
                <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sreenidhi Karanam</span>
            </h1>
            <p className="hero-subtitle">
              Data Analyst
            </p>
            <p className="hero-description">
              Passionate about transforming data into actionable insights and 
              building intelligent solutions that drive business growth.
            </p>
          </div>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => {
                setActiveSection('contact');
                scrollToSection('contact');
              }}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setActiveSection('about');
                scrollToSection('about');
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Sreenidhi Karanam, a dedicated data analyst with a strong foundation in 
                statistical analysis, data visualization, and business intelligence. 
                I specialize in transforming complex datasets into actionable insights that drive informed business decisions.
              </p>
              <p>
                My expertise lies in using tools like Excel, SQL, Power BI, and Python to extract, 
                clean, and analyze data from various sources. I have a keen eye for identifying trends, 
                patterns, and anomalies that help organizations optimize their operations and strategy.
              </p>
              <p>
                Currently working as a Software Engineer Trainee at Cognizant in the Cyber Security TVM team, 
                I combine my analytical skills with technical expertise to assess vulnerabilities and 
                strengthen security frameworks. I'm passionate about continuous learning and staying 
                updated with the latest data analysis techniques and tools.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <h3>🎯 Focus</h3>
                <p>Data Analysis & BI</p>
              </div>
              <div className="highlight-card">
                <h3>💡 Expertise</h3>
                <p>Statistical Analysis</p>
              </div>
              <div className="highlight-card">
                <h3>🔍 Specialty</h3>
                <p>Data Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Bachelor of Engineering in Electronics and Communication Engineering</h3>
                <h4>Rao Bahadur Y Mahabaleswarappa Engineering College</h4>
                <span className="timeline-date">2020 - 2024</span>
                <p>
                  Focused on software engineering, algorithms, and data structures. 
                  Maintained excellent academic performance while actively participating 
                  in competitions and tech events.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Certifications & Courses</h3>
                <h4>Various Platforms</h4>
                <span className="timeline-date">Ongoing</span>
                <ul>
                  <li>Data Analyst</li>
                  <li>AWS Cloud Essentials</li>
                  <li>Cyber Security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Software Engineer Trainee</h3>
                <h4>Cognizant</h4>
                <span className="timeline-date">Jan 2025 - Present</span>
                <p>
                  Working in Cyber Security Threat and Vulnerability Management (TVM) team, 
                  focusing on identifying, assessing, and mitigating security threats across 
                  enterprise infrastructure. Completed comprehensive training program covering 
                  system administration, networking, and database management fundamentals.
                </p>
                <ul>
                  <li>Conducting vulnerability assessments and penetration testing</li>
                  <li>Analyzing security threats and developing mitigation strategies</li>
                  <li>Using security tools like Nessus, Qualys, and vulnerability scanners</li>
                  <li>Creating security reports and recommendations for client remediation</li>
                  <li>Managing Windows Server 2022 and Linux-based environments, ensuring optimal performance and security</li>
                  <li>Configuring and troubleshooting networking components, including routers, switches, firewalls, and VPNs</li>
                  <li>Administering MSSQL and Oracle databases, optimizing performance, and ensuring data security</li>
                  <li>Working with Hyper-V and VMware for virtual machine deployment and maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-content">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Data Analysis & Visualization</h3>
                <div className="category-skills">
                  <span className="skill-tag">MS Excel</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">Data Modeling</span>
                  <span className="skill-tag">Statistical Analysis</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Machine Learning & AI</h3>
                <div className="category-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Deep Learning</span>
                  <span className="skill-tag">MLP</span>
                  <span className="skill-tag">Neural Networks</span>
                  <span className="skill-tag">TensorFlow</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Cloud & Databases</h3>
                <div className="category-skills">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Data Warehousing</span>
                  <span className="skill-tag">ETL</span>
                  <span className="skill-tag">Cloud Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
              <div className="contact-methods">
                <a href="mailto:ksreenidhi628@gmail.com" className="contact-method-link">
                  <div className="contact-method">
                    <div className="contact-icon">📧</div>
                    <div>
                      <h4>Email</h4>
                      <p>ksreenidhi628@gmail.com</p>
                    </div>
                  </div>
                </a>
                <a href="tel:+918088696513" className="contact-method-link">
                  <div className="contact-method">
                    <div className="contact-icon">📱</div>
                    <div>
                      <h4>Phone</h4>
                      <p>+91 8088696513</p>
                    </div>
                  </div>
                </a>
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sreenidhi-k02" className="social-link" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/sreenidhi-karanam" className="social-link" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sreenidhi Karanam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
