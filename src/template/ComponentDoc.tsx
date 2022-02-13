import * as React from "react";

import "./style/index.scss";

type ComponentDocProps = {
  title: string;
  introduction: string;
};

const ComponentDoc = (props: ComponentDocProps) => {
  const { title, introduction } = props;
  return (
    <section className="markdown">
      <h1>{title}</h1>
      <p>{introduction}</p>
      <h2>Examples</h2>
    </section>
  );
};

export default ComponentDoc;
