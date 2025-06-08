import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./ReviewItem.module.css";

const ReviewItem = ({ review }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i < review.reviewer_rating ? "icon-star" : "icon-star-empty"}
          size={16}
          className={styles.star}
        />
      );
    }

    return stars;
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <article className={styles.review}>
      <div className={styles.header}>
        <div className={styles.avatar}>{getInitial(review.reviewer_name)}</div>
        <div className={styles.info}>
          <h4 className={styles.name}>{review.reviewer_name}</h4>
          <div className={styles.rating}>{renderStars()}</div>
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </article>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    reviewer_name: PropTypes.string.isRequired,
    reviewer_rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
