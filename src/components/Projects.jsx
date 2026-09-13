function Projects() {
  const projects = [
    {
      title: "My Portfolio",
      description: "Explore Arif's portfolio featuring React, React Native, JavaScript, and MERN stack projects. Open to frontend and React development opportunities."
    },
    {
      title: "Movie App",
      description: "A simple movie browsing application, where you can search for movies and view their details"
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
              <a className="project-link" href="https://github.com/zeedott/cinevault" aria-label={`View ${project.title}`}>
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