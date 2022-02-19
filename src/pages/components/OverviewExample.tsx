import * as React from "react";
import { Link } from "react-router-dom";

import ComponentDoc from "template/ComponentDoc";
import Divider from "components/Divider/Divider";
import Input from "components/Input";
import Card from "components/Card";
import Tag from "components/Tag";
import { Row, Col, Space } from "layout";

const styleImg = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "152px",
};

const Overview = () => (
  <>
    <ComponentDoc
      title="Component Overview"
      introduction="Provide you plenty of UI components to enrich your web application"
    >
      <Divider />
      <Input.Search placeholder="Search in components" />
      <Divider />
      <h2 className="component-overview-group-title">
        <Space style={{ gap: "8px" }}>
          General
          <Tag>1</Tag>
        </Space>
      </h2>
      <Row>
        <Col span={6}>
          <Link to="/button">
            <Card title="Button">
              <div style={styleImg}>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg"
                  alt="Button"
                />
              </div>
            </Card>
          </Link>
        </Col>
      </Row>
    </ComponentDoc>
  </>
);

export default Overview;
