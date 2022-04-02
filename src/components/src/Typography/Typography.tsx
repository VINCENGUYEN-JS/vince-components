import * as React from 'react';

import './style/index.scss';

export interface TypographyProps {
  children?: React.ReactNode;
}

interface InternalTypographyProps extends TypographyProps {
  component?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Typography = (props: InternalTypographyProps) => {
  const { component = 'article', children, className, style } = props;
  const Component = component as any;
  return (
    <Component style={style} className={className} id="important">
      {children}
    </Component>
  );
};

export default Typography;
