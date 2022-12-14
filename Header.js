import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            
            <Link to="/">

            <img className="header_icon" src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg"></img>

            </Link>

            <div className="header_center">

            <input type="text"></input>
            <SearchIcon />

            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
