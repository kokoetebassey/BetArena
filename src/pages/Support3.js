import React from 'react'
import denies from "./images/denies.svg";
import emogy_1 from "./images/emogy_1.svg";
import emogy_2 from "./images/emogy_2.svg";
import emogy_3 from "./images/emogy_3.svg";
import help from "./images/help.svg";
import { NavLink } from 'react-router-dom';
import Home from '../components/Home';



export default function Support3() {
  const History = (e) => {
    e.preventDefault();
    window.history.back();
  };


  
  return (
    <>
    <div  className="support_1_head">
    <div className="support_lessthan">
      <h3 onClick={History}>x</h3>
    </div>
    <div className="support_withdrawer">
    <h1>My deposit wasn’t credited or recieved? What now?</h1>
      <h5>deposit not credited</h5>
    </div>
    <div className="denies_writting_head">
      <div className="denies_image">
          <img src={denies} alt="" />
      </div>
      <div className="denies_text">
          <h3>Written by Dennis</h3>
          <h3>Updated over a week ago</h3>
      </div>
    </div>
    <p className='pre_text'>
        If your deposit wasn’t credited to your
      account, please confirm if you sent it to
      the correct deposit address. You can do so 
      by going to your <span class="BETARENA">BETARENA</span> Deposit 
      page and checking if the address matches.
    </p>
    <p className='pre_text_1'>
        If you are sure that the address is correct, 
      please click on "Record" and check if your 
      deposit is there. Please wait till it has the
      appropriate number of confirmations.
    </p>
      <p className='pre_text_2'>
        If you don’t see your deposit’s transaction
      ID on the Deposits page, please get in touch 
      with us by messaging us. Please make sure to 
      mention the transaction ID in the message. 
      Otherwise, we cannottrace your missing
       deposit
      </p>

    <hr className='bottom_line' />
    <div className="support_questions">
      <h3>Did this answer your question?</h3>
    </div>
    <div className="emogy_head">
      <div className="emogy_1">
          <img src={emogy_1} alt="" />
      </div>
      <div className="emogy_2">
          <img src={emogy_2} alt="" />
      </div>
      <div className="emogy_3">
          <img src={emogy_3} alt="" />
      </div>
    </div>
    <div className="help_center">
        <NavLink>
          <img src={help} alt="" />
        </NavLink>
    </div>
    </div>
    <Home/>
    </>
  )
}
