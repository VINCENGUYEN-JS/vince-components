import * as React from "react";
import { highlightAll } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

type CodeProps = {
  code: string;
  language: string;
};

export default function Code({ code, language }: CodeProps) {
  React.useEffect(() => {
    highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
