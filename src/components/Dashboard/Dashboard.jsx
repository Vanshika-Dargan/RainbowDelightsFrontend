import React, { useState } from 'react';
import "./Dashboard.css";
import { Product } from './Product/Product';
import { Sidebar } from './Sidebar/Sidebar';
import { Edit_product } from "./Product/Edit_product.jsx";
import AddProduct from "./Product/AddProduct.jsx";
import OperatorChat from "./Chatbox/OperatorChat.jsx";

export default function Dashboard() {
    const [isProductClicked, setIsProductClicked] = useState(false);
    const [isProductEdited, setIsProductEdited] = useState(false);
    const [isAddProductClicked, setIsAddProductClicked] = useState(false);
    const [currentEditProduct, updateCurrentEditProduct] = useState({});
    const [isChatboxClicked,setIsChatboxClicked]=useState(false);

    return (
        <div className='flex bg-white'>
            <Sidebar setIsProductClicked={setIsProductClicked} setIsChatboxClicked={setIsChatboxClicked}/>
            {isChatboxClicked ? (
                <OperatorChat/>
            ) : (
                isAddProductClicked ? (
                    <AddProduct  setIsAddProductClicked={setIsAddProductClicked} />
                ) : isProductClicked ? (
                    isProductEdited ? <Edit_product currentEditProduct={currentEditProduct} setIsProductEdited={setIsProductEdited}  /> : <Product setIsProductEdited={setIsProductEdited} updateCurrentEditProduct={updateCurrentEditProduct} setIsAddProductClicked={setIsAddProductClicked} />
                ) : (
                    <div>Default content</div>
                )
            )}
        </div>
    );
}
