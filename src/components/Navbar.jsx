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
        <li className="link cv">
          <a href="#">Download CV</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#projects">Portfolio</a>
        </li>
        <li className="link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
