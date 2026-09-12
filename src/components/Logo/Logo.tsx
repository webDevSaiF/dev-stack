import logo from "../../assets/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div>
      <a href="#">
        <img src={logo} alt="Dev Stack Logo" className="logo" />
      </a>
    </div>
  );
}
