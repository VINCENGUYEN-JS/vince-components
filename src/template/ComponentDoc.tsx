import * as React from 'react';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import MinusOutlined from '@ant-design/icons/MinusOutlined';

import Code from './Code';
import classNames from 'classnames';
import { Space } from '@vince-components';
import './style/index.scss';

type APIProps = {
  property: string;
  description: string;
  type: string;
  default: string;
  title?: string;
};

type ComponentDocProps = {
  title: string;
  introduction: string;
  children?: React.ReactNode;
  api?: APIProps[] | APIProps[][];
  apiIntroduction?: string;
  code?: string;
};
function isObject(obj: any) {
  return (
    obj != null && obj.constructor.name === 'Object' && !Array.isArray(obj)
  );
}

const ComponentDoc = (props: ComponentDocProps) => {
  const { title, introduction, api, apiIntroduction, code, children } = props;
  const [exampleIsOn, setExample] = React.useState(false);
  const [codeIsOn, setCode] = React.useState(false);
  const ExpandOrUnExpandIcon = !exampleIsOn ? MinusOutlined : PlusOutlined;
  const ExpandOrUnExpandIcon2 = !codeIsOn ? MinusOutlined : PlusOutlined;
  const tableAPI = (
    <section className="markdown api-container">
      <h2>
        <span>API</span>
      </h2>
      {apiIntroduction && <p>{apiIntroduction}</p>}
      {!api ? null : isObject(api[0]) ? (
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
            {(api as APIProps[]).map((data) => {
              return (
                <tr key={data.description}>
                  <td>{data.property}</td>
                  <td>{data.description}</td>
                  <td>{data.type}</td>
                  <td>{data.default}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        (api as APIProps[][]).map((array) => {
          return (
            <>
              <h3>
                <span>{array[0].title}</span>
              </h3>
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
                  {array.map((data) => {
                    return (
                      <>
                        <tr>
                          <td>{data.property}</td>
                          <td>{data.description}</td>
                          <td>{data.type}</td>
                          <td>{data.default}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        })
      )}
    </section>
  );
  const exampleClassName = classNames({
    exampleHidden: exampleIsOn,
  });
  return (
    <section className="markdown">
      <h1>{title}</h1>
      <p>{introduction}</p>
      <Space align="baseline">
        <h2>Examples</h2>
        <ExpandOrUnExpandIcon onClick={() => setExample(!exampleIsOn)} />
      </Space>
      <div className={exampleClassName}>{children}</div>
      {code && (
        <div>
          <Space align="baseline">
            <h2>How to use it</h2>
            <ExpandOrUnExpandIcon2 onClick={() => setCode(!codeIsOn)} />
          </Space>
          <Code code={code} language="javascript" codeIsOn={codeIsOn} />
        </div>
      )}
      {api && tableAPI}
    </section>
  );
};

export default ComponentDoc;
