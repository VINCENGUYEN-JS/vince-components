import * as React from 'react';

type ItemProps = {
  className?: string;
  children: React.ReactNode;
};

const Item = (props: ItemProps) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

export default Item;
