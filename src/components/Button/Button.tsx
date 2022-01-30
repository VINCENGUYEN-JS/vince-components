import React from "react";
import classNames from "classnames";
import "./style/index.scss";

type ButtonType = "default" | "primary" | "ghost" | "dashed" | "link" | "text";

type SizeType = "small" | "middle" | "large" | undefined;

type BaseButtonProps = {
  type: ButtonType;
  children: React.ReactNode;
  onClick: () => void;
  size: SizeType;
};

const prefixCls = "button";

const sizeClassNameMap = { large: "lg", small: "sm", middle: undefined };

const Button = (props: BaseButtonProps) => {
  const { type, children, onClick, size: customizeSize } = props;
  const sizeCls = customizeSize ? sizeClassNameMap[customizeSize] : "";
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
  });
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
