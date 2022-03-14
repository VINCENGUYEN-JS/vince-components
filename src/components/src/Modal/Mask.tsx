import * as React from 'react';

type MaskProps = {
  visible: boolean;
  prefixCls: string;
  style?: React.CSSProperties;
  maskProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Mask = (prop: MaskProps) => {
  const { style, visible, maskProps, prefixCls } = prop;
  console.log({ visible });
  const classes = !visible ? `${prefixCls}-mask-hidden` : `${prefixCls}-mask`;
  return visible ? (
    <div style={{ ...style }} className={classes} {...maskProps} />
  ) : null;
};

export default Mask;
