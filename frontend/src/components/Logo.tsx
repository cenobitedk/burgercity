import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <>
      <h1>
        <Link to="/">
          <img src={logo} alt="BurgerCity Logo" className="header-logo" />
        </Link>
        <span className="sr-only">BurgerCity</span>
      </h1>
    </>
  );
}
