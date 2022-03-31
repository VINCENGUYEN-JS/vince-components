import * as React from 'react';

import { Button, Modal } from '@vince-components';
import { modalAPI } from '../componentApi';
import ComponentDoc from '../../template/ComponentDoc';

const modalCode = ` <Button type="primary" onClick={()=>{setOnOff(!isOn)}}>
   Click to trigger modal
 </Button>
 <Modal visible={isOn} onClose={() => setOnOff(false)} title="Modal">
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
 </Modal>`;

const ModalExample = () => {
  const [isOn, setOnOff] = React.useState(false);
  console.log({ isOn });
  return (
    <ComponentDoc
      title="Modal"
      introduction="Modal dialogs"
      api={modalAPI}
      code={modalCode}
    >
      <Button
        type="primary"
        onClick={() => {
          setOnOff(!isOn);
        }}
      >
        Click to trigger modal
      </Button>
      <Modal visible={isOn} onClose={() => setOnOff(false)} title="Modal">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </ComponentDoc>
  );
};

export default ModalExample;
