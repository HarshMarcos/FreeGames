import React from 'react'
import { Link } from 'react-router-dom'
import './socialicons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SocialIcons = () => {
    return (
        <div className="social-icons">
            <FontAwesomeIcon icon="fa-brands fa-github" style={{ color: "#fbfaff", }} />
            <Link className="fa-brands fa-linkedin" rel='noreferrer' target="_blank">LinkedIn</Link>
            <Link className="fa-brands fa-instagram" rel='noreferrer' target="_blank">Instagram</Link>
        </div>
    )
}

export default SocialIcons