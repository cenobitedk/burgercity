import logo from "../assets/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <>
      <h1>
        <img src={logo} alt="BurgerCity Logo" className="header-logo" />
        <span className="sr-only">BurgerCity</span>
      </h1>
    </>
  );
}
