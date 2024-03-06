const ProjectItem = ({ technologies }) => {
  return (
    <div>
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
};



