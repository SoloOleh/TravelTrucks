import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = ({ onViewCatalogClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Button onClick={onViewCatalogClick} size="large">
            View Now
          </Button>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onViewCatalogClick: PropTypes.func.isRequired,
};

export default Hero;
