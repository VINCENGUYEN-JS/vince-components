import * as React from "react";

import ComponentDoc from "template/ComponentDoc";
import Card from "components/Card";
import { cardAPI } from "../componentApi";

const cardCode = `<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: "300px" }}>
  <p>Card Content</p>
  <p>Card Content</p>
  <p>Card Content</p>
</Card>`;

const CardExample = () => {
  return (
    <>
      <ComponentDoc
        title="Card"
        introduction="Simple rectangle container"
        api={cardAPI}
        code={cardCode}
      >
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: "300px" }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
      </ComponentDoc>
    </>
  );
};

export default CardExample;
