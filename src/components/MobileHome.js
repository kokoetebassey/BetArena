import React from "react";
import "./styles/mobile.css";
import MobileWin from "./MobileWin";
import MobileBaSection from "./MobileBaSection";
import MobileGame from "./MobileGame";
import MobileMainSlide from "./MobileMainSlide";
import MobileSearch from "./MobileSearch";
import MobileRecent from "./MobileRecent";
import MobileProviders from "./MobileProviders";
import Footer from "./Footer";

export default function MobileHome() {
  return (
    <div className="mobile-home-display">
      <MobileMainSlide />

      <div className="mobile-cover">
        <MobileSearch />
        <MobileWin />

        <div className="mobile-lobby">
          <div className="mobile-lobby-container active-text-style active-text">
            <div className="mobile-lobby-text1">
              <h3>Lobby</h3>
            </div>
          </div>

          <div className="mobile-lobby-text2">
            <h3 className="active-text">Original</h3>
          </div>

          <div className="mobile-lobby-text3">
            <h3 className="active-text">Slots</h3>
          </div>

          <div className="live-text">
            <div className="mobile-lobby-text4">
              <h3>Live casino</h3>
            </div>
          </div>

          <div className="table-text">
            <div className="mobile-lobby-text5">
              <h3>Table Game</h3>
            </div>
          </div>

          <div className="game-text">
            <div className="mobile-lobby-text6">
              <h3>Game Show</h3>
            </div>
          </div>
        </div>

        <MobileBaSection />
        <MobileProviders />
        <MobileGame />
        <MobileRecent />
      </div>

      <Footer />
    </div>
  );
}
