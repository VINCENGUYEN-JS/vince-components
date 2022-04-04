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

  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  if (gutter && gutter[1] > 0) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  return (
    <div className={classes} style={{ ...mergedStyle }}>
      {children}
    </div>
  );
};

export default Col;
