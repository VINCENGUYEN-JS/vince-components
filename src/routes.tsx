import * as React from "react";
import type { RouteObject } from "react-router-dom";

import {
  ButtonExample,
  DividerExample,
  GridExample,
  LayoutExample,
  MenuExample,
  InputExample,
  OverviewExample,
  ResultExample,
} from "./pages";

export interface CustomRouteObject extends RouteObject {
  key: string;
}

const routes: CustomRouteObject[] = [
  {
    key: "overview",
    path: "/overview",
    element: <OverviewExample />,
  },
  {
    key: "button",
    path: "/button",
    element: <ButtonExample />,
  },
  {
    key: "divider",
    path: "/divider",
    element: <DividerExample />,
  },
  {
    key: "grid",
    path: "/grid",
    element: <GridExample />,
  },
  {
    key: "layout",
    path: "/layout",
    element: <LayoutExample />,
  },
  {
    key: "menu",
    path: "/menu",
    element: <MenuExample />,
  },
  {
    key: "input",
    path: "/input",
    element: <InputExample />,
  },
  {
    key: "result",
    path: "/result",
    element: <ResultExample />,
  },
];

export default routes;