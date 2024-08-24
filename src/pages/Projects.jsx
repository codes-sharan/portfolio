import './Projects.css';

const projects = [
  {
    title: 'Loksewahub.com',
    description: 'A dynamic web application built with React and Node.js.',
    technologies: ['React', 'Node.js', 'Express'],
    image: '../loksewahub.png',
    link: 'https://www.loksewahub.com/'
  },
  {
    title: 'CMS Project',
    description: 'A responsive CMS using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: '../cms.png',
    link: 'https://github.com/shpanthi09/CMS-project'
  },
  // Add more projects as needed

  {
    title: 'Todo App',
    description: 'A responsive Todo app using React.js',
    technologies: ['React.js', 'CSS'],
    image: '../todo.png',
    link: 'https://github.com/shpanthi09/todo-app-react'
  },
  // Add more projects as needed

  {
    title: 'Blog Website',
    description: 'A responsive Blog website using Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: '../blog.png',
    link: 'https://github.com/shpanthi09/blog-website'
  },

  {
    title: 'The Himalayan Times(Clone)',
    description: 'The Himalayan Times website clone using React.js',
    technologies: ['React.js', 'CSS'],
    image: '../himalayantimes.png',
    link: 'https://github.com/shpanthi09/himalayan-times'
  },
  // Add more projects as needed

  {
    title: 'Login Authorization',
    description: 'Login Authorization in Next.js web app with MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'CSS'],
    image: '../loginauthorization.png',
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
