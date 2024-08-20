import './Projects.css';

const projects = [
  {
    title: 'Project 1 (Loksewahub.com)',
    description: 'A dynamic web application built with React and Node.js.',
    technologies: ['React', 'Node.js', 'Express'],
    image: 'src/assets/project1.png',
    link: 'https://www.loksewahub.com/'
  },
  {
    title: 'Project 2 (CMS Project)',
    description: 'A responsive CMS using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: 'src/assets/project2.png',
    link: 'https://github.com/shpanthi09/CMS-project'
  },
  // Add more projects as needed

  {
    title: 'Project 3(Todo App)',
    description: 'A responsive Todo using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: 'src/assets/project3.png',
    link: 'https://github.com/shpanthi09/todo-app-react'
  },
  // Add more projects as needed

  {
    title: 'Project 4 (Blog website)',
    description: 'A responsive Blog website using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: 'src/assets/project4.png',
    link: 'https://github.com/shpanthi09/blog-website'
  },

  {
    title: 'Project 5(The Himalayan Times)',
    description: 'The Himalayan Times website clone using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: 'src/assets/project5.png',
    link: 'https://github.com/shpanthi09/himalayan-times'
  },
  // Add more projects as needed

  {
    title: 'Project 6 (Login Authorization)',
    description: 'A responsive Blog website using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: 'src/assets/project6.png',
    link: 'https://github.com/shpanthi09/login-authorization-react'
  },

  // Add more projects as needed
];

function Projects() {
  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span className="project-tech-item" key={idx}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
