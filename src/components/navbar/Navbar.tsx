import "./Navbar.css";
import Logo from "../../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={Logo} />
    </nav>
  );
}
