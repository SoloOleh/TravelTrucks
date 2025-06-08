import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CamperCard from "../CamperCard/CamperCard";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import {
  selectCampers,
  selectCampersLoading,
  selectHasMoreCampers,
  selectCampersPage,
} from "../../redux/campers/selectors";
import { incrementPage } from "../../redux/campers/campersSlice";
import { useDispatch } from "react-redux";
import styles from "./CampersList.module.css";

const CampersList = ({ onLoadMore }) => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const hasMore = useSelector(selectHasMoreCampers);
  const currentPage = useSelector(selectCampersPage);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    onLoadMore(currentPage + 1);
  };

  if (isLoading && campers.length === 0) {
    return <Loader />;
  }

  if (!isLoading && campers.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No campers found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.campersList}>
      <ul className={styles.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={styles.item}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className={styles.loadMore}>
          <Button
            onClick={handleLoadMore}
            variant="outline"
            size="large"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
};

CampersList.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default CampersList;
