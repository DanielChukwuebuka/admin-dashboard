function NavItem({ nav }) {
  // console.log(nav);
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href={nav.link}>
        <i className={nav.icon}></i>
        <span>{nav.name}</span>
      </a>
    </li>
  );
}

export default NavItem;
