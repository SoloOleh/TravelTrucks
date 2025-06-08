import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { setForm } from "../../redux/filters/filtersSlice";
import { selectForm } from "../../redux/filters/selectors";
import { VEHICLE_TYPES } from "../../utils/constants";
import styles from "./VehicleTypeFilter.module.css";

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();
  const selectedForm = useSelector(selectForm);

  const handleSelect = (value) => {
    dispatch(setForm(value === selectedForm ? "" : value));
  };

  return (
    <div className={styles.vehicleTypeFilter}>
      <h3 className={styles.subtitle}>Vehicle type</h3>
      <div className={styles.divider} />
      <div className={styles.grid}>
        {VEHICLE_TYPES.map(({ value, label, icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleSelect(value)}
            className={`${styles.option} ${
              selectedForm === value ? styles.active : ""
            }`}
            aria-pressed={selectedForm === value}
          >
            <Icon name={icon} size={32} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
