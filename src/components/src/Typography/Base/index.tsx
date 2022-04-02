import * as React from 'react';
import classNames from 'classnames';

import Typography, { TypographyProps } from '../Typography';

export interface BaseProps extends TypographyProps {
  component: string;
  ellipsis?: boolean;
  style?: React.CSSProperties;
}

const prefixCls = 'typography';

const Base = (props: BaseProps) => {
  const { component, children, ellipsis, style } = props;

  // ===================Ellipsis=====================
  const mergedEnableEllipsis = ellipsis;
  const cssTextOverflow = mergedEnableEllipsis;

  return (
    <Typography
      className={classNames(prefixCls, {
        [`${prefixCls}-single-line`]: mergedEnableEllipsis,
        [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
      })}
      component={component}
      style={style}
    >
      {children}
    </Typography>
  );
};

export default Base;
