import * as React from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import Input, { InputProps } from './Input';
import Button from '../Button/Button';
import './style/search-input.scss';
interface SearchProps extends InputProps {
  onSearch?: (value: string, event?: React.SyntheticEvent<HTMLElement>) => void;
  enterButton?: React.ReactNode;
}

const prefixCls = 'input-search';

const Search = (props: SearchProps) => {
  const { onSearch: customOnSearch, enterButton = false, ...rest } = props;
  const searchIcon =
    typeof enterButton === 'boolean' ? <SearchOutlined /> : null;
  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (customOnSearch) {
      customOnSearch((e.target as HTMLInputElement).value, e);
    }
  };
  const button = (
    <Button type={enterButton ? 'primary' : undefined} icon={searchIcon}>
      {enterButton}
    </Button>
  );
  return (
    <Input
      className={prefixCls}
      onPressEnter={onSearch}
      {...rest}
      addonAfter={button}
    />
  );
};

export default Search;
