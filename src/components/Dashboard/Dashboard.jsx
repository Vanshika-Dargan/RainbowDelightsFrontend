import React, { useState } from 'react'
import "./Dashboard.css";
import { Product } from './Product/Product';
import { Sidebar } from './Sidebar/Sidebar';

export default function Dashboard() {
    const [isProductClicked, setIsProductClicked] = useState(false);
    

    return (
        <div className='flex'>
            <Sidebar 
                setIsProductClicked={setIsProductClicked} />
            {isProductClicked ?
                <Product />
                : <div>Default content </div>
            }

        </div>
    )
}
