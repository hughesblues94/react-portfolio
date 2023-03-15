import "./styles/ProjectCard.css";

const ProjectCard = ({ name, link }) => {
  return (
    <div className="card">
      <a href={link}>{name}</a>
    </div>
  );
};

export default ProjectCard;
