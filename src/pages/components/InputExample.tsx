import * as React from "react";

import ComponentDoc from "template/ComponentDoc";
import Divider from "components/Divider/Divider";
import Input from "components/Input";

const inputCode = `<Input placeholder="Basic Usage" />
<Input.Search onSearch={onSearch} onChange={onChange} placeholder="Search something">`;

const InputExample = () => {
  const onChange = (value: any) => console.log(value);
  const onSearch = (value: any) => console.log(value);
  return (
    <>
      <ComponentDoc
        title="Input"
        introduction="A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."
        code={inputCode}
      >
        <Input placeholder="Basic Usage" />
        <Divider orientation="left">Input Search</Divider>
        <Input.Search
          onSearch={onSearch}
          onChange={onChange}
          placeholder="Search something"
        />
      </ComponentDoc>
    </>
  );
};

export default InputExample;
