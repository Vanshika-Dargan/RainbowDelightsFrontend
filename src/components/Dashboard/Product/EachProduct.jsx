import React from 'react';

export const EachProduct = ({ productData, setproductData, setIsProductEdited, updateCurrentEditProduct }) => {
    let s = productData.image.split("\\");

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
            <td className=''>{productData.id}</td>
            <td className=''><img className='w-full h-32 object-cover' src={"http://localhost:5000/" + s[0] + "/" + s[1]} alt={productData.name} /></td>
            <td className=''>{productData.name}</td>
            <td className=''>{productData.price}</td>
            <td className=''>{productData.weight}</td>
            <td className=''>{productData.quantityPerBox}</td>
            <td className=''>{productData.category}</td>
            <td className=''>{productData.description}</td>
            <td className=''>{productData.ingredients.map(p => {

                return <span>{p} , </span>
            })}</td>
            <td className=''>
                <span className='text-cyan-800 cursor-pointer' onClick={() => { setIsProductEdited(true); updateCurrentEditProduct(productData); }}>Edit</span>&nbsp;&nbsp;&nbsp;<span onClick={handleDelete} className='text-red-700 cursor-pointer'>Delete</span></td>
        </tr>
    );
};
