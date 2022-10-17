import React from 'react'
import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
         <div className="topbarWrapper">
           <div className="topLeft">
              <span className="logo">DashBoard</span>
           </div>
           <div className="topRight">
               <div className="topIconContainer">
                  <NotificationsNoneIcon/>
                  <span className="topIconBadge">2</span>
               </div>
               <div className="topIconContainer">
                  <LanguageIcon/>
                  <span className="topIconBadge">2</span>
               </div>
               <div className="topIconContainer">
                  <SettingsIcon/>
               </div>
               <img src="https://images.pexels.com/photos/12365122/pexels-photo-12365122.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="topAvatar" />
           </div>
         </div>  
    </div>
  )
}
