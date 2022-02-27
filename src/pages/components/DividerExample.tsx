import * as React from "react";

import ComponentDoc from "template/ComponentDoc";
import Divider from "components/Divider/Divider";

const DividerExample = () => (
  <>
    <ComponentDoc title="Divider" introduction="To separate content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider>Hello </Divider>
    </ComponentDoc>
  </>
);

export default DividerExample;
