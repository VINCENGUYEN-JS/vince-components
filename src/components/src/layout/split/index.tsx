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

type fraction = keyof typeof fractions;

type SplitProps = {
  fraction: fraction;
  children: React.ReactNode;
};

const prefixCls = 'split';

const Split = (props: SplitProps) => {
  const { fraction, children } = props;
  const divStyle = {
    display: 'grid',
    gridTemplateColumns: fractions[fraction],
  };
  return (
    <div className={prefixCls} style={divStyle}>
      {children}
    </div>
  );
};

export default Split;
