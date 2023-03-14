
// import React, { useState } from 'react'
import "./pagesStyles/ChatBox.css";
import grater from "./images/grater.svg";
import warn from "./images/warn.svg";
import cup from "./images/cup.svg";
import cancel1 from "./images/cancel1.svg";
import firthicon from "./images/first_icon.svg";
import secondicon from "./images/second_icon.svg";
import thirdicon from "./images/third_icon.svg";
import userImage from "./images/userImage.svg";





export default function ChatBox() {






    const History = (e) => {
        e.preventDefault();
        window.history.back();
      };


  return (
    <div className="chatbox_header">
        <div className="chatbox_fix">
                <div className="nav_flex">
                    <div className="global_text">
                        <h2>Global</h2>                          
                    </div>
                    <div className="global_grater_sign" onClick={History}>
                        <img src={grater} alt="" width={10}/>                         
                    </div>
                    <div className="global_warn">
                        <img src={warn} alt="" width={20}/>                                                   
                    </div>
                    <div className="global_cup">
                        <img src={cup} alt="" width={20}/>                                                   
                    </div>
                    <div className="global_cancel">
                        <img src={cancel1} alt="" width={20}/>                                                   
                    </div>
                </div>
                <div className="chatBody_head">
                    <div className="user_text_flex">
                        <img src={userImage}alt="user" width={50}/>
                        <div className="user_time_flex">
                            <h3 className="user_time">Lorem  <span className='span_time'>12:00</span>  </h3>
                            <h3 className="user_text_1">Hello</h3>
                        </div>
                    </div>
                    <div className="admin_text_flex">
                        <img src={userImage}alt="admin" width={50}/>
                        <div className="user_time_flex">
                            <h3 className="user_time">Lorem  <span className='span_time'>12:00</span>  </h3>
                            <h3 className="user_text_1">thank you, what's the problem all about?</h3>
                         </div>   
                    </div>   
                    <div className="user_text">
                        <img src={userImage}alt="user" width={50}/>
                        <div className="user_time_flex1">
                            <h3 className="user_time">Lorem  <span className='span_time'>12:00</span>  </h3>
                            <h3 className="user_text_1">Hello, there's problem on ground</h3>
                        </div>              
                    </div>              
                </div>




                <div className="chatBody_header_input">
                    <div className="input_message">
                        <textarea    name="messege" id="messege" cols="30" rows="10" placeholder='Enter your text here'></textarea>
                    </div>
                    <div className="icon_flex">
                        <div className="first_icon">
                            <img src={firthicon} alt="first" width={15}/>
                        </div>
                        <div className="second_icon">
                            <img src={secondicon} alt="second" width={15}/>
                        </div>
                        <div className="third_icon">
                            <img src={thirdicon} alt="third" width={10}/>
                        </div>
                    </div>
                    </div>                 
                </div>
            </div>
      
    )
}
