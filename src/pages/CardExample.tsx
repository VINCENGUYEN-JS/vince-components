import * as React from "react";

import ComponentDoc from "template/ComponentDoc";
import Card from "components/Card";

const CardExample = () => {
  return (
    <>
      <ComponentDoc title="Card" introduction="Simple rectangle container" />
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: "300px" }}
      >
        <p>Card Content</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </Card>
    </>
  );
};

export default CardExample;
