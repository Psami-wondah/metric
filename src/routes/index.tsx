import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import { paths } from "../utils/constants";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={paths.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
