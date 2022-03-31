import * as React from 'react';
import classNames from 'classnames';

import './style/index.scss';

type GeneratorProps = {
  prefixCls: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
  displayName: string;
};

export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  hasSider?: boolean;
}

type BasicPropsWithTagName = BasicProps & {
  tagName: 'header' | 'footer' | 'main' | 'section';
};

type LayoutContextProps = {
  siderHook: {
    addSider: (id: string) => void;
    removeSider: (id: string) => void;
  };
};

export const LayoutContext = React.createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

const generator =
  ({ prefixCls, tagName, displayName }: GeneratorProps) =>
  (BasicComponent: any) => {
    const Adapter = (props: BasicProps) => {
      return (
        <BasicComponent {...props} prefixCls={prefixCls} tagName={tagName} />
      );
    };
    Adapter.displayName = displayName;
    return Adapter;
  };

/**Layout components */

const Basic = (props: BasicPropsWithTagName) => {
  const { prefixCls, children, tagName, className, ...other } = props;
  const classes = classNames(prefixCls, className);
  return React.createElement(
    tagName,
    { className: classes, ...other },
    children
  );
};

const BasicLayout = (props: BasicPropsWithTagName) => {
  const { tagName: Tag, children, hasSider, prefixCls, ...others } = props;
  const [siders, setSiders] = React.useState<string[]>([]);
  const contextValue = React.useMemo(
    () => ({
      siderHook: {
        addSider: (id: string) => {
          setSiders((prev) => [...prev, id]);
        },
        removeSider: (id: string) => {
          setSiders((prev) => prev.filter((item) => item !== id));
        },
      },
    }),
    []
  );

  const classes = classNames(prefixCls, {
    [`${prefixCls}-has-sider`]:
      typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
  });

  return (
    <LayoutContext.Provider value={contextValue}>
      <Tag className={classes} {...others}>
        {children}
      </Tag>
    </LayoutContext.Provider>
  );
};

const Layout = generator({
  prefixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout',
})(BasicLayout);

const Header = generator({
  prefixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header',
})(Basic);

const Footer = generator({
  prefixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer',
})(Basic);

const Content = generator({
  prefixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content',
})(Basic);

export { Header, Footer, Content };

export default Layout;
