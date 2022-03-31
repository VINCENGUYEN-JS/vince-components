import * as React from 'react';
import classNames from 'classnames';

import { MenuContext } from './Menu';

type MenuProps = {
  children: React.ReactNode;
  eventKey?: string;
};

const prefixCls = 'menu-item';

const MenuItem = (props: MenuProps) => {
  const { children, eventKey } = props;

  const { selectedKeys, onItemClick } = React.useContext(MenuContext);

  const onInternalClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const info = {
      key: eventKey,
      domEvent: e,
    };
    onItemClick(info);
  };
  const selected = eventKey ? selectedKeys.includes(eventKey) : false;

  const classes = classNames(prefixCls, {
    [`${prefixCls}-selected`]: selected,
  });

  return (
    <li className={classes} onClick={onInternalClick} {...props}>
      {children}
    </li>
  );
};

export default MenuItem;
