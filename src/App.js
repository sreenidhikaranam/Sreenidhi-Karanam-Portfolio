import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
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
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
              Data Analyst & Machine Learning Enthusiast
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
                Hello! I'm Sreenidhi Karanam, a passionate data analyst and machine learning enthusiast 
                with expertise in transforming raw data into meaningful insights. 
                I specialize in data visualization, statistical analysis, and building predictive models.
              </p>
              <p>
                My journey in data science started with curiosity about patterns in data and has evolved into a 
                deep passion for leveraging analytics to drive business decisions. I'm constantly 
                exploring new tools and techniques in the rapidly evolving field of data science.
              </p>
              <p>
                When I'm not analyzing data, you can find me exploring new machine learning algorithms, 
                working on personal data projects, or sharing insights with the 
                data science community.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <h3>🎯 Focus</h3>
                <p>Data Analysis & ML</p>
              </div>
              <div className="highlight-card">
                <h3>💡 Passion</h3>
                <p>Data-Driven Insights</p>
              </div>
              <div className="highlight-card">
                <h3>🌱 Growth</h3>
                <p>Continuous Learning</p>
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
                <h3>Higher Secondary Education</h3>
                <h4>Narayana Independent PU College</h4>
                <span className="timeline-date">2018 - 2020</span>
                <p>
                  Completed with good grades. 
                  Developed strong analytical and problem-solving skills.
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
                  <li>Artificial Intelligence</li>
                  <li>Database Management Systems</li>
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
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>ksreenidhi628@gmail.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 8088696513</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sreenidhi-k02" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/sreenidhi-karanam" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://x.com/sree_1907?s=08" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
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
          <p>&copy; 2024 Sreenidhi Karanam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
