import React from 'react';
import './Header.css';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';


const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className="header_logo"
                src='https://i.dlpng.com/static/png/6184865-this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771_preview.png'
                alt="tinder logo" />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>

        </div>
    );
};

export default Header;