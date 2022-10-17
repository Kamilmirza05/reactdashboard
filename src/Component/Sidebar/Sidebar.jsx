import "./Sidebar.css"
import LineStyle from '@mui/icons-material/LineStyle';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ui className="sidebarList">
                <Link to="/"className="sidebarListItemLink"><li className="sidebarListItem active"><LineStyle className="sideIcon"/>Home</li></Link>
                <li className="sidebarListItem"><TimelineOutlinedIcon className="sideIcon"/>Analtice</li>
                <li className="sidebarListItem"><TrendingUpOutlinedIcon className="sideIcon"/>Sales</li>
            </ui>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ui className="sidebarList">
            <Link to="/UserList" className="sidebarListItemLink"><li className="sidebarListItem active"><PermIdentityIcon className="sideIcon"/>Users</li></Link>
                <li className="sidebarListItem"><StorefrontIcon className="sideIcon"/>Prodects</li>
                <li className="sidebarListItem"><AttachMoneyIcon className="sideIcon"/>Transaction</li>
                <li className="sidebarListItem"><ReportIcon className="sideIcon"/>Reports</li>
            </ui>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ui className="sidebarList">
                <li className="sidebarListItem active"><EmailOutlinedIcon className="sideIcon"/>Mail</li>
                <li className="sidebarListItem"><DynamicFeedIcon className="sideIcon"/>Feedback</li>
                <li className="sidebarListItem"><ChatBubbleOutlineOutlinedIcon className="sideIcon"/>Message</li>
            </ui>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ui className="sidebarList">
                <li className="sidebarListItem active"><WorkOutlineOutlinedIcon className="sideIcon"/>Manage</li>
                <li className="sidebarListItem"><TimelineOutlinedIcon className="sideIcon"/>Analtice</li>
                <li className="sidebarListItem"><ReportIcon className="sideIcon"/>Repots</li>
            </ui>
        </div>
      </div>
    </div>
  )
}
