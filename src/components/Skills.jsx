function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            <span className="skill-dot" aria-hidden="true">●</span>
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;