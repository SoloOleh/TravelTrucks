import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CampersList from "../../components/CampersList/CampersList";
import { fetchCampers } from "../../redux/campers/operations";
import { resetCampers } from "../../redux/campers/campersSlice";
import { selectActiveFilters } from "../../redux/filters/selectors";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(selectActiveFilters);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (Object.keys(activeFilters).length > 0) {
        dispatch(resetCampers());
        dispatch(fetchCampers({ page: 1, filters: activeFilters }));
      } else {
        dispatch(resetCampers());
        dispatch(fetchCampers({ page: 1, filters: {} }));
      }
    }
  }, []);

  const handleApplyFilters = (filters) => {
    dispatch(resetCampers());
    dispatch(fetchCampers({ page: 1, filters }));
  };

  const handleLoadMore = (page) => {
    dispatch(fetchCampers({ page, filters: activeFilters, append: true }));
  };

  return (
    <div className={styles.catalogPage}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <FilterPanel onApplyFilters={handleApplyFilters} />
          </aside>
          <main className={styles.main}>
            <CampersList onLoadMore={handleLoadMore} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
