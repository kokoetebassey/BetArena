import React from 'react'
import '../Pop up/styles/options.css'
import arrow from '../images/nwimages/arrowb.svg'
import klose from '../images/nwimages/klose.svg'
import { NavLink } from 'react-router-dom'

const Options = () => {
  return (
    <div className='main-option-background'>

<div className='options-main-container'>
      <div className='options-main-con-inner'>

        <div className='options-head'>
            <div className='options-head-left'>
              <NavLink to='/chat' className='options-head-left'>
              <img src={arrow} alt='' className='ahrwo' />
              <h1>Privacy</h1>
              </NavLink>
                
            </div>
            <NavLink to='/'>
            <div className='options-head-right'>
                <img src={klose} alt='' className='kulose' />
            </div>
            </NavLink>
        </div>

        <div className='options-bottom-cont'>
            <div className='options-bottom-first-div'>
                <div className='h1-p-text'>
                    <h1>Hide my gameing data on profile</h1>
                    <p>Even if hidden, your avatar and username are always visible in chatrooms</p>
                </div>
                <div className='toggul'>
                    <label className='tuggul'>
                        <input type='checkbox' name='checked' />
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
            <div className='options-bottom-first-div'>
                <div className='h1-p-text' id='p-text'>
                    <h1>Hide my username from public lists</h1>
                    <p>Even if hidden, your avatar and username are always visible in chatrooms</p>
                </div>
                <div className='toggul'>
                    <label className='tuggul'>
                        <input type='checkbox' name='checked' />
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
            <div className='options-bottom-first-div'>
                <div className='h1-p-text'  id='p-textt'>
                    <h1>Hide my online presence in private chat</h1>
                    {/* <p>Even if hidden, your avatar and username are always visible in chatrooms</p> */}
                </div>
                <div className='toggul'>
                    <label className='tuggul'>
                        <input type='checkbox' name='checked' />
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
            <div className='options-bottom-first-div'>
                <div className='h1-p-text'  id='p-textt'>
                    <h1>Allow private messages from strangers</h1>
                    {/* <p>Even if hidden, your avatar and username are always visible in chatrooms</p> */}
                </div>
                <div className='toggul'>
                    <label className='tuggul'>
                        <input type='checkbox' name='checked' />
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
            <div className='options-bottom-first-div'>
                <div className='h1-p-text'  id='p-test'>
                    <h1>Refuse any new friend request</h1>
                    {/* <p>Even if hidden, your avatar and username are always visible in chatrooms</p> */}
                </div>
                <div className='toggul'>
                    <label className='tuggul'>
                        <input type='checkbox' name='checked' />
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
            <div className='options-bottom-first-div'>
                <div className='h1-p-text'  id='p-tesst'>
                    <h1>Refuse tip from strangers</h1>
                    {/* <p>Even if hidden, your avatar and username are always visible in chatrooms</p> */}
                </div>
                <div className='toggul'>
                    <label className='tuggul'>
                        <input type='checkbox' name='checked' />
                        <span className='slider round'></span>
                    </label>
                </div>
            </div>
        </div>
        


      </div>
    </div>


    </div>
 
  )
}

export default Options
