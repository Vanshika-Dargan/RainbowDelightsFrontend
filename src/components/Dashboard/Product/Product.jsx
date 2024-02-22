import React, { useEffect } from 'react';
import productData from '../../../ProductsData';
import { EachProduct } from './EachProduct';
const allProducts=[];
// Destructure setIsProductEdited from props
export const Product = ({ setIsProductEdited, updateCurrentEditProduct ,setIsAddProductClicked }) => {
    useEffect(()=>{
        fetch('http://localhost:5000/product/products')
        .then(res => res.json())
        .then((res)=>{
            for(const d of res){
                allProducts.push(d)
            }
        })
    },[]);

    return (
        <div className='w-4/5 h-screen overflow-auto'>
            <div className='ml-2 py-2 text-2xl'>All Products</div>
            <div className='flex justify-between'>
                <input className='searchbox p-2 w-4/12 ml-2 my-3' type='search' placeholder='search for products' />
                <button className='bg-cyan-600 hover:bg-cyan-700 mr-3 h-fit p-2 rounded-md text-white m-3' onClick={()=>{setIsAddProductClicked(true)}}>Add New Product</button>
            </div>
            <div className='product-table'>
                <table className='text-gray-950 w-full'>
                    <thead className=''>
                        <tr>
                            <th className='py-3 text-sm'>PRODUCT ID</th>
                            <th className='py-3 text-sm'>IMAGE</th>
                            <th className='py-3 text-sm'>NAME</th>
                            <th className='py-3 text-sm'>PRICE</th>
                            <th className='py-3 text-sm'>DESCRIPTION</th>
                            <th className='py-3 text-sm'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* Pass setIsProductEdited to EachProduct component */}
                        {productData.map((d) => <EachProduct key={d.id} productData={d} setIsProductEdited={setIsProductEdited} updateCurrentEditProduct={updateCurrentEditProduct} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
