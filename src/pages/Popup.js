import React from 'react'
import "./pagesStyles/Popup.css";
import download from "./images/download.png";
import { Link } from 'react-router-dom';
import Home from '../components/Home';




export default function Popup() {
    const History = (e) => {
        e.preventDefault();
        window.history.back();
      };


  return (
    <div className="pop_cont">
    <div className="popup_container">
      <div className="popup_container_flex">
        <div className="imgs">
          <img src={download} alt="" width={300}/>
        </div>
        <div className="close">
          <h3 onClick={History}>x</h3>
        </div>
      </div>
      <div className="button">
        <Link to="/signup">
            <button className="popup_button"></button>
        </Link>       
      </div>
     <div className="para">
        <p className="first"><span className='span_1'>+50</span>Arkerman <span className='span_2'>+50</span></p>
        <div className="second_box_flex">
            <p className="second">Spheralimin <span className='span_3'>+50</span></p>
            <p className="third">Spheralimin</p>
        </div>
      </div>
    </div>
    <Home />
    </div>
  )
}
