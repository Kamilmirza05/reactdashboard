import PermIdentity from '@mui/icons-material/PermIdentity'
import React from 'react'
import "./User.css"

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="usertTitle">Edit User</h1>
            <button className="userAddButton">create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">mariyooh</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Accounts Detail</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowInfoIcon' />
                        <span className="userShowInfoTitle">mariyooh</span>
                    </div>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowInfoIcon' />
                        <span className="userShowInfoTitle">mariyooh</span>
                    </div>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowInfoIcon' />
                        <span className="userShowInfoTitle">mariyooh</span>
                    </div>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowInfoIcon' />
                        <span className="userShowInfoTitle">mariyooh</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}

