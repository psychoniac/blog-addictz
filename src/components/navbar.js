import * as React from "react";
import { Link } from "gatsby";
import { contener, navbarItem, navbarText } from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={contener}>
        <li className={navbarItem}>
          <Link to="/" className={navbarText}>
            Homepage
          </Link>
        </li>

        <li className={navbarItem}>
          <Link to="/blog" className={navbarText}>
            Mes posts
          </Link>
        </li>

        <li className={navbarItem}>
          <Link to="/about" className={navbarText}>
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
