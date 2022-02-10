import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "search";
  addonAfter?: React.ReactNode;
}

const prefixCls = "input";

const Input = (props: InputProps) => {
  const { addonAfter, className, onChange, ...otherProps } = props;

  const wrapperClassName = `${prefixCls}-group`;
  const addnClassName = `${wrapperClassName}-addon`;
  const groupClassName = `${prefixCls}-group-wrapper`;

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

  return (
    <span className={groupClassName}>
      <span className={mergedWrapperClassName}>
        <input className={prefixCls} onChange={handleChange} {...otherProps} />
        {addonAfterNode}
      </span>
    </span>
  );
};

export default Input;
