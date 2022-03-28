import * as React from 'react';
import Base from './Base';

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = (props) => {
  const { children } = props;
  const component = 'h1';

  return <Base component={component}> {children} </Base>;
};

export default Title;
