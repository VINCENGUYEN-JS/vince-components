import * as React from 'react';
import type { RouteObject } from 'react-router-dom';

import {
  AlignExample,
  ButtonExample,
  DividerExample,
  GridExample,
  LayoutExample,
  MenuExample,
  InputExample,
  OverviewExample,
  ResultExample,
  CardExample,
  TagExample,
  SpaceExample,
  ModalExample,
  SplitExample,
  ColumnsExample,
} from './pages';

export interface CustomRouteObject extends RouteObject {
  key: string;
}

const routes: CustomRouteObject[] = [
  {
    key: 'overview',
    path: '/overview',
    element: <OverviewExample />,
  },
  {
    key: 'card',
    path: '/card',
    element: <CardExample />,
  },
  {
    key: 'button',
    path: '/button',
    element: <ButtonExample />,
  },
  {
    key: 'divider',
    path: '/divider',
    element: <DividerExample />,
  },
  {
    key: 'grid',
    path: '/grid',
    element: <GridExample />,
  },
  {
    key: 'layout',
    path: '/layout',
    element: <LayoutExample />,
  },
  {
    key: 'tag',
    path: '/tag',
    element: <TagExample />,
  },
  {
    key: 'menu',
    path: '/menu',
    element: <MenuExample />,
  },
  {
    key: 'input',
    path: '/input',
    element: <InputExample />,
  },
  {
    key: 'result',
    path: '/result',
    element: <ResultExample />,
  },
  {
    key: 'space',
    path: '/space',
    element: <SpaceExample />,
  },
  {
    key: 'modal',
    path: '/modal',
    element: <ModalExample />,
  },
  {
    key: 'align',
    path: '/align',
    element: <AlignExample />,
  },
  {
    key: 'split',
    path: '/split',
    element: <SplitExample />,
  },
  {
    key: 'columns',
    path: '/columns',
    element: <ColumnsExample />,
  },
];

export default routes.sort((a, b) => a.key.localeCompare(b.key));
