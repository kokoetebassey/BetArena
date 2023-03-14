import React from "react";

export default function CrashMessage(crash) {
  let crashPoint = crash.crash;

  return (
    <div className="crashMessage">
      <div className="Message-container">
        <div className="Message-container1">
          <h1>Bang</h1>
          <h3>@ {crashPoint}</h3>
          <h4>&#10006;</h4>
        </div>
      </div>
    </div>
  );
}
