import React, { useState } from 'react'
import '../Pop up/styles/chatroom.css'
import global from '../images/nwimages/global.svg'
import klose from '../images/nwimages/klose.svg'
import search from '../images/nwimages/search.svg'
import toy from '../images/nwimages/toy.svg'
import oops from '../images/nwimages/oops.svg'
import ash2f from '../images/nwimages/2fhash.svg'
import chat from '../images/nwimages/chatcircle.svg'
import friends from '../images/nwimages/friends.svg'
import { NavLink, Outlet } from 'react-router-dom'

const Request = () => {
    const [switcch,setSwitch] = useState(0)
    const [change,setChange] = useState(0)

    function functionSwitch(index){
        setSwitch(index)
    }
    function functionChange(index){
        setChange(index)
    }

  return (
    <div className='chat-room-container' id='chat-room-cont'>
      <div className='chat-room-container-inner'>

        <div className='chat-room-head'>
            <div className='chat-room-h-left'>
                <h1>Chat room</h1>
            </div>
            <div className='chat-room-h-right'>
                <img src={global} alt='' className='glob' />
                <NavLink to='/options'className='options'>
                <h1>Options</h1>
                </NavLink>
                <NavLink to='/' className='kloss'>
                    <div></div>
                <img src={klose} alt='' className='klos' />
                </NavLink>
            </div>
        </div>

        <div className='search-div' id='friendrequest'>
            <div className='search-div-inner'>
                <img src={search} alt='search' />
                <input type='text' placeholder='Search Name' />
            </div>
            <div className='friend-request'>
                <h1>Friend Request</h1>
            </div>
        </div>

        <div className='big-part-div'>
            {change === 1 && (
                <div className='left-div-in-big-div'>
                <div className='left-div-switch'>
                    <div className='switch-left'>
                        <div onClick={() => functionSwitch(0)}
                        className={`switch-left1 ${switcch === 0 ? 'active' : ''}`}
                        >
                            <h1>All chats</h1>
                        </div>
                    </div>
                    <div className='switch-right'>
                        <div 
                         onClick={() => functionSwitch(1)}
                         className={`switch-left1 ${switcch === 1 ? 'active' : ''}`}
                        >
                            <h1>Stranger</h1>
                        </div>
                    </div>
                </div>
                {switcch === 0 && (
                    <>
                        <div className='left-cont'>
                                <div className='left-dol-bottom'>
                                    <img src={toy} alt='' />
                                </div>
                                <div className='left-oops-bottom'>
                                    <img src={oops} alt='' />
                                </div>
                        </div>
                    </>
                )}
                {switcch === 1 && (
                    <>
                        <div className='left-cont'>
                                <div className='left-dol-bottom'>
                                    <img src={toy} alt='' />
                                </div>
                                <div className='left-oops-bottom'>
                                    <img src={oops} alt='' />
                                </div>
                        </div>
                    </>
                )}
            </div>
            )}

            {change === 0 && (
                <div className='left-div-in-big-div' id='friendss'>
                     <div className='left-div-switch'>
                        <div className='left-div-switch-left'>
                            <img src={friends} alt='' />
                            <div className='left-div-switch-in'>
                                <h5>Friend Request</h5>
                                <h6>Friend Request Received</h6>
                            </div>
                        </div>
                     </div>
                </div>
            )}
            <Outlet />
            <div className='right-div-in-big-div'>
            
            <div className='inner-inner-div'>
                <img src={toy} alt='' className='toy' />
                <img src={oops} alt='' className='oops' />
            </div>
                
            </div>
        </div>

        <div className='last-div-black'>
            <div className='last-switch'>
                <div className='last-switch-left'>
                   <div
                    onClick={() => functionChange(0)}
                    className={`last-switch-left1 ${change === 0 ? 'active' : ''}`}
                   >
                   <img src={ash2f} alt='' />
                    <h1>Friends</h1>
                   </div>
                </div>
                <div className='last-switch-right'>
                    <div
                     onClick={() => functionChange(1)}
                     className={`last-switch-left1 ${change === 1 ? 'active' : ''}`}
                    >
                    <img src={chat} alt='' />
                    <h1>Messages</h1>
                    </div>
                </div>
            </div>
        </div>

      </div>
      
    </div>
  )
}

export default Request
