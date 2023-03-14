import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./pagesStyles/ChatBoxUsers.css";



export default function ChatBoxUsers() {
    const History = (e) => {
        e.preventDefault();
        window.history.back();
      };


  return (
    <div className="chatbox_header">
    <div className="chatbox_flex">
    <div className="now_chat">
    <h3>Users Messages</h3>
    </div>
        <div className="now_chat_cancel" onClick={History}>
        <h2>x</h2>
        </div>
    </div> 
    <div className="question_head">
    <Link to="ChatBox">
        <div className="image_head">
            <div className="name_image">
                {/* <img src={} alt="" width={30}/> */}
            </div>
            <div className="name_text">
                <h3>koksi Bassey</h3>
                <h5>I have a question to ask you....</h5>
                <div className='active_dot'></div>
            </div>
            <div className="just_now">
                <h5>Just Now</h5>
            </div>
        </div>
    </Link>
    <Link to="ChatBox">
        <div className="image_head_1">
            <div className="name_image">
                {/* <img src={} alt="" width={30}/> */}
            </div>
            <div className="name_text">
                <h3>Mr Ifi Bassey</h3>
                <h5>I have a question to ask you....</h5>
            </div>
            <div className="just_now">
                <h5>1 minute ago</h5>
            </div>
        </div>
    </Link>
    <Link to="ChatBox">
        <div className="image_head_1">
            <div className="name_image">
                {/* <img src={} alt="" width={30}/> */}
            </div>
            <div className="name_text">
                <h3>Mr Ifi Bassey</h3>
                <h5>I have a question to ask you....</h5>
            </div>
            <div className="just_now">
                <h5>2 minute ago</h5>
            </div>
        </div>
    </Link>
    <Outlet/>

     
    </div>
</div>
  )
}
