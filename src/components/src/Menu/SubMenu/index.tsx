import * as React from 'react';
import classNames from 'classnames';

import type { RenderIconType } from '../interface';
import Icon from '../Icon';
import { parseChildren } from '../../../../utils/nodeUtil';

type SubMenuProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  itemIcon?: RenderIconType;
  expandIcon?: RenderIconType;
};

const prefixCls = 'menu-submenu';

export default function SubMenu(props: SubMenuProps) {
  const { children, title, itemIcon } = props;
  const [open, isOpen] = React.useState(false);
  const childList = parseChildren(children, []);

  const hiddenMenuItem = classNames('menu', {
    [`${prefixCls}-hidden`]: !open,
  });

  return (
    <li onClick={() => isOpen((open) => !open)}>
      <div className={`${prefixCls}-title`}>
        {title}
        <Icon icon={itemIcon} />
        <ul className={hiddenMenuItem}>{childList}</ul>
      </div>
    </li>
  );
}
