import * as React from 'react';

const fractions = {
  '1/4': '1fr 3fr',
  '1/3': '1fr 2fr',
  '1/2': '1fr 1fr',
  '2/3': '2fr 1fr',
  '3/4': '3fr 1fr',
  'auto-start': 'auto 1fr',
  'auto-end': '1fr auto',
};

const spacingMap = {
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
  xxl: '4rem',
};

type fraction = keyof typeof fractions;
type gutter = keyof typeof spacingMap;

type SplitProps = {
  fraction?: fraction;
  children: React.ReactNode;
  gutter?: gutter;
};

const prefixCls = 'split';

const Split = (props: SplitProps) => {
  const { fraction, children, gutter } = props;
  const divStyle = {
    display: 'grid',
    gap: gutter ? spacingMap[gutter] : spacingMap.lg,
    gridTemplateColumns: fraction ? fractions[fraction] : fractions['1/2'],
  };
  return (
    <div className={prefixCls} style={divStyle}>
      {children}
    </div>
  );
};

export default Split;
