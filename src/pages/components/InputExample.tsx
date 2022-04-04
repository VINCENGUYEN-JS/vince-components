import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { Divider, Input, Space } from '@vince-components';
import { inputAPI } from '../componentApi';

const inputCode = `<Input placeholder="Basic Usage" />
<Input placeholder="Basic Usage" addonAfter=".com" addonBefore="https://" />
<Input.Search onSearch={onSearch} onChange={onChange} placeholder="Search something">
<Input.Search onSearch={onSearch} enterButton="Search" onChange={onChange}
placeholder="Search something" />`;

const InputExample = () => {
  const onChange = (value: any) => console.log(value);
  const onSearch = (value: any) => console.log(value);
  return (
    <>
      <ComponentDoc
        title="Input"
        introduction="A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."
        code={inputCode}
        api={inputAPI}
      >
        <Divider orientation="left">Basic Input</Divider>
        <Space direction="vertical">
          <Input placeholder="Basic Usage" />
          <Input placeholder="Basic Usage" addonAfter=".com" />
          <Input
            addonBefore="https://"
            placeholder="Basic Usage"
            addonAfter=".com"
          />
        </Space>
        <Divider orientation="left">Input Search</Divider>
        <Space direction="vertical">
          <Input.Search
            onSearch={onSearch}
            onChange={onChange}
            placeholder="Search something"
          />
          <Input.Search
            onSearch={onSearch}
            enterButton="Search"
            onChange={onChange}
            placeholder="Search something"
          />
        </Space>
      </ComponentDoc>
    </>
  );
};

export default InputExample;
