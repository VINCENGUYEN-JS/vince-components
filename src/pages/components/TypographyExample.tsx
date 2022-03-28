import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { Divider, Typography } from '@vince-components';

const TypographyExample = () => (
  <>
    <ComponentDoc
      title="Typography"
      introduction="Basic text writing, including headings, body text, lists, and more."
    >
      <Typography>
        <Typography.Title>Introduction</Typography.Title>
      </Typography>
    </ComponentDoc>
  </>
);

export default TypographyExample;
