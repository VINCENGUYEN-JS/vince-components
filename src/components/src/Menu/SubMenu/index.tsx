import * as React from 'react';
import classNames from 'classnames';

import type { RenderIconType } from '../interface';
import Icon from '../Icon';
import { parseChildren } from '../../../../utils/nodeUtil';

type SubMenuProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  expandIcon?: RenderIconType;
};

const prefixCls = 'menu-submenu';

export default function SubMenu(props: SubMenuProps) {
  const { children, title } = props;
  const [open, isOpen] = React.useState(false);
  const childList = parseChildren(children, []);

  const hiddenMenuItem = classNames('menu', {
    [`${prefixCls}-hidden`]: !open,
  });

  const subMenuClass = classNames('menu-submenu', {
    [`${prefixCls}-open`]: open,
  });

  return (
    <li className={subMenuClass} onClick={() => isOpen((open) => !open)}>
      <div className={`${prefixCls}-title`}>
        {title}
        <Icon>
          <i className={`${prefixCls}-arrow`} />
        </Icon>
        <ul className={hiddenMenuItem}>{childList}</ul>
      </div>
    </li>
  );
}
