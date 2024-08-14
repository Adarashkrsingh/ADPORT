import React, { useState } from 'react';

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: '#000', // Black background for the whole page
      color: '#fff', // White text
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #ff6f61, #ffcc00)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ margin: '0', color: '#fff' }}>Adarash Kumar Singh</h1>
      </header>

      <section>
        <h2 
          onClick={() => toggleSection('skills')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#ff6f61',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Skills
        </h2>
        {openSection === 'skills' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            textAlign: 'center',
            margin: '10px 0'
          }}>
            <li style={{ backgroundColor: '#ffeaa7', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>JAVA</li>
            <li style={{ backgroundColor: '#fffa65', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>C++</li>
            <li style={{ backgroundColor: '#f6e58d', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Python</li>
            <li style={{ backgroundColor: '#eccc68', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Node.js</li>
            <li style={{ backgroundColor: '#f9ca24', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>JavaScript</li>
          </ul>
        )}
      </section>

      <section>
        <h2 
          onClick={() => toggleSection('education')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#7f8c8d',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Education
        </h2>
        {openSection === 'education' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '10px 0'
          }}>
            <li style={{ backgroundColor: '#dfe6e9', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <strong>Chitkara University</strong> - B.E. in Computer Science Engineering, CGPA: 7.99
            </li>
            <li style={{ backgroundColor: '#dfe6e9', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <strong>B.K. Bajaria School</strong> - 12th, Percentage: 81.4
            </li>
            <li style={{ backgroundColor: '#dfe6e9', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <strong>Meghalaya Police Public School</strong> - 10th, Percentage: 74.8
            </li>
          </ul>
        )}
      </section>

      <section>
        <h2 
          onClick={() => toggleSection('experience')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#6ab04c',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Experience
        </h2>
        {openSection === 'experience' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '10px 0'
          }}>
            <li style={{ backgroundColor: '#badc58', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <strong>Pregrad</strong> - Campus Outreach Intern
            </li>
          </ul>
        )}
      </section>

      <section>
        <h2 
          onClick={() => toggleSection('hobbies')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#ff6f61',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Hobbies and Interests
        </h2>
        {openSection === 'hobbies' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '10px 0',
            textAlign: 'center'
          }}>
            <li style={{ backgroundColor: '#ffeaa7', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Skating</li>
            <li style={{ backgroundColor: '#fffa65', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Basketball</li>
            <li style={{ backgroundColor: '#f6e58d', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Cooking</li>
            <li style={{ backgroundColor: '#eccc68', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Reading</li>
            <li style={{ backgroundColor: '#f9ca24', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Travelling</li>
          </ul>
        )}
      </section>

      <section>
        <h2 
          onClick={() => toggleSection('languages')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#7f8c8d',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Languages
        </h2>
        {openSection === 'languages' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '10px 0'
          }}>
            <li style={{ backgroundColor: '#dfe6e9', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <strong>English</strong> - C1 (Advanced)
            </li>
            <li style={{ backgroundColor: '#dfe6e9', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <strong>Hindi</strong> - C1 (Advanced)
            </li>
          </ul>
        )}
      </section>

      <section>
        <h2 
          onClick={() => toggleSection('projects')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#6ab04c',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Projects
        </h2>
        {openSection === 'projects' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '10px 0'
          }}>
            <li style={{ backgroundColor: '#badc58', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <a href="https://github.com/Adarashkrsingh/billit.git" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>Billit (ONGOING)</a>
            </li>
            <li style={{ backgroundColor: '#badc58', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <a href="https://github.com/Adarashkrsingh/BLOGWEB.git" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>BLOGWEB</a>
            </li>
            <li style={{ backgroundColor: '#badc58', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <a href="https://github.com/Adarashkrsingh/loginpage.git" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>Login Page</a>
            </li>
          </ul>
        )}
      </section>

      <section>
        <h2 
          onClick={() => toggleSection('certifications')} 
          style={{
            cursor: 'pointer',
            backgroundColor: '#ff6f61',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          Certifications
        </h2>
        {openSection === 'certifications' && (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '10px 0'
          }}>
            <li style={{ backgroundColor: '#ffeaa7', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <a href="https://coursera.org/verify/specialization/98P2J539VBUU" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>Coursera Specialization</a>
            </li>
            <li style={{ backgroundColor: '#ffeaa7', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>
              <a href="https://www.coursera.org/account/accomplishments/certificate/924EJMQ2WEVK" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>Certificate</a>
            </li>
            <li style={{ backgroundColor: '#ffeaa7', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Cybersecurity Essentials</li>
            <li style={{ backgroundColor: '#ffeaa7', color: '#333', borderRadius: '5px', margin: '5px 0', padding: '10px' }}>Introduction to Packet Tracer</li>
          </ul>
        )}
      </section>
    </div>
  );
};

export default About;
