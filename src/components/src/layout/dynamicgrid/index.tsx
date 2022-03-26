import * as React from 'react';

import { spacingMap, SpacingMap } from '../spacingMap';

type DynamicGridProps = {
  minWidth?: string;
  gutter?: SpacingMap;
  children: React.ReactNode;
};

const DynamicGrid = (props: DynamicGridProps) => {
  const { minWidth, gutter, children } = props;
  const divStyle = {
    display: 'grid',
    gap: gutter ? spacingMap[gutter] : spacingMap.lg,
    gridTemplateColumns: `repeat(auto-fit, minmax(${
      minWidth || '320px'
    }, 1fr))`,
  };
  return <div style={divStyle}>{children}</div>;
};

export default DynamicGrid;
