import * as React from "react";

import Divider from "../components/Divider/Divider";
import Input from "../components/Input";

const InputExample = () => {
  const onChange = (value: any) => console.log(value);
  const onSearch = (value: any) => console.log(value);
  return (
    <>
      <Divider>Examples</Divider>
      <Input placeholder="Basic Usage" />
      <Divider orientation="left">Input Search</Divider>
      <Input.Search
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Search something"
      />
    </>
  );
};

export default InputExample;
