import { Routes, Route } from "react-router-dom";

import { customRoute } from "./customRoutes";

const CustomRoutes = () => {
  return (
    <Routes>
      {customRoute.map((route) => {
        return (
          <Route
            name={route.name}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
            key={route.key}
          />
        );
      })}
    </Routes>
  );
};

export default CustomRoutes;
