import React, { useContext } from 'react';
import Img from "./dp-img.jpg"
import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className='left'>
            <Link to = "/" style={{textDecoration: "none"}}>
                <span> Socially </span>
            </Link>
            <HomeOutlinedIcon />
            {
                darkMode ?
            (<WbSunnyOutlinedIcon onClick = {toggle} />) :
             (<NightlightRoundOutlinedIcon onClick = {toggle} />)
            }
            <GridViewOutlinedIcon />
            <div className='search'>
                <SearchOutlinedIcon />
                <input type='text' placeholder='Search...' />
            </div>
        </div>
        <div className='right'>
            <PersonOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className='user'>
            <img src={currentUser.profilePic} alt='userImage'/>
                <span> {currentUser.name} </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar