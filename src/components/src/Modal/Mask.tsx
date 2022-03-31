import * as React from 'react';

type MaskProps = {
  visible: boolean;
  prefixCls: string;
  style?: React.CSSProperties;
  maskProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Mask = (prop: MaskProps) => {
  const { style, maskProps, prefixCls } = prop;
  const classes = `${prefixCls}-mask`;
  return <div style={{ ...style }} className={classes} {...maskProps} />;
};

export default Mask;
