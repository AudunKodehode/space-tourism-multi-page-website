import { Link, useLocation } from "react-router-dom";
import STARLOGO from "/src/assets/shared/logo.svg";
export default function Navbar() {
  const location = useLocation().pathname;
  return (
    <nav className="navBar">
      <div className="navLogo">
        <img src={STARLOGO} alt="" />
        <div className="divider"></div>
      </div>
      <div className="links">
        <Link to="/" className={location === "/" ? "active" : ""}>
          <span>00 </span> HOME
        </Link>
        <Link
          to="/destination"
          className={location === "/destination" ? "active" : ""}
        >
          <span>01 </span> DESTINATION
        </Link>
        <Link to="/crew" className={location === "/crew" ? "active" : ""}>
          <span>02 </span> CREW
        </Link>
        <Link
          to="/technology"
          className={location === "/technology" ? "active" : ""}
        >
          <span>03 </span> TECHNOLOGY
        </Link>
      </div>
    </nav>
  );
}
