import React from "react";
import classNames from "classnames";
import "./style/index.scss";

type ButtonType = "default" | "primary" | "ghost" | "dashed" | "link" | "text";

type SizeType = "small" | "middle" | "large" | undefined;

type ButtonShape = "default" | "circle" | "round";

type BaseButtonProps = {
  type: ButtonType;
  shape?: ButtonShape;
  size?: SizeType;
  onClick: () => void;
  children: React.ReactNode;
};

const prefixCls = "button";

const sizeClassNameMap = { large: "lg", small: "sm", middle: undefined };

const Button = (props: BaseButtonProps) => {
  const {
    type,
    children,
    onClick,
    size: customizeSize,
    shape = "default",
  } = props;
  const sizeCls = customizeSize ? sizeClassNameMap[customizeSize] : "";
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-${shape}`]: shape !== "default" && shape,
  });
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
