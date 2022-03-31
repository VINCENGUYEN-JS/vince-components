import * as React from 'react';

import { Tag } from '@vince-components';
import ComponentDoc from '../../template/ComponentDoc';
import { tagAPI } from '../componentApi';

const tagCode = `<Tag>Tag 1 </Tag>`;

const TagExample = () => (
  <ComponentDoc
    title="Tag"
    introduction="It can be used to tag by dimension or property"
    api={tagAPI}
    code={tagCode}
  >
    <Tag>Tag 1</Tag>
  </ComponentDoc>
);

export default TagExample;
