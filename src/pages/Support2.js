import React from 'react'
import denies from "./images/denies.svg";
import emogy_1 from "./images/emogy_1.svg";
import emogy_2 from "./images/emogy_2.svg";
import emogy_3 from "./images/emogy_3.svg";
import help from "./images/help.svg";
import { NavLink } from 'react-router-dom';
import Home from '../components/Home';




export default function Support2() {
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
    <h1>What if my withdrawal is delayed?</h1>
      <h5>withdrawal delayed</h5>
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
        Before you contact us, please make 
      sure that you have waited at least
      4 hours.Go to the Withdrawal page and 
      check if a transaction ID has been 
      allocated to your withdrawal. If you 
      see a long alphanumeric transaction ID, 
      that means the transaction has been 
      processed from our end.
    </p>
    <p className='pre_text_1'>
        If you haven’t received the transaction, 
      please copy the transaction ID and send a 
      screenshot to your receiving wallet.
    </p>
      <p className='pre_text_3'>
      In the case of unconfirmed transactions, 
      please understand that we have no 
      control over the speed of the network. 
      Unfortunately, <span class="BETARENA">BETARENA</span> does not control 
      or influence the network speed in 
      any way, therefore we cannot speed up 
      or make the transaction confirm faster.
      </p>
      <p className='pre_text_2'>
      Waiting is the only possible solution. 
      Most of the times, these stuck transactions
      clear in 24 to 48 hours. However, it could 
      take more. If you are confident that 
      there’s something wrong, please contact us. 
      </p>

    <hr className='bottom_line'/>
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
