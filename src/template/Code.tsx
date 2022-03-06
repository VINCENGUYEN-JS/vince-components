import * as React from "react";
import { highlightAll } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

type CodeProps = {
  code: string;
  language: string;
  codeIsOn: boolean;
};

export default function Code({ code, language, codeIsOn }: CodeProps) {
  React.useEffect(() => {
    highlightAll();
  }, []);
  console.log({ code });
  return (
    <div className={codeIsOn ? "codeHidden" : ""}>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
