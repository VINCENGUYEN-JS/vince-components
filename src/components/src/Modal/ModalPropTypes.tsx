import * as React from 'react';

export type ModalPropTypes = {
  visible?: boolean;
  closable?: boolean;
  title?: React.ReactNode;
  prefixCls?: string;
  onClose?: () => any;

  children?: React.ReactNode;
  width?: number;
  footer?: React.ReactNode;
};
