import "./Bio.css";
import ProjectCard from "./ProjectCard";
const Bio = () => {
  return (
    <div className="container">
      <h1>
        Craig <br />
        Hughes
      </h1>
      <h2>Web Developer</h2>
      <p>
        Hello! I am a software developer who has recently finished the Command
        Shift bootcamp. I am currently open to work!
      </p>
      <hr></hr>
      <h1 id="projects" className="projects">
        Projects
      </h1>
      <h2>Here are some examples of my projects:</h2>
      <div className="project-cards">
        <ProjectCard
          name={"Movie Night"}
          link={"https://github.com/hughesblues94/movie-night"}
        />
        <ProjectCard
          name={"Weather App"}
          link={"https://github.com/hughesblues94/weather-app"}
        />
        <ProjectCard
          name={"Virtual Pet"}
          link={"https://github.com/hughesblues94/virtual-pet"}
        />
      </div>
      <hr></hr>

      <h1 id="skills">Skills</h1>

      <h2>Some technologies I have worked with:</h2>
      <div className="technologies">
        <p>Javascript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>React</p>
        <p>Express</p>
        <p>Docker</p>
      </div>
      <h1 id="contact">Contact</h1>
      <h2>Find me on socials:</h2>
    </div>
  );
};

export default Bio;
