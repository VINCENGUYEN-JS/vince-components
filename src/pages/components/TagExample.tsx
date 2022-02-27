import * as React from "react";

import Tag from "components/Tag";
import ComponentDoc from "template/ComponentDoc";
import { tagAPI } from "../componentApi";

const TagExample = () => (
  <ComponentDoc
    title="Tag"
    introduction="It can be used to tag by dimension or property"
    api={tagAPI}
  >
    <Tag>Tag 1</Tag>
  </ComponentDoc>
);

export default TagExample;
