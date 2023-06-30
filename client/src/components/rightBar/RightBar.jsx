import React from 'react'
import  "./rightBar.scss";
import Dp from "../../assests/dp1-img.jpg";
import Dp1 from "../../assests/dp2-img.jpg";

const RightBar = () => {
  return (
    <div className='rightBar'>
        <div className='container'>
          <div className='item'>
            <span> Suggestions For You </span>
            <div className='user'>
              <div className='userInfo'>
                <img src={Dp1} alt='dp-pic' />
                <span> Jane Doe </span>
              </div>

              <div className='buttons'>
                <button> Follow </button>
                <button> Dismiss </button>
              </div>
            </div>
            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />
                <span> Mark Oliver </span>
              </div>

              <div className='buttons'>
                <button> Follow </button>
                <button> Dismiss </button>
              </div>
            </div>
          </div>

          {/* Partitions Here: */}

          <div className='item'>
            <span> Latest Activities </span>
            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />

                <p>
                <span> Aman Saxena </span> posted a new picture 
                </p>
              </div>
              <span> 1 hour ago </span>
            </div>
            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />

                <p>
                <span> KD Saxena </span> liked your picture 
                </p>
              </div>
              <span> 30 mins ago </span>
            </div>
            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />

                <p>
                <span> Jane Doe </span> changed their profile picture 
                </p>
              </div>
              <span> 44 seconds ago </span>
            </div>
           
            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />

                <p>
                <span> Shaurya Suar </span> messaged you 
                </p>
              </div>
              <span> 10 min ago </span>
            </div>
          </div>

          <div className='item'>
            <span> Online Friends </span>

            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />

                <div className='online' />
                <span> Jane Doe </span>
              </div>
            </div>

            <div className='user'>
              <div className='userInfo'>
                <img src={Dp} alt='dp-pic' />
                <div className='online' />

                <span> Mark Oliver </span>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default RightBar