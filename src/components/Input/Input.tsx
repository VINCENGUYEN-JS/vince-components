import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "search";
  addonAfter?: React.ReactNode;
}

const prefixCls = "input";

const Input = (props: InputProps) => {
  const { addonAfter, className, ...otherProps } = props;
  const addonAfterNode = addonAfter ? <span>{addonAfter}</span> : null;

  const wrapperClassName = `${prefixCls}-group`;
  const mergedWrapperClassName = classNames(
    `${prefixCls}-wrapper`,
    wrapperClassName
  );

  return (
    <span className={className}>
      <span className={mergedWrapperClassName}>
        <input className={prefixCls} {...otherProps} />
        {addonAfterNode}
      </span>
    </span>
  );
};

export default Input;
