import React, { useState } from 'react';

export const Edit_product = ({ currentEditProduct, setIsProductEdited }) => {
    const { id, name, img, price, description } = currentEditProduct;
    const [newImg, setNewImg] = useState(img);

    // Function to handle image change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-100" style={{ width: "83%" }}>
                <div className="max-w-md w-full mx-4 bg-white rounded-lg overflow-hidden md:max-w-lg relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2" onClick={() => { setIsProductEdited(false) }}>
                        <svg className="h-6 w-6 text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="md:flex">
                        <div className="w-full px-4 py-6">
                            <h2 className="text-center text-2xl font-bold mb-3">Product Profile</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="product_name" className="block text-gray-700 font-bold mb-2">Product Name</label>
                                    <input type="text" id="product_name" name="product_name" value={name}
                                           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="product_price" className="block text-gray-700 font-bold mb-2">Product Price</label>
                                    <input type="number" id="product_price" name="product_price" value={price}
                                           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="product_description" className="block text-gray-700 font-bold mb-2">Product Description</label>
                                    <textarea id="product_description" name="product_description"
                                              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={description}></textarea>
                                </div>
                                <label htmlFor="product_image" className="block text-gray-700 font-bold mb-2 mr-2">Product Image</label>

                                <div className="mb-4 flex items-center">
                                    <img src={newImg} alt="Product Image" className="w-32 h-auto" style={{ width: "200px", height: "200px" }} />
                                    <div style={{marginLeft:"50px"}}>
                                        <input type="file" id="product_image" name="product_image" accept="image/*" className="hidden" onChange={handleImageChange} />
                                        <label htmlFor="product_image" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Edit Image</label>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit_product;
