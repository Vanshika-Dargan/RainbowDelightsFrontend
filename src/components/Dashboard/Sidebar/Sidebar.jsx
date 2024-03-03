import React, { useState } from 'react'
import "../Dashboard.css";
import logo from '../../../assets/rainbow_delight.svg';
import { ImParagraphLeft } from "react-icons/im";
import SidenavContext from "./SidenavContext.jsx";


export const Sidebar = ({ setIsProductClicked ,setIsChatboxClicked }) => {

    const [sidenavStatus,changeSidenav]=useState(true);




    function close_sidebar(){
        if(sidenavStatus){
            changeSidenav(false );
            document.getElementById("logo").style.display="none";
            let sidenav=document.getElementById("default-sidebar");
            sidenav.classList.add("sidenav_animate_close");
            document.getElementsByClassName("logo-font")[0].style.justifyContent="end";
            sidenav.classList.remove("sidenav_animate_open");
            sidenav.classList.remove("sidenav_width")


        }else{
            let sidenav=document.getElementById("default-sidebar");
            sidenav.classList.add("sidenav_animate_open");
            sidenav.classList.remove("sidenav_animate_close");
            document.getElementById("default-sidebar").classList.add("sidenav_width");
            setTimeout(() => {
                document.getElementById("logo").style.display="";
                changeSidenav(true);
                document.getElementsByClassName("logo-font")[0].style.justifyContent="space-between";

            }, 300);
        }

    }

    return (
        <>
            <aside id='default-sidebar' className='sidenav_width top-0 left-0 z-40 siderbar-color overflow-auto'>
                <div className='logo-font flex'>
                    <img className="logo m-5" src={logo}/>
                    <div onClick={close_sidebar} className={"close_icon"}><ImParagraphLeft  style={{fontSize:"20px"}}/></div>
                </div>
                {sidenavStatus ?(
                    <SidenavContext setIsProductClicked={setIsProductClicked} setIsChatboxClicked={setIsChatboxClicked} />
                ):<></>}
            </aside>
        </>
    )
}
