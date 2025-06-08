import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { selectIsFavorite } from "../../redux/favorites/selectors";
import {
  formatPrice,
  formatLocation,
  formatFeatureName,
  getFeatureIcon,
} from "../../utils/formatters";
import { FEATURES_LIST } from "../../utils/constants";
import styles from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper.id));

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const getFeatures = () => {
    return FEATURES_LIST.filter((feature) => {
      const value = camper[feature];
      return value && value !== false;
    }).slice(0, 6);
  };

  const features = getFeatures();

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={camper.gallery?.[0]?.thumb || "/placeholder.jpg"}
          alt={camper.name}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{camper.name}</h3>
          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(camper.price)}</span>
            <button
              type="button"
              onClick={handleFavoriteClick}
              className={styles.favoriteBtn}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Icon
                name={isFavorite ? "icon-heart-filled" : "icon-heart"}
                size={24}
                className={styles.favoriteIcon}
              />
            </button>
          </div>
        </div>

        <div className={styles.meta}>
          <Rating
            rating={camper.rating}
            reviews={camper.reviews?.length || 0}
          />
          <div className={styles.location}>
            <Icon name="icon-location" size={16} />
            <span>{formatLocation(camper.location)}</span>
          </div>
        </div>

        <p className={styles.description}>
          {camper.description.length > 150
            ? `${camper.description.substring(0, 150)}...`
            : camper.description}
        </p>

        <div className={styles.features}>
          {features.map((feature) => {
            const icon = getFeatureIcon(feature);
            const value = camper[feature];
            const label = formatFeatureName(feature, value);

            return (
              <div key={feature} className={styles.feature}>
                <Icon name={icon} size={20} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>

        <Link
          to={`/catalog/${camper.id}`}
          className={styles.showMoreLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="medium">
            Show more
          </Button>
        </Link>
      </div>
    </article>
  );
};

CamperCard.propTypes = {
  camper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
        original: PropTypes.string,
      })
    ),
    reviews: PropTypes.array,
  }).isRequired,
};

export default CamperCard;
