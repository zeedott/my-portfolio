function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using React and Vite"
    },
    {
      title: "Todo App",
      description: "Task management application"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
            <div className="project-actions">
              <a className="project-link" href="#" aria-label={`View ${project.title}`}>
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;