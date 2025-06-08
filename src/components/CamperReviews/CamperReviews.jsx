import PropTypes from "prop-types";
import ReviewItem from "../ReviewItem/ReviewItem";
import styles from "./CamperReviews.module.css";

const CamperReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No reviews yet. Be the first to review this camper!</p>
      </div>
    );
  }

  return (
    <div className={styles.reviews}>
      <ul className={styles.list}>
        {reviews.map((review, index) => (
          <li key={index}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

CamperReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
};

export default CamperReviews;
