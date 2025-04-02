/** @format */
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";

import Layout from "./layouts/Layout";
import GenerateAI from "./views/GenerateAI";

const Favoritespages = lazy(() => import("./views/FavoritesPage"));

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route
            path="/favoritos"
            element={
              <Suspense fallback="Cargando...">
                <Favoritespages />
              </Suspense>
            }
          />
          <Route path="/generate" element={<GenerateAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
