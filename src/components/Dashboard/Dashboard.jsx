import React, { useState } from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Dashboard() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    return (
        <div className='flex'>
            <div className='w-1/4 bg-color-1'>
                <div className='logo-font'>Rainbow delights</div>
                <div className='color-1 mt-10'>MENU</div>
                <div className='flex das ml-5 mt-2'>
                    <AiOutlineDashboard className='das-icon-1 ml-5 mr-2 mt-1'/>
                    Dashboard
                    <IoIosArrowDown className='mt-2 ml-auto mr-4 down-icon'/>
                </div>
            </div>
            <div>
                Dashboard content
            </div>
        </div>
    )
}
