import * as React from "react";
import classNames from "classnames";

type GeneratorProps = {
  prefixCls: string;
  tagName: "header" | "footer" | "main" | "section";
  displayName: string;
};

type BasicProps = {
  prefixCls?: string;
  hasSider?: boolean;
  children: React.ReactNode;
};

type BasicPropsWithTagName = BasicProps & {
  tagName: "header" | "footer" | "main" | "section";
};

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

const BasicLayout = (props: BasicPropsWithTagName) => {
  const { tagName: Tag, children, hasSider, prefixCls, ...others } = props;
  const classes = classNames(prefixCls, {});
  return (
    <Tag className={classes} {...others}>
      {children}
    </Tag>
  );
};

const Layout = generator({
  prefixCls: "layout",
  tagName: "section",
  displayName: "Layout",
})(BasicLayout);

export default Layout;
