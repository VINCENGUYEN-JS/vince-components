import * as React from 'react';

import './style/index.scss';

export interface TypographyProps {
  children?: React.ReactNode;
}

interface InternalTypographyProps extends TypographyProps {
  component?: string;
}

const prefixCls = 'typography';

const Typography = (props: InternalTypographyProps) => {
  const { component = 'article', children } = props;
  const Component = component as any;
  return (
    <Component className={prefixCls} id="important">
      {children}
    </Component>
  );
};

export default Typography;
