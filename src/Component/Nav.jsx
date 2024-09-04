import "./Nav.css";
import NavAvartar from "./NavAvartar";
import NavMessage from "./NavMessage";
import NavNotice from "./NavNotice";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessage />
        <NavAvartar />
      </ul>
    </nav>
  );
}

export default Nav;
