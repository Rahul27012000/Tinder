import React from 'react'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="Header">
            <IconButton>
            <AccountCircleIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img className="header_logo" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/21-tinder-128.png" alt="TinderLogo"/>
            <IconButton>
           <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
            
        </div>
    )
}

export default Header

