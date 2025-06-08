import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";
import { ROUTES } from "../../utils/constants";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CATALOG}
          element={
            <Suspense fallback={<Loader />}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CAMPER}
          element={
            <Suspense fallback={<Loader />}>
              <CamperPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
