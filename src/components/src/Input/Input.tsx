import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "search";
  addonAfter?: React.ReactNode;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

const prefixCls = "input";

const Input = (props: InputProps) => {
  const { addonAfter, className, onChange, onPressEnter, ...otherProps } =
    props;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === "Enter") {
      onPressEnter(e);
    }
  };
  return (
    <span className={mergedGroupClassName}>
      <span className={mergedWrapperClassName}>
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
};

export default Input;
