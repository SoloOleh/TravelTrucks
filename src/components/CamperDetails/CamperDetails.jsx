import PropTypes from "prop-types";
import CamperGallery from "../CamperGallery/CamperGallery";
import CamperInfo from "../CamperInfo/CamperInfo";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./CamperDetails.module.css";

const CamperDetails = ({ camper, activeTab, onTabChange }) => {
  const handleReviewsClick = () => {
    onTabChange("reviews");
    // Прокрутка до табів
    setTimeout(() => {
      const tabsElement = document.querySelector(`.${styles.tabs}`);
      if (tabsElement) {
        tabsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className={styles.details}>
      <CamperInfo camper={camper} onReviewsClick={handleReviewsClick} />

      <CamperGallery gallery={camper.gallery} name={camper.name} />

      <p className={styles.description}>{camper.description}</p>

      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === "features" ? styles.active : ""
          }`}
          onClick={() => onTabChange("features")}
        >
          Features
        </button>
        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === "reviews" ? styles.active : ""
          }`}
          onClick={() => onTabChange("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.tabContent}>
          {activeTab === "features" ? (
            <CamperFeatures camper={camper} />
          ) : (
            <CamperReviews reviews={camper.reviews || []} />
          )}
        </div>

        <div className={styles.sidebar}>
          <BookingForm camperName={camper.name} camperId={camper.id} />
        </div>
      </div>
    </div>
  );
};

CamperDetails.propTypes = {
  camper: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default CamperDetails;
