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
  const currentActiveFilters = useSelector(selectActiveFilters);
  const isFirstPageLoad = useRef(true);

  useEffect(() => {
    if (isFirstPageLoad.current) {
      isFirstPageLoad.current = false;

      const hasActiveFilters = Object.keys(currentActiveFilters).length > 0;

      dispatch(resetCampers());

      const filtersToApply = hasActiveFilters ? currentActiveFilters : {};
      dispatch(fetchCampers({ page: 1, filters: filtersToApply }));
    }
  }, []);

  const handleApplyFiltersAndSearch = (selectedFilters) => {
    dispatch(resetCampers());
    dispatch(fetchCampers({ page: 1, filters: selectedFilters }));
  };

  const handleLoadMoreCampers = (nextPageNumber) => {
    dispatch(
      fetchCampers({
        page: nextPageNumber,
        filters: currentActiveFilters,
        append: true,
      })
    );
  };

  return (
    <div className={styles.catalogPage}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <FilterPanel onApplyFilters={handleApplyFiltersAndSearch} />
          </aside>
          <main className={styles.main}>
            <CampersList onLoadMore={handleLoadMoreCampers} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
