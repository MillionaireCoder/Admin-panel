
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";




export default function Sidebar() {
  const {dispatch} = useContext(DarkModeContext)
  
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">Admin</span>
      </Link>
       
      </div>
      <hr/>
      <div className="center">
        <ul>
           <p className="title">MAIN</p>
          <li>
          <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users"  style={{textDecoration: "none"}} >
          <li>
          <Person2OutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
         <Link to="/products" style={{textDecoration: "none"}} >
         <li>
            <StoreMallDirectoryIcon className="icon"/> 
            <span>Products</span>
          </li>
         </Link>
          
          <li>
          <CreditCardIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
          <InsertChartIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
          <SettingsSystemDaydreamIcon className="icon"/>
            <span>System health</span>
          </li>
          <li>
          <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
          <AccountCircleOutlinedIcon className="icon"/>
            <span>Profiles</span>
          </li>
          <li>
          <ExitToAppOutlinedIcon className="icon"/>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}> </div>
      <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
     
      </div>
    </div>
  )
}
