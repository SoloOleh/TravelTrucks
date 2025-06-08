import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import Button from "../Button/Button";
import { selectActiveFilters } from "../../redux/filters/selectors";
import styles from "./FilterPanel.module.css";

const FilterPanel = ({ onApplyFilters }) => {
  const filters = useSelector(selectActiveFilters);

  const handleSearch = () => {
    onApplyFilters(filters);
  };

  return (
    <aside className={styles.filterPanel}>
      <LocationFilter />
      <EquipmentFilter />
      <VehicleTypeFilter />

      <Button onClick={handleSearch} variant="primary" size="large">
        Search
      </Button>
    </aside>
  );
};

FilterPanel.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterPanel;
