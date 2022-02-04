import * as React from "react";
import { useContext, useEffect } from "react";
import classNames from "classnames";

import { LayoutContext } from "./layout";

type SiderProps = {
  children: React.ReactNode;
  width?: number | string;
};

const generateId = (() => {
  let i = 0;
  return (prefix: string = "") => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

const prefixCls = "layout-sider";

const Sider = (props: SiderProps) => {
  const { children, width = "200px" } = props;
  const siderWidth = width;
  const { siderHook } = useContext(LayoutContext);
  useEffect(() => {
    const uniqueId = generateId("sider");
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const renderSider = () => {
    const siderCls = classNames(prefixCls, {});
    const divStyle = {
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth,
    };
    return (
      <aside className={siderCls} style={divStyle}>
        <div className={`${prefixCls}-children`}>{children}</div>
      </aside>
    );
  };
  return <>{renderSider()}</>;
};

export default Sider;
