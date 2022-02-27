import * as React from "react";

import "./style/index.scss";

type APIProps = {
  property: string;
  description: string;
  type: string;
  default: string;
};

type ComponentDocProps = {
  title: string;
  introduction: string;
  children?: React.ReactNode;
  api?: APIProps[];
  apiIntroduction?: string;
};

const ComponentDoc = (props: ComponentDocProps) => {
  const { title, introduction, api, apiIntroduction, children } = props;
  const tableAPI = (
    <section className="markdown api-container">
      <h2>
        <span>API</span>
      </h2>
      {apiIntroduction && <p>{apiIntroduction}</p>}
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {api &&
            api.map((data) => {
              return (
                <tr>
                  <td>{data.property}</td>
                  <td>{data.description}</td>
                  <td>{data.type}</td>
                  <td>{data.default}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
  return (
    <section className="markdown">
      <h1>{title}</h1>
      <p>{introduction}</p>
      <h2>Examples</h2>
      {children}
      {api && tableAPI}
    </section>
  );
};

export default ComponentDoc;
