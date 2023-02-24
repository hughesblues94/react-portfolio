import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="name">
          Craig <br />
          Hughes
        </li>
        <btn className="link cv">Download CV</btn>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Portfolio</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
