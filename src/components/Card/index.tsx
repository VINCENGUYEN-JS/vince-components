import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
}

const prefixCls = "card";

const Card = (props: CardProps) => {
  const { children, className, title, extra, bordered = true, style } = props;
  let head: React.ReactNode;
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-bordered`]: bordered,
    },
    className
  );
  if (title) {
    head = (
      <div className={`${prefixCls}-head`}>
        <div className={`${prefixCls}-head-wrapper`}>
          {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        </div>
      </div>
    );
  }
  const body = <div className={`${prefixCls}-body`}>{children} </div>;
  return (
    <div className={classes} style={style}>
      {head}
      {body}
    </div>
  );
};

export default Card;
