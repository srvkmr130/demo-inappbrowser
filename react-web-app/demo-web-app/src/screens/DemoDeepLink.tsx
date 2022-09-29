import React from "react";
import "./style.css";
import { useParams } from "react-router";

function DemoDeepLink() {
  let { redirect } = useParams();
  return (
    <div className="container">
      <header className="header">
        <div className="header-text">React Local</div>
        <div id="showValue">Link : {redirect}</div>
        <div className="btn">
          <a href={redirect}>Increment from Web</a>
        </div>
      </header>
    </div>
  );
}

export default DemoDeepLink;
