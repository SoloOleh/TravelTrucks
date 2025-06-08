import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { setLocation } from "../../redux/filters/filtersSlice";
import { selectLocation } from "../../redux/filters/selectors";
import styles from "./LocationFilter.module.css";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={styles.locationFilter}>
      <label htmlFor="location" className={styles.label}>
        Location
      </label>
      <div className={styles.inputWrapper}>
        <Icon name="icon-location" size={20} className={styles.icon} />
        <input
          id="location"
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="City, Country"
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
