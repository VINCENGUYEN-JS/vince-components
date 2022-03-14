import * as React from 'react';

import Mask from './Mask';
import Card from '../Card';
import './style/index.scss';
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  children?: React.ReactNode;
  width?: number;
}

const prefixCls = 'modal';

const Modal = (props: ModalProps) => {
  const { visible = false, children, width = 520 } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState(visible);

  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  return (
    <div className={`${prefixCls}-root`}>
      <Mask visible={visible} prefixCls={prefixCls} />
      <div
        tabIndex={-1}
        style={{ display: !animatedVisible ? 'none' : undefined }}
        role="dialog"
        className={`${prefixCls}-wrap`}
      >
        <div
          key="modal"
          role="document"
          className={prefixCls}
          style={{ width: width + 'px' }}
        >
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Modal;
