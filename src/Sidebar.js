import logo from './logo1.png';
import React from 'react'
import './sidebar.css';
import Options from './Options';
import { BiCog,BiToggleLeft,BiCompass,BiDownload,BiOutline,BiLogOutCircle,BiPurchaseTag,BiTv,BiUser,BiUserPlus} from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="wrapper">
            <div className="logo">
                    <img src={logo} alt="" />
                    <h2><span>flix</span></h2>
                </div>
                <h3>Menu</h3>
                <Options title="Browse" icon={<BiCompass/>}/>
                <Options title="WatchList"icon={<BiTv/>} />
                <Options title="Coming Soon" icon={<BiOutline/>}/>
                <Options title="Downloads" icon={<BiDownload/>}/>
                <h3>Accounts</h3>
                <Options title="Parasite 1" icon={<BiUser/>}/>
                <Options title="Parasite 2" icon={<BiUserPlus/>}/>
                <h3>General</h3>
                <Options title="Settings" icon={<BiCog />}/>
                <Options title="Dark Mode" icon={<BiToggleLeft/>}/>
                <Options title="Pricing" icon={<BiPurchaseTag/>} />
                <Options title="Log Out" icon={<BiLogOutCircle/>}/>
            </div>    
    </div>
  )
}

export default Sidebar