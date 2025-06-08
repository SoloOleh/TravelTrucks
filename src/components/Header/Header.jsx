import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Icon from "../Icon/Icon";
import { ROUTES } from "../../utils/constants";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link to={ROUTES.HOME} className={styles.logo}>
            <Icon name="icon-logo" className={styles.logoIcon} />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
