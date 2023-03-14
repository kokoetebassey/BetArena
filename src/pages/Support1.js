import React from 'react'
import denies from "./images/denies.svg";
import emogy_1 from "./images/emogy_1.svg";
import emogy_2 from "./images/emogy_2.svg";
import emogy_3 from "./images/emogy_3.svg";
import help from "./images/help.svg";
import { NavLink } from 'react-router-dom';
import "./pagesStyles/Support1.css";
import Home from '../components/Home';






export default function Support1() {
  


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
    <h1>I haven’t received my withdrawal! What now?</h1>
    <h5>withdrawal not received</h5>
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
        Please go to your Withdrawals page
        and find the transaction ID related 
        to your withdrawal. This transaction 
        ID is a receipt of the payment we made.
        A transaction ID can be searched on any
        public, third-party block explorer and 
        verified independently.
    </p>
    <p className='pre_text_1'>
        In majority of the missing withdrawal 
        cases, the problem is at the receiving
        wallet’s end.
    </p>
      <p className='pre_text_2'>
        Please copy the transaction ID and contact
        the support of your receiving wallet along 
        with the transaction ID.
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
