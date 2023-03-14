import React from "react";

export default function CrashTime(crash) {
  return (
    <div className="crash-time">
      <div className="crash-time-container">
        <h1>
          Start in {crash.crash} <span>s</span>
        </h1>
      </div>
    </div>
  );
}
