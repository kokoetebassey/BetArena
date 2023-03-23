import React from "react";

export default function Crashcount(crash) {
  return (
    <div className="crashcount-container-cover">
      <div className="crashcount-container">
        <h1>{crash.crash}</h1>
        <h3>&#10006;</h3>
      </div>

      <div className="lineCrash">
        <svg
          fill="none"
          width="580px"
          height="360px"
          viewBox="50 70 800 560"
          opacity="1"
        >
          <path
            strokeWidth="5"
            // strokeHeight="1000"
            fill="none"
            stroke="rgba(173, 134, 5, 0.6)"
            strokemiterlimitt="10"
            d="M0 486 C 0 460 0.07681069704984 595   960.2374082 6.5406103"
          />
        </svg>
      </div>
      <div className="lineCrash-mobile">
        <svg
          fill="none"
          width="330px"
          height="165px"
          viewBox="35 65 900 400"
          opacity="1"
        >
          <path
            strokeWidth="5"
            // strokeHeight="1000"
            fill="none"
            stroke="rgba(173, 134, 5, 0.6)"
            strokemiterlimitt="10"
            d="M0 480 C 0 455 0.07681069704984 595   960.2374082 6.5406103"
          />
        </svg>
      </div>
    </div>
  );
}
