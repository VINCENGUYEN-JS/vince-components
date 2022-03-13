import * as React from 'react';
import classNames from 'classnames';

import { RowContext } from './row';

const prefixCls = 'col';

type ColProps = {
  children: React.ReactNode;
  span?: number;
  offset?: number;
};

const Col = (props: ColProps) => {
  const { children, span, offset } = props;
  const { gutter } = React.useContext(RowContext);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-offset-${offset}`]: offset !== undefined,
  });

  const mergedStyle: React.CSSProperties = {};

  if (gutter) {
    mergedStyle.paddingLeft = gutter;
    mergedStyle.paddingRight = gutter;
  }

  console.log({ classes });

  return (
    <div className={classes} style={{ ...mergedStyle }}>
      {children}
    </div>
  );
};

export default Col;
