import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to={ROUTES.HOME}
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.CATALOG}
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
