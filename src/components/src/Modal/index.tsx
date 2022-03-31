import * as React from 'react';

import Button from '../Button/Button';
import Mask from './Mask';
import Content from './Content';
import type { ModalPropTypes } from './ModalPropTypes';
import './style/index.scss';

const prefixCls = 'modal';

const Modal = (props: ModalPropTypes) => {
  const {
    visible = false,
    width = 520,
    onClose,
    onOk,
    title,
    children,
    footer,
    closable = true,
  } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState(visible);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const onCloseLocal = () => {
    setAnimatedVisible(false);
    onClose && onClose();
  };

  const onOkLocal = () => {
    setAnimatedVisible(false);
    onOk && onOk();
  };

  const onClickOutSide = (e: MouseEvent) => {
    const element = e.target;
    if (modalRef.current && !modalRef.current.contains(element as Node)) {
      onCloseLocal();
    }
  };

  const onWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == 'Escape') {
      onCloseLocal();
      return;
    }
  };

  const defaultFooter = (
    <>
      <Button onClick={onCloseLocal}>Cancel</Button>
      <Button type="primary" onClick={onOkLocal}>
        Ok
      </Button>
    </>
  );

  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(visible);
    }
  }, [visible]);

  React.useEffect(() => {
    modalRef.current && modalRef.current.focus();
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
        onKeyDown={onWrapperKeyDown}
      >
        <Content
          visible={visible}
          width={width}
          title={title}
          prefixCls={prefixCls}
          ref={modalRef}
          closable={closable}
          onClose={onCloseLocal}
          footer={footer || defaultFooter}
        >
          {children}
        </Content>
      </div>
    </div>
  );
};

export default Modal;
