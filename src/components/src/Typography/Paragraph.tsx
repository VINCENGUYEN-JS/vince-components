import * as React from 'react';

import Base from './Base';

interface ParagraphProps {
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  ellipsis?: boolean;
  style?: React.CSSProperties;
}

const Paragraph = (props: ParagraphProps) => (
  <Base {...props} component="div">
    {props.children}
  </Base>
);

export default Paragraph;
