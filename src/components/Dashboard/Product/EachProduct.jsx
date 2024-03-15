import React from 'react';
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import './EachProduct.css';

export const EachProduct = ({ productData, setproductData, setIsProductEdited, updateCurrentEditProduct }) => {
    // let s = productData.image.split("\\");
    // console.log(s)
    function handleDelete() {
        fetch(`http://localhost:5000/product/delete/${productData.id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(res => {
                setproductData(prodData => {
                    return prodData.filter(p => p.id != res.id);
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <tr className='h-32'>
            <td className=''><img className='w-full h-32 object-cover' src={productData.image} alt={productData.name} /></td>
            <td className=''>{productData.name}</td>
            <td className=''>{productData.price}</td>
            <td className=''>{productData.weight}</td>
            <td className=''>{productData.quantityPerBox}</td>
            <td className=''>{productData.category}</td>
            <td className='w-5'>{productData.description}</td>
            <td className=''>{productData.ingredients.map(p => {
                return <span key={self.crypto.randomUUID()}>{p} , </span>
            })}</td>
            <td className=''>
                <span className='text-cyan-800 cursor-pointer icon text-xl' onClick={() => { setIsProductEdited(true); updateCurrentEditProduct(productData); }}>
                    <MdEdit />
                </span>
                <span onClick={handleDelete} className='text-red-700 cursor-pointer icon text-xl'>
                    <MdDeleteForever />
                </span>
            </td>
        </tr>
    );
};
