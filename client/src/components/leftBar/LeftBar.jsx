import React, { useContext } from 'react'
import "./leftBar.scss";
import Friends from "../../assests/frnds-img.png";
import Groups from "../../assests/groups-img.png";
import Memories from "../../assests/memories-img.png"
import Watch from "../../assests/watch-img.png";
import Market from "../../assests/marketplace-img.png"
import Img from "../navbar/dp-img.jpg";
import Sms from "../../assests/sms-img.png";
import Video from "../../assests/video-img.png";
import Gaming from "../../assests/gaming-img.png";
import Gallery from "../../assests/gallery-img.png";
import Events from "../../assests/events-img.png";
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <div className='leftBar'>
        <div className='container'>
            <div className='menu'>
                <div className='user'>
                    <img src={currentUser.profilePic} alt='icon-img' />
                    <span> {currentUser.name} </span>
                </div>

                <div className='item'>
                    <img src={Friends} alt='icon-img' />
                    <span> Friends </span>
                </div>
                <div className='item'>
                    <img src={Groups} alt='icon-img' />
                    <span> Groups </span>
                </div>
                <div className='item'>
                    <img src={Market} alt='icon-img' />
                    <span> Marketplace </span>
                </div>
                <div className='item'>
                    <img src={Watch} alt='icon-img' />
                    <span> Watch </span>
                </div>
                <div className='item'>
                    <img src={Memories} alt='icon-img' />
                    <span> Memories </span>
                </div>
            </div>

            <hr />

            <div className='menu'>
                <span> Your Shortcuts </span>
            <div className='item'>
                    <img src={Events} alt='icon-img' />
                    <span> Events </span>
                </div>
            <div className='item'>
                    <img src={Gaming} alt='icon-img' />
                    <span> Gaming </span>
                </div>
            <div className='item'>
                    <img src={Gallery} alt='icon-img' />
                    <span> Gallery </span>
                </div>
            <div className='item'>
                    <img src={Video} alt='icon-img' />
                    <span> Videos </span>
                </div>
            <div className='item'>
                    <img src={Sms} alt='icon-img' />
                    <span> Messages </span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default LeftBar