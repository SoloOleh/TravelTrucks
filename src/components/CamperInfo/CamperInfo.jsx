import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import Rating from "../Rating/Rating";
import { formatPrice, formatLocation } from "../../utils/formatters";
import styles from "./CamperInfo.module.css";

const CamperInfo = ({ camper, onReviewsClick }) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{camper.name}</h1>

      <div className={styles.meta}>
        <Rating
          rating={camper.rating}
          reviews={camper.reviews?.length || 0}
          onClick={onReviewsClick}
        />
        <div className={styles.location}>
          <Icon name="icon-location" size={16} />
          <span>{formatLocation(camper.location)}</span>
        </div>
      </div>

      <p className={styles.price}>{formatPrice(camper.price)}</p>
    </div>
  );
};

CamperInfo.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    reviews: PropTypes.array,
  }).isRequired,
  onReviewsClick: PropTypes.func,
};

export default CamperInfo;
