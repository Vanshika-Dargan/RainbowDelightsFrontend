import React from 'react';

export const EachProduct = ({ productData, setIsProductEdited ,updateCurrentEditProduct}) => {
    return (
        <tr className='h-32'>
            <td className=''>{productData.id}</td>
            <td className=''><img className='w-full h-32 object-cover' src={productData.img} alt={productData.name} /></td>
            <td className=''>{productData.name}</td>
            <td className=''>{productData.price}</td>
            <td className='w-72'>{productData.description}</td>
            <td className=''>
                <span className='text-cyan-800 cursor-pointer' onClick={() => { setIsProductEdited(true); updateCurrentEditProduct(productData); }}>Edit</span>&nbsp;&nbsp;&nbsp;<span className='text-red-700 cursor-pointer'>Delete</span></td>
        </tr>
    );
};
