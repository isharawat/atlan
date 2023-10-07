import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const Input = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="20vh"
        width={`100%`}
        value={value}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default Input;