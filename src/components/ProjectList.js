const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem key={project.id} technologies={project.technologies} />
      ))}
    </div>
  );
};

