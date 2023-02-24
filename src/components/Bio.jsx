import "./Bio.css";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { falinkedin } from "@fortawesome/free-solid-svg-icons";

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
      <h1 id="projects" className="projects">
        Projects
      </h1>
      <h2>Here are some examples of some projects:</h2>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <p>example</p>
      <h1 id="contact">Contact</h1>
      <h2>Find me on socials:</h2>
      <FontAwesomeIcon icon={falinkedin} />
    </div>
  );
};

export default Bio;
