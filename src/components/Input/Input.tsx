import * as React from "react";
import classNames from "classnames";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "search";
  addonAfter?: React.ReactNode;
}

const Input = (props: InputProps) => {
  const { addonAfter } = props;
  const addonAfterNode = addonAfter ? <span>{addonAfter}</span> : null;
  return (
    <>
      <input {...props} />
      {addonAfterNode}
    </>
  );
};

export default Input;
