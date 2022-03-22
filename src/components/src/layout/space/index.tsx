import * as React from 'react';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';

import Item from './Item';
import './style/index.scss';

const prefixCls = 'space';

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center' | 'baseline';
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large' | number;
}

type SizeType = 'small' | 'middle' | 'large';

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SizeType | number) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space = (props: SpaceProps) => {
  const {
    children,
    className,
    align,
    direction = 'horizontal',
    style: customStyle,
    size = 'small',
  } = props;
  const mergedAlign =
    align === undefined && direction === 'horizontal' ? 'center' : align;
  const classes = classNames(
    prefixCls,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    },
    className
  );
  const childNodes = toArray(children, { keepEmpty: true });
  const nodes = childNodes.map((child) => <Item key={child.key}>{child}</Item>);
  const style = {
    ...customStyle,
    gap: getNumberSize(size),
  };
  return (
    <div className={classes} style={style}>
      {nodes}
    </div>
  );
};

export default Space;
