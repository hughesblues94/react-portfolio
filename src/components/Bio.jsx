import "./Bio.css";
import Button from "./Button.jsx";

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
      <Button buttonName={"contact"}></Button>
    </div>
  );
};

export default Bio;
