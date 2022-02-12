import * as React from "react";
import classNames from "classnames";

import { parseChildren } from "../../utils/nodeUtil";
import "./style/index.scss";

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  key?: string;
  mode?:
    | "vertical"
    | "vertical-left"
    | "vertical-right"
    | "horizontal"
    | "inline";
}

interface MenuInfo {
  key?: string;
  domEvent: React.MouseEvent<HTMLLIElement>;
}

interface MenuContextProps {
  selectedKeys: string[];
  onItemClick: (info: MenuInfo) => void;
}

export const MenuContext = React.createContext<MenuContextProps>(
  {} as MenuContextProps
);

const prefixCls = "menu";

const Menu = (props: MenuProps) => {
  const { children, style: customStyle, mode = "vertical" } = props;
  const [selectedKeys, setSeletedKeys] = React.useState<string[]>([]);

  const childList: React.ReactElement[] = parseChildren(children, []);

  const onInternalClick = (info: MenuInfo) => {
    const { key, domEvent } = info;
    if (key) {
      domEvent.stopPropagation();
      setSeletedKeys([key]);
    }
  };

  const contextValues = React.useMemo(() => {
    return {
      selectedKeys,
      onItemClick: onInternalClick,
    };
  }, [selectedKeys]);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${mode}`]: mode,
  });
  return (
    <MenuContext.Provider value={contextValues}>
      <ul className={classes} style={customStyle}>
        {childList}
      </ul>
    </MenuContext.Provider>
  );
};

export default Menu;
