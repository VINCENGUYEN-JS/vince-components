import * as React from 'react';
import classNames from 'classnames';
import './style/index.scss';

type ButtonType =
  | 'default'
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | undefined;

type SizeType = 'small' | 'middle' | 'large' | undefined;

type ButtonShape = 'default' | 'circle' | 'round';

type ButtonHTMLType = 'submit' | 'button' | 'reset';

type BaseButtonProps = {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: SizeType;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

/**Override native button props with type and onClick */

type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

const prefixCls = 'button';

const sizeClassNameMap = { large: 'lg', small: 'sm', middle: 'md' };

const Button = React.forwardRef<HTMLButtonElement, NativeButtonProps>(
  (props, ref) => {
    const {
      type,
      children,
      icon,
      onClick,
      size: customizeSize,
      shape = 'default',
      className,
      ...rest
    } = props;
    const sizeCls = customizeSize ? sizeClassNameMap[customizeSize] : '';
    const iconType = icon;
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    });

    return (
      <button className={classes} onClick={onClick} ref={ref} {...rest}>
        {icon}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
