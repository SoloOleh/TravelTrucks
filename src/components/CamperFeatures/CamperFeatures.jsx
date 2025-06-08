import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import {
  formatFeatureName,
  getFeatureIcon,
  capitalizeFirst,
  getFormLabel,
} from "../../utils/formatters";
import { FEATURES_LIST, DETAILS_LIST } from "../../utils/constants";
import styles from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper }) => {
  const getAvailableFeatures = () => {
    return FEATURES_LIST.filter((feature) => {
      const value = camper[feature];
      return value && value !== false;
    });
  };

  const getVehicleDetails = () => {
    return DETAILS_LIST.filter((detail) => camper[detail]).map((detail) => {
      let value = camper[detail];
      let label = capitalizeFirst(detail);

      if (detail === "form") {
        value = getFormLabel(value);
        label = "Form";
      } else if (
        detail === "length" ||
        detail === "width" ||
        detail === "height"
      ) {
        value = `${value} m`;
      } else if (detail === "tank") {
        value = `${value} l`;
      } else if (detail === "consumption") {
        value = `${value}/100km`;
      }

      return { label, value };
    });
  };

  const features = getAvailableFeatures();
  const details = getVehicleDetails();

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresGrid}>
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

      <div className={styles.vehicleDetailsSection}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <div className={styles.divider} />
        <dl className={styles.detailsList}>
          {details.map(({ label, value }) => (
            <div key={label} className={styles.detailRow}>
              <dt className={styles.detailLabel}>{label}</dt>
              <dd className={styles.detailValue}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

CamperFeatures.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default CamperFeatures;
