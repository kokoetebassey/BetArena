import React from 'react'
import betlogo from "./images/betlogo.png";
import chatbox from "./images/chatbox-sign.png";
import Ellipse  from "./images/Ellipse 18.png";
import Ellipse1  from "./images/Ellipse 19.png";
import Ellipse2  from "./images/Ellipse 20.png";
import greater  from "./images/greater.svg";
import vector  from "./images/vector 20.png";
import "./pagesStyles/Support.css";
import { Link } from 'react-router-dom';
import Home from '../components/Home';







export default function Support() {
    const History = (e) => {
        e.preventDefault();
        window.history.back();
      };


  return (
    <>
    <div className="overall_header" >
    <div className="overall_nav_head">
        <div className="nav_images_head">
            <div className="bet_logo-image">
                <img src={betlogo} alt="" width={200}/>
            </div>
            <div className="bet_logo_sign" onClick={History} >
                <img  src={chatbox} alt="" width={20} />
            </div>
            <div className="nav_text_head">
                <h1>Hi there</h1>
                <h3>Ask us anything or share your feedback</h3>
            </div>
            <div className="start_conversasion_head">
                <div className="start_conversasion">
                    <h1>Start a Conversation</h1>
                    <div className="start_conversasion_images_head">
                        <div className="start_conversasion_images">
                            <img src={Ellipse} alt="" width={70}/>
                        </div>
                        <div className="start_conversasion_images_2">
                        <img src={Ellipse1} alt="" width={70}/>
                        </div>
                        <div className="start_conversasion_images_3">
                        <img src={Ellipse2} alt="" width={70}/>
                        </div>
                        <div className="start_conversasion_text">
                            <h2>Our usual reply time</h2>
                            <h3>
                            <img src={vector} alt="" width={8}/>
                                Under 15 minutes
                            </h3>
                        </div>
                    </div>
                    <div className="send_us">
                        <Link>
                            <button>Send us a message</button>                           
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_section">
            <div className="search_section_head">
                <div className="search_section">
                    <div className="search_text">
                        <h3>Search for help</h3>
                    </div>
                    <div className="search_input">
                        <input type="text" placeholder="Seach articles" />
                    </div>
                    <div className="suggest_text">
                        <h3>Suggested articles</h3>
                    </div>
                    <div  className="suggested">
                        <Link to="/Support1">
                         <h3>i haven't received my withdrawal! wh... <span className="span1"><img src={greater} alt="" width={5}/></span></h3>                           
                        </Link>
                    </div>
                    <div className="suggested">
                        <Link to="/Support2">                     
                         <h3>What if my withdrawal is delay? <span className="span2"><img src={greater} alt="" width={5}/></span></h3>
                        </Link>
                    </div>
                    <div  className="suggested">
                        <Link to="/Support3">                     
                            <h3>My deposit wasn't credited or received? <span className="span3"><img src={greater} alt="" width={5}/></span></h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    <Home/>
    </>
  )
}
