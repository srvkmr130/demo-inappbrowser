import React, { useState } from "react";
import "./style.css";
import { useParams } from "react-router";

function DemoWebApp() {
  let { value } = useParams();
  const val = (value && +value) ?? 0;
  const [input, setInput] = useState<number>(+val);

  const handleOnClick = () => {
    setInput((prev: number) => prev + 1);
  };
  return (
    <div className="container">
      <header className="header">
        <div id="showValue">Current Value : {input}</div>
        <div className="btn" onClick={handleOnClick}>
          Increment
        </div>
      </header>
    </div>
  );
}

export default DemoWebApp;
