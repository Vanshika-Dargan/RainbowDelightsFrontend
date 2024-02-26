import React from 'react';

export const EachProduct = ({ productData, setIsProductEdited ,updateCurrentEditProduct}) => {
    let s= productData.image.split("\\");
    return (
        <tr className='h-32'>
            <td className=''>{productData.id}</td>
            <td className=''><img className='w-full h-32 object-cover' src={"http://localhost:5000/" + s[0]+ "/" +s[1]} alt={productData.name} /></td>
            <td className=''>{productData.name}</td>
            <td className=''>{productData.price}</td>
            <td className=''>{productData.weight}</td>
            <td className=''>{productData.netQuantity}</td>
            <td className=''>{productData.category}</td>
            <td className='w-72'>{productData.description}</td>
            <td className=''>
                <span className='text-cyan-800 cursor-pointer' onClick={() => { setIsProductEdited(true); updateCurrentEditProduct(productData); }}>Edit</span>&nbsp;&nbsp;&nbsp;<span className='text-red-700 cursor-pointer'>Delete</span></td>
        </tr>
    );
};
