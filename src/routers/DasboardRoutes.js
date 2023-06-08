import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import HomeBasquetbolPage from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

export default function DasboardRoutes() {
  return (
    <React.Fragment>
      {/* <Navigation /> */}
      <div>
        <Routes>
          <Route path="/home" element={HomePage} />
          <Route path="/home/Basquetbol" element={HomeBasquetbolPage} />
          <Route element={NotFound} />
        </Routes>
      </div>
    </React.Fragment>
  );
}
