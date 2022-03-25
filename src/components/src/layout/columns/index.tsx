import * as React from 'react';

import { SpacingMap, spacingMap } from '../spacingMap';

type ColumnsProps = {
  gutter?: SpacingMap;
  columns?: number;
  children: React.ReactNode;
};

const Columns = (props: ColumnsProps) => {
  const { gutter, columns, children } = props;
  const divStyle = {
    display: 'grid',
    gap: gutter ? spacingMap[gutter] : spacingMap.lg,
    gridTemplateColumns: `repeat(${columns ?? 1}, 1fr)`,
  };
  return <div style={divStyle}>{children}</div>;
};

type ColumnProp = {
  span?: number;
  children: React.ReactNode;
};

const Column = (props: ColumnProp) => {
  const { span, children } = props;
  const divStyle = {
    gridColumn: span ? `span ${span}` : 'span 1',
  };
  return <div style={divStyle}>{children}</div>;
};

export { Columns, Column };
