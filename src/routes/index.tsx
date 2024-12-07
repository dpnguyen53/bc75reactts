// import AboutPage from "@/pages/HomeTemplate/AboutPage";
// import HomeTemplate from "@/pages/HomeTemplate";
// import HomePage from "@/pages/HomeTemplate/HomePage";
import { Route } from "react-router-dom";
import React, { lazy } from "react";

type TRoute = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  children?: TRoute[];
};

const routes: TRoute[] = [
  {
    path: "",
    element: lazy(() => import("@/pages/HomeTemplate")),
    children: [
      {
        path: "",
        element: lazy(() => import("@/pages/HomeTemplate/HomePage")),
      },
      {
        path: "about",
        element: lazy(() => import("@/pages/HomeTemplate/AboutPage")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
