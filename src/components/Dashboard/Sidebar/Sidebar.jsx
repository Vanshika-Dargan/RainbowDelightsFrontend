import React, { useState } from 'react'
import "../Dashboard.css";
import { GiShop } from "react-icons/gi";
import { IoIosChatbubbles } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";

export const Sidebar = ({ setIsProductClicked ,setIsChatboxClicked }) => {

    function handleLiMouseOver(e){
        let element = e.currentTarget;
        element.style.backgroundColor='#374151';
        element.style.borderRadius='5px';
        element.style.cursor='pointer';
        let svg = element.childNodes[0];
        svg.style.color='white';
    }

    function handleLiMouseLeave(e){
        let element = e.currentTarget;
        element.style.backgroundColor='inherit';
        let svg = element.childNodes[0];
        svg.style.color='#9CA3AF';
    }

    return (
        <>
            <aside id='default-sidebar' className='w-1/5 top-0 left-0 z-40 siderbar-color overflow-auto'>
                <div className='logo-font'>Rainbow delights</div>
                <div>
                    <ul>
                        <li className='mb-1 text-lg' >
                            <div className='flex items-center p-2 ml-6 mr-2' onMouseOver={handleLiMouseOver} onMouseLeave={handleLiMouseLeave}>
                                <svg className="w-5 h-5 das-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className='ml-2'>Dashboard</span>

                            </div>
                        </li>
                        <li className='mb-1 text-lg'>
                            <div className='flex items-center p-2 ml-6 mr-2' onMouseOver={handleLiMouseOver} onMouseLeave={handleLiMouseLeave} onClick={()=> {setIsProductClicked(true);setIsChatboxClicked(false)}}>
                                <svg className="w-5 h-5 das-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className='ml-2'>Products</span>
                            </div>
                        </li>
                        <li className='mb-1 text-lg'>
                            <div className='flex items-center p-2 ml-6 mr-2' onMouseOver={handleLiMouseOver} onMouseLeave={handleLiMouseLeave}>
                                <GiShop className='das-icons'/>
                                <span className='ml-2'>Custom Products</span>
                            </div>
                        </li>
                        <li className='mb-1 text-lg'>
                            <div className='flex items-center p-2 ml-6 mr-2' onMouseOver={handleLiMouseOver} onMouseLeave={handleLiMouseLeave}>
                                <svg className="w-5 h-5 das-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className='ml-2'>Users</span>
                            </div>
                        </li>
                        <li className='mb-1 text-lg'>
                            <div className='flex items-center p-2 ml-6 mr-2' onMouseOver={handleLiMouseOver} onMouseLeave={handleLiMouseLeave} onClick={()=>{setIsChatboxClicked(true);setIsProductClicked(false)}}>
                                <IoIosChatbubbles className='das-icons'/>
                                <span className='ml-2'>Chat</span>
                                <span className='ml-auto mr-4 text-sm px-2 bg-cyan-800 rounded-full'>3</span>
                            </div>
                        </li>
                        <li className='mb-1 text-lg'>
                            <div className='flex items-center p-2 ml-6 mr-2' onMouseOver={handleLiMouseOver} onMouseLeave={handleLiMouseLeave}>
                                <BsBoxArrowLeft className='das-icons text-lg'/>
                                <span className='ml-2'>Sign out</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
