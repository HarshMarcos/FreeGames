import React from 'react'
import './mainContact.css'
import SocialIcons from '../globals/socialicons'
import EmailContainer from '../globals/emailContainer'

const MainContact = () => {
    return (
        <div className='contact-container'>
            <EmailContainer />
            <div className='left-column'>
                <img src="/logo.png" alt="" />
                <h2>Need Some Help?</h2>
                <p>Check our social media</p>
                <SocialIcons />
            </div>
        </div>
    )
}

export default MainContact