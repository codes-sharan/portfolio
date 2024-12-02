import "./Projects.css";

const projects = [
  {
    title: "Loksewahub.com",
    description: "A dynamic web application built with React and Node.js.",
    technologies: ["React", "Node.js", "Express"],
    image: "../loksewahub.png",
    link: "https://www.loksewahub.com/",
  },
  {
    title: "Tweets Project",
    description: "Tweets project with registration, signin, signup, profile",
    technologies: ["Django", "Sqlite"],
    image: "tweetly.png",
    link: "https://github.com/codes-sharan/django-tweet-project",
  },

  {
    title: "Contacts Manager",
    description: "Adding contacts with phone number, address, deleting...",
    technologies: ["React.js"],
    image: "contacts.png",
    link: "https://github.com/codes-sharan/contacts-manager",
  },

  {
    title: "Todo App",
    description: "A responsive Todo app using React.js",
    technologies: ["React.js", "CSS"],
    image: "todo.png",
    link: "https://github.com/shpanthi09/todo-app-react",
  },

  {
    title: "The Himalayan Times(Clone)",
    description: "Himalayan times frontend using React.js",
    technologies: ["React.js", "CSS"],
    image: "../himalayantimes.png",
    link: "https://github.com/shpanthi09/himalayan-times",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h3 className="projects-title">
        {" "}
        <i> Please visit github for source code ...</i>
      </h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span className="project-tech-item" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
