import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import Loader from "../../components/Loader/Loader";
import { fetchCamperById } from "../../redux/campers/operations";
import {
  selectCurrentCamper,
  selectCampersLoading,
} from "../../redux/campers/selectors";
import styles from "./CamperPage.module.css";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectCampersLoading);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading || !camper) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.camperPage}>
      <div className={styles.container}>
        <CamperDetails
          camper={camper}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default CamperPage;
