import * as React from 'react';
import Card from '../Card';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  children?: React.ReactNode;
}

const prefixCls = 'modal';

const Modal = (props: ModalProps) => {
  const { visible = false, children } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState(visible);

  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  return (
    <div className={`${prefixCls}-root`}>
      <div
        tabIndex={-1}
        style={{ display: !animatedVisible ? 'none' : undefined }}
      >
        <div key="modal-element" role="document">
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: '300px' }}
          >
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
