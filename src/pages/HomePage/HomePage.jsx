import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import { ROUTES } from "../../utils/constants";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNow = () => {
    navigate(ROUTES.CATALOG);
  };

  return (
    <div className={styles.homePage}>
      <Hero onViewNow={handleViewNow} />
    </div>
  );
};

export default HomePage;
