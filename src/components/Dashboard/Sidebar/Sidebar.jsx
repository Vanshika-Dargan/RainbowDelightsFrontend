import React, { useState } from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "../Dashboard.css";
import { useRef } from 'react';

export const Sidebar = ({setIsProductClicked}) => {
    const [isDashboardClicked, setIsDashboardClicked] = useState(false);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    function defaultClickHandler() {
        inputRef1.current.style.color = 'white';
        inputRef2.current.style.color = '#6A7187';
        setIsProductClicked(false)
    }

    function productClickHandler() {
        inputRef2.current.style.color = 'white';
        inputRef1.current.style.color = '#6A7187';
        setIsProductClicked(true);
    }

    return (
        <>
            <div className='w-1/4 h-full bg-color-1 self-stretch overflow-auto'>
                <div className='logo-font'>Rainbow delights</div>
                <div className='color-1 mt-10'>MENU</div>
                <div className='flex das ml-5 mt-2' onClick={() => { setIsDashboardClicked(prev => !prev) }}>
                    <AiOutlineDashboard className='das-icon-1 ml-5 mr-2 mt-1' />
                    Dashboard
                    {isDashboardClicked ?
                        <IoIosArrowUp className='mt-2 ml-auto mr-4 down-up-icon' />
                        : <IoIosArrowDown className='mt-2 ml-auto mr-4 down-up-icon' />
                    }
                </div>
                {isDashboardClicked &&
                    <div className='dropdown-items flex flex-col'>
                        <span
                            ref={inputRef1}
                            onClick={defaultClickHandler}
                            className='dropdown-item ml-24 mt-1'>
                            Default
                        </span>
                        <span
                            ref={inputRef2}
                            onClick={productClickHandler}
                            className='dropdown-item ml-24'>
                            Products
                        </span>
                    </div>
                }
            </div>
        </>
    )
}
