import * as React from "react";

import Divider from "../components/Divider/Divider";
import Input from "../components/Input";

const InputExample = () => {
  return (
    <>
      <Divider>Examples</Divider>
      <Input placeholder="Basic Usage" />
      <Divider orientation="left">Input Search</Divider>
      <Input.Search placeholder="Search something" />
    </>
  );
};

export default InputExample;
