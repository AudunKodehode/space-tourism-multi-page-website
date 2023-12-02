import { Link, useLocation } from "react-router-dom";
import STARLOGO from "/src/assets/shared/logo.svg";
export default function Navbar() {

    const location = useLocation().pathname;
    console.log(location)
  return (
    <nav className="navBar">

<div className="navLogo">
<img src={STARLOGO} alt="" />
<div className="divider"></div>
</div>
        <div className="links">
      <Link to="/"className={location === "/" ? "active" : ""}><span>00</span> Home</Link>
      <Link to="/destination" className={location === "/destination" ? "active" : ""}><span>01</span> Destination</Link>
      <Link to="/crew" className={location === "/crew" ? "active" : ""}><span>02</span> Crew</Link>
      <Link to="/technology" className={location === "/technology" ? "active" : ""}><span>03</span> Technology</Link>
      </div>
    </nav>
  );
}
