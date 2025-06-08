import PropTypes from "prop-types";
import icons from "../../assets/icons.svg";
import styles from "./Icon.module.css";

const Icon = ({ name, className = "", size = 24, ...props }) => {
  return (
    <svg
      className={`${styles.icon} ${className}`}
      width={size}
      height={size}
      {...props}
    >
      <use href={`${icons}#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
