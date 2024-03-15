import React, { useEffect, useState } from 'react';
// import productData from '../../../ProductsData';
import { EachProduct } from './EachProduct';

// Destructure setIsProductEdited from props
export const Product = ({ setIsProductEdited, updateCurrentEditProduct, setIsAddProductClicked }) => {
    const [productData, setproductData] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/product/products');
            const jsonData = await response.json();
            setproductData([...jsonData]);
            console.log(jsonData[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);





    return (
        <div className=' h-screen overflow-auto w-full responsive_side_adjust'>
            <div className='ml-2 py-2 text-2xl'>All Products</div>
            <div className='flex justify-between'>
                <input className='searchbox p-2 w-4/12 ml-2 my-3' type='search' placeholder='search for products' />
                <button className='bg-cyan-600 hover:bg-cyan-700 mr-3 h-fit p-2 rounded-md text-white m-3' onClick={() => { setIsAddProductClicked(true) }}>Add New Product</button>
            </div>
            <div className='product-table'>
                <table className='text-gray-950 w-full'>
                    <thead className=''>
                        <tr>
                            <th className='py-3 text-sm'>IMAGE</th>
                            <th className='py-3 text-sm'>NAME</th>
                            <th className='py-3 text-sm'>PRICE</th>
                            <th className='py-3 text-sm'>WEIGHT</th>
                            <th className='py-3 text-sm'>QUANTITY PER ITEM</th>
                            <th className='py-3 text-sm'>CATEGORY</th>
                            <th className='py-3 text-sm'>DESCRIPTION</th>
                            <th className='py-3 text-sm'>INGREDIENTS</th>


                            <th className='py-3 text-sm'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* Pass setIsProductEdited to EachProduct component */}
                        {productData.map((d) => <EachProduct key={d.id} productData={d} setIsProductEdited={setIsProductEdited} setproductData={setproductData} updateCurrentEditProduct={updateCurrentEditProduct} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
