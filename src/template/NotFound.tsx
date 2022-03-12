import * as React from "react";
import { Link } from "react-router-dom";

import { HomeOutlined } from "@ant-design/icons";
import { Button, Result } from "@vince-components";

const NotFound = () => {
  return (
    <div>
      <section>
        <Result
          status="404"
          title="404"
          subTitle="Sorry ,the page you visited does not exist"
          extra={
            <Link to="/overview">
              <Button type="primary" icon={<HomeOutlined />}>
                Back to home page
              </Button>
            </Link>
          }
        />
      </section>
    </div>
  );
};

export default NotFound;
