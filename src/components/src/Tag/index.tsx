import * as React from 'react';
import classNames from 'classnames';

import './style/index.scss';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const prefixCls = 'tag';

const Tag = (props: TagProps) => {
  const { children, className } = props;
  const classes = classNames(prefixCls, className);
  return <span className={classes}>{children}</span>;
};

export default Tag;
