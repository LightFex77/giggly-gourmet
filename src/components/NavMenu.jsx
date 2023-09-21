import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const NavMenu = () => {
  return (
    <nav className="nav-menu-container">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/menus"
          >
            Menus
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/nosotros"
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/contacto"
          >
            Contacto
          </NavLink>
        </li>
        <li><a href="#"><Icon icon="ic:baseline-whatsapp" height="3rem" color="#ffff"/></a></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
