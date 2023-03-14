import { useState } from "react";

import lobby from "../images/lobby.png";
import dice from "../images/dice img.png";
import slot from "../images/slot img.png";
import live from "../images/live img.png";
import table from "../images/table_game.png";
import game from "../images/game_show.png";

export default function LobbyRoute({ HandleLobbyRoute }) {
  const [styleRoute, setStyleRoute] = useState("lobby_container");
  const [styleRoute2, setStyleRoute2] = useState("lobby_content");
  const [styleRoute3, setStyleRoute3] = useState("lobby_content");
  const [styleRoute4, setStyleRoute4] = useState("lobby_content");
  const [styleRoute5, setStyleRoute5] = useState("lobby_content");
  const [styleRoute6, setStyleRoute6] = useState("lobby_content");

  const HandleLobby = (e) => {
    HandleLobbyRoute(e);
    if (e === 1) {
      setStyleRoute("lobby_container");
      setStyleRoute2("lobby_content");
      setStyleRoute3("lobby_content");
      setStyleRoute4("lobby_content");
      setStyleRoute5("lobby_content");
      setStyleRoute6("lobby_content");
    } else if (e === 2) {
      setStyleRoute("lobby_content");
      setStyleRoute2("lobby_container");
      setStyleRoute3("lobby_content");
      setStyleRoute4("lobby_content");
      setStyleRoute5("lobby_content");
      setStyleRoute6("lobby_content");
    } else if (e === 3) {
      setStyleRoute("lobby_content");
      setStyleRoute2("lobby_content");
      setStyleRoute3("lobby_container");
      setStyleRoute4("lobby_content");
      setStyleRoute5("lobby_content");
      setStyleRoute6("lobby_content");
    } else if (e === 4) {
      setStyleRoute("lobby_content");
      setStyleRoute2("lobby_content");
      setStyleRoute3("lobby_content");
      setStyleRoute4("lobby_container");
      setStyleRoute5("lobby_content");
      setStyleRoute6("lobby_content");
    } else if (e === 5) {
      setStyleRoute("lobby_content");
      setStyleRoute2("lobby_content");
      setStyleRoute3("lobby_content");
      setStyleRoute4("lobby_content");
      setStyleRoute5("lobby_container");
      setStyleRoute6("lobby_content");
    }else{
      setStyleRoute("lobby_content");
      setStyleRoute2("lobby_content");
      setStyleRoute3("lobby_content");
      setStyleRoute4("lobby_content");
      setStyleRoute5("lobby_content");
      setStyleRoute6("lobby_container");
    }
  };

  return (
    <div>
      <div className="lobby">
        <div className={styleRoute} onClick={() => HandleLobby(1)}>
          <div className="lobby_img">
            <img src={lobby} alt="lobby" width={"25px"} />
          </div>
          <div className="lobby_text">
            <h3>Lobby</h3>
          </div>
        </div>

        <div className={styleRoute2} onClick={() => HandleLobby(2)}>
          <div className="lobby_img">
            <img src={dice} alt="lobby" width={"35px"} />
          </div>
          <div className="lobby_text">
            <h3>Original</h3>
          </div>
        </div>

        <div className={styleRoute3} onClick={() => HandleLobby(3)}>
          <div className="lobby_img">
            <img src={slot} alt="lobby" width={"35px"} />
          </div>
          <div className="lobby_text">
            <h3>Slots</h3>
          </div>
        </div>

        <div className={styleRoute4} onClick={() => HandleLobby(4)}>
          <div className="lobby_img">
            <img src={live} alt="lobby" width={"35px"} />
          </div>
          <div className="lobby_text">
            <h3>Live casino</h3>
          </div>
        </div>

        <div className={styleRoute5} onClick={() => HandleLobby(5)}>
          <div className="lobby_img">
            <img src={table} alt="lobby" width={"35px"} />
          </div>
          <div className="lobby_text">
            <h3>Table Game</h3>
          </div>
        </div>

        <div className={styleRoute6} onClick={() => HandleLobby(6)}>
          <div className="lobby_img">
            <img src={game} alt="lobby" width={"35px"} />
          </div>
          <div className="lobby_text">
            <h3>Game Show</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
