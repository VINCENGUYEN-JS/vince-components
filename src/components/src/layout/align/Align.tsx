import * as React from 'react';

type AlignPoint = string;

interface TargetPoint {
  clientX?: number;
  clientY?: number;
  pageX?: number;
  pageY?: number;
}

type TargetType = (() => HTMLElement) | TargetPoint;

interface AlignType {
  points?: AlignPoint[];
}

// interface RefAlign {
//   forceAlign: () => void;
// }

type AlignProps = {
  target: TargetType;
  align: AlignType;
  children: React.ReactNode;
};

const Align = (props: AlignProps) => {
  const { target, align } = props;
  return <></>;
};

Align.displayName = 'Align';

export default Align;
