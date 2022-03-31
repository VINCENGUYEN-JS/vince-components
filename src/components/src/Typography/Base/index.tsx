import * as React from 'react';
import Typography, { TypographyProps } from '../Typography';

export interface BaseProps extends TypographyProps {
  component: string;
}

const Base = (props: BaseProps) => {
  const { component, children } = props;
  return <Typography component={component}>{children}</Typography>;
};

export default Base;
