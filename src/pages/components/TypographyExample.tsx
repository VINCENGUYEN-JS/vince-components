import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { Divider, Typography } from '@vince-components';

const apiCode = `<Typography>
  <Typography.Title>h1.Vince Design</Typography.Title>
  <Typography.Title level={2}>h2.Vince Design</Typography.Title>
  <Typography.Title level={3}>h3.Vince Design</Typography.Title>
  <Typography.Title level={4}>h4.Vince Design</Typography.Title>
</Typography>`;

const apiCode2 = `<Typography>
 <Typography.Paragraph ellipsis style={{ width: '100px' }}>
  Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.
 </Typography.Paragraph>
</Typography>`;

const TypographyExample = () => (
  <>
    <ComponentDoc
      title="Typography"
      introduction="Basic text writing, including headings, body text, lists, and more."
      code={apiCode}
    >
      <Typography>
        <Typography.Title>h1.Vince Design</Typography.Title>
        <Typography.Title level={2}>h2.Vince Design</Typography.Title>
        <Typography.Title level={3}>h3.Vince Design</Typography.Title>
        <Typography.Title level={4}>h4.Vince Design</Typography.Title>
      </Typography>
    </ComponentDoc>
    <ComponentDoc code={apiCode2}>
      <Typography>
        <Typography.Paragraph ellipsis style={{ width: '100px' }}>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Typography.Paragraph>
      </Typography>
    </ComponentDoc>
  </>
);

export default TypographyExample;
