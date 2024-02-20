import React, { useState } from 'react';
import "./Dashboard.css";
import { Product } from './Product/Product';
import { Sidebar } from './Sidebar/Sidebar';
import {Edit_product} from "./Product/Edit_product.jsx";

export default function Dashboard() {
    const [isProductClicked, setIsProductClicked] = useState(false);
    const [isProductEdited, setIsProductEdited] = useState(false);
    const [currentEditProduct,updateCurrentEditProduct]=useState({})

    return (
        <div className='flex '>
            <Sidebar setIsProductClicked={setIsProductClicked}  />
            {isProductClicked ? (
                isProductEdited ? <Edit_product currentEditProduct={currentEditProduct}  setIsProductEdited={setIsProductEdited} /> : <Product setIsProductEdited={setIsProductEdited} updateCurrentEditProduct={updateCurrentEditProduct}/>
            ) : (
                <div className='h-screen'>Default content </div>
            )}
        </div>
    );
}
