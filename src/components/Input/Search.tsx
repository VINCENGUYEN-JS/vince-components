import * as React from "react";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

import Input, { InputProps } from "./Input";
import Button from "../Button/Button";

interface SearchProps extends InputProps {
  onSearch?: (value: string, event?: React.SyntheticEvent<HTMLElement>) => void;
  enterButton?: React.ReactNode;
}

const prefixCls = "input-search";

const Search = (props: SearchProps) => {
  const { onSearch, enterButton = false, ...rest } = props;
  const searchIcon =
    typeof enterButton === "boolean" ? <SearchOutlined /> : null;
  const button = (
    <Button type={enterButton ? "primary" : undefined} icon={searchIcon}>
      {enterButton}
    </Button>
  );
  return <Input className={prefixCls} {...rest} addonAfter={button} />;
};

export default Search;
