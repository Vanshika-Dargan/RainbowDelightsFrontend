import React from 'react';
import productData from '../../../ProductsData';
import { EachProduct } from './EachProduct';

// Destructure setIsProductEdited from props
export const Product = ({ setIsProductEdited ,updateCurrentEditProduct }) => {
    return (
        <div className='w-3/4 h-screen overflow-auto'>
            <span className='ml-6 mt-4 table-font text-2xl'>Product</span>
            <table className='table-fixed table-font left-6 top-14'>
                <thead className='border-b'>
                <tr>
                    <th className='border p-3 text-xl'>Product Id</th>
                    <th className='border p-3 text-xl'>Image</th>
                    <th className='border p-3 text-xl'>Name</th>
                    <th className='border p-3 text-xl'>Price</th>
                    <th className='border p-3 text-xl'>Description</th>
                    <th className='border p-3 text-xl'>Action</th>
                </tr>
                </thead>
                <tbody className='text-center'>
                {/* Pass setIsProductEdited to EachProduct component */}
                {productData.map((d) => <EachProduct key={d.id} productData={d} setIsProductEdited={setIsProductEdited} updateCurrentEditProduct={updateCurrentEditProduct}/>)}
                </tbody>
            </table>
        </div>
    );
};
