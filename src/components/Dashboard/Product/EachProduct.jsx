import React from 'react';

export const EachProduct = ({ productData, setIsProductEdited ,updateCurrentEditProduct}) => {
    return (
        <tr>
            <td className='border'>{productData.id}</td>
            <td className='border'><img className='w-20 object-cover' src={productData.img} alt={productData.name} /></td>
            <td className='border'>{productData.name}</td>
            <td className='border'>{productData.price}</td>
            <td className='border w-64'>{productData.description}</td>
            <td className='border' onClick={() => { setIsProductEdited(true); updateCurrentEditProduct(productData); }}>Edit</td>
        </tr>
    );
};
