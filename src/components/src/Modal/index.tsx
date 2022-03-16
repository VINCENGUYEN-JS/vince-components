import * as React from 'react';

import Mask from './Mask';
import Content from './Content';
import type { ModalPropTypes } from './ModalPropTypes';
import './style/index.scss';

const prefixCls = 'modal';

const Modal = (props: ModalPropTypes) => {
  const { visible = false, width = 520, onClose, title, children } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState(visible);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const onClickOutSide = (e: MouseEvent) => {
    const element = e.target;
    if (modalRef.current && !modalRef.current.contains(element as Node)) {
      setAnimatedVisible(false);
      onClose && onClose();
    }
  };

  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(visible);
    }
  }, [visible]);

  React.useEffect(() => {
    document.body.addEventListener('click', onClickOutSide);
  }, []);

  return (
    <div className={`${prefixCls}-root`}>
      {animatedVisible && <Mask visible={visible} prefixCls={prefixCls} />}
      <div
        tabIndex={-1}
        style={{ display: !animatedVisible ? 'none' : undefined }}
        role="dialog"
        className={`${prefixCls}-wrap`}
      >
        <Content
          visible={visible}
          width={width}
          title={title}
          prefixCls={prefixCls}
        >
          {children}
        </Content>
      </div>
    </div>
  );
};

export default Modal;
