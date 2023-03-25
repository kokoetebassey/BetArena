import React from "react";
import search from "../images/search icon.svg";

export default function MobileSearch() {
  return (
    <div>
      <div className="mobile-home-display-search">
        <div className="mobile-search">
          <div className="mobile-search-content">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Game name | Provider | Category Tag"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
