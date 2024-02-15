import React from 'react'

export const EachProduct = ({ productData }) => {
    return (
        <>
            <tr>
                <td className='border'>{productData.id}</td>
                <td className='border'><img className='w-20 object-cover' src={productData.img} /></td>
                <td className='border'>{productData.name}</td>
                <td className='border'>{productData.price}</td>
                <td className='border w-64'>{productData.description}</td>
                <td className='border'>Edit</td>
            </tr>
        </>
    )
}
