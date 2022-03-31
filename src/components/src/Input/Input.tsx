import * as React from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';

import { hasAddon } from './utils/commonUtils';
import './style/index.scss';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'search';
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

const prefixCls = 'input';

const Input = (props: InputProps) => {
  const {
    addonAfter,
    addonBefore,
    className,
    onChange,
    onPressEnter,
    type,
    ...otherProps
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
  };

  if (hasAddon(props)) {
    const wrapperClassName = `${prefixCls}-group`;
    const addnClassName = `${wrapperClassName}-addon`;
    const groupClassName = `${prefixCls}-group-wrapper`;

    const mergedGroupClassName = classNames(groupClassName, className);

    const mergedWrapperClassName = classNames(
      `${prefixCls}-wrapper`,
      wrapperClassName
    );

    const addonAfterNode = addonAfter ? (
      <span className={addnClassName}>{addonAfter}</span>
    ) : null;

    const addonBeforeNode = addonBefore ? (
      <span className={addnClassName}>{addonBefore}</span>
    ) : null;

    return (
      <span className={mergedGroupClassName}>
        <span className={mergedWrapperClassName}>
          {addonBeforeNode}
          <input
            className={prefixCls}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            {...otherProps}
          />
          {addonAfterNode}
        </span>
      </span>
    );
  }

  const getInputElement = () => {
    const otherProps = omit(props, ['onChange', 'addonAfter', 'addonBefore']);
    return (
      <input
        {...otherProps}
        onChange={handleChange}
        className={prefixCls}
        type={type}
      />
    );
  };

  return getInputElement();
};

export default Input;
