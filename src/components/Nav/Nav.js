import Logo from "../../assets/Logo.svg";
import Button from "../UIElements/Buttons/Button";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <a href="#main">
          <img
            width="104"
            height="26"
            src={Logo}
            alt="TESTTASK"
            className="logo"
          />
        </a>
        <div className="nav-buttons">
          <Button text="Users" />
          <Button text="Sign Up" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
