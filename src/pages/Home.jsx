import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import './Home.css';
import gsap from 'gsap';

const Home = () => {

  // Animation for intro text
  React.useEffect(() => {
    gsap.from('.intro-text', { duration: 1, opacity: 0, y: 50, stagger: 0.3 });
  }, []);

  return (
    <div className="home-container">
<section className="intro">
  <div className="intro-content">
    <div className="intro-text-container">
      <h1 className='intro-text'>Hi, I&apos;m Suyog Paudel</h1>
      <h2 className="intro-text">A Passionate Web Developer</h2>
      <p className="intro-text">I create dynamic and responsive web applications using the latest technologies and best practices.</p>
    </div>
    <div className="intro-image-container">
      <img className="intro-image" src="src/assets/shp.jpg" alt="Web Developer at work" />
    </div>
  </div>
</section>



      <section className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p>CSS3</p>
          </div>
          <div className="skill-item">
            <FaJs className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p>React.js</p>
          </div>
          <div className="skill-item">
            <SiNextdotjs className="skill-icon" />
            <p>Next.js</p>
          </div>
          <div className="skill-item">
            <SiExpress className="skill-icon" />
            <p>Express-Node.js</p>
          </div>
          <div className="skill-item">
            <SiMongodb className="skill-icon" />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <SiMysql className="skill-icon" />
            <p>MySQL</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <div className='about-content'> 
        <p>
          I am a dedicated web developer with experience in building full-stack applications. <br/> <br/>
          My expertise lies in creating intuitive and dynamic user interfaces, 
          backed by robust and scalable backend systems. <br/> <br/>
          With a strong foundation in both frontend and backend technologies, I strive to deliver seamless user experiences 
          through clean and efficient code.
        </p>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <p>Check out some of my recent work:</p>
        <div className="project-gallery">
          <img src="src/assets/project1.png" alt="Project 1" />
          <img src="src/assets/project2.png" alt="Project 2" />
          <img src="src/assets/project3.png" alt="Project 3" />
        </div>
      </section>
    </div>
  );
};

export default Home;
