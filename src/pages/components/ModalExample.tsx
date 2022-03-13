import * as React from 'react';
import { Button, Modal } from '@vince-components';
import ComponentDoc from '../../template/ComponentDoc';

const ModalExample = () => {
  const [isOn, setOnOff] = React.useState(false);
  console.log({ isOn });
  return (
    <ComponentDoc title="Modal" introduction="Modal dialogs">
      <Button type="primary" onClick={() => setOnOff(() => !isOn)}>
        Click to trigger modal
      </Button>
      <Modal visible={isOn}></Modal>
    </ComponentDoc>
  );
};

export default ModalExample;
