import * as React from 'react';
import Base from './Base';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5];

type TitleProps = {
  children: React.ReactNode;
  level?: typeof TITLE_ELE_LIST[number];
};

const Title: React.FC<TitleProps> = (props) => {
  const { level = 1, children } = props;
  let component: string;
  if (TITLE_ELE_LIST.includes(level)) {
    component = `h${level}`;
  } else {
    component = 'h1';
  }

  return <Base component={component}> {children} </Base>;
};

export default Title;
