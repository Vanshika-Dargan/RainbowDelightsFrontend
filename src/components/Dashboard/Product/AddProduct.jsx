import React, {useState} from 'react';
import noimage from '../../../assets/Dashboard/img.png'

const AddProduct = ({setIsAddProductClicked}) => {
    const [newImg, setNewImg] = useState(noimage);

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
    function handleSubmit(event) {
        console.log("calling post...")
        event.preventDefault();

        const apiUrl = "http://localhost:1000/product/add";
        const requestData = {
            name: document.getElementById("product_name").value,
            net_quantity: document.getElementById("net_quantity").value,
            quantity_per_item: document.getElementById("quantity_per_item").value,

            cost_per_item: document.getElementById("cost_per_item").value,

            weight_per_item: document.getElementById("weight_per_item").value,
            ingredients:document.getElementById("ingredients").value,
            category:document.getElementById("category").value,
            image: document.getElementById("product_image").value

        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                document.getElementById("product_name").value="";
                document.getElementById("net_quantity").value="";
                document.getElementById("quantity_per_item").value="";
                document.getElementById("cost_per_item").value="";
                document.getElementById("weight_per_item").value="";
                document.getElementById("ingredients").value="";
                document.getElementById("category").value="";
                document.getElementById("product_image").value="";
                setNewImg(noimage);

            })
            .catch((err) => {
                console.log("error", err);
            });
    }

    return (

            <>
                <div className="min-h-screen flex justify-center items-center bg-gray-100" style={{ width: "83%" }}>
                    <div className="max-w-md w-full mx-4 bg-white rounded-lg overflow-hidden md:max-w-lg relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2" onClick={() => { setIsAddProductClicked(false) }}>
                            <svg className="h-6 w-6 text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="md:flex">
                            <div className="w-full px-4 py-6">
                                <h2 className="text-center text-2xl font-bold mb-3">Product Profile</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="mb-4">
                                            <label htmlFor="product_name" className="block text-gray-700 font-bold mb-2">Product Name</label>
                                            <input type="text" id="product_name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="net_quantity" className="block text-gray-700 font-bold mb-2">Net Quantity</label>
                                            <input type="number" id="net_quantity" name="net_quantity" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="quantity_per_item" className="block text-gray-700 font-bold mb-2">Quantity per Item</label>
                                            <input type="number" id="quantity_per_item" name="quantity_per_item" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="cost_per_item" className="block text-gray-700 font-bold mb-2">Cost per Item</label>
                                            <input type="number" id="cost_per_item" name="cost_per_item" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="weight_per_item" className="block text-gray-700 font-bold mb-2">Weight per Item</label>
                                            <input type="number" id="weight_per_item" name="weight_per_item" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                                            <input type="text" id="category" name="category" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">Ingredients</label>
                                            <textarea id="ingredients" name="ingredients" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                                        </div>
                                    </div>
                                    <label htmlFor="product_image" className="block text-gray-700 font-bold mb-2 mr-2">Product Image</label>
                                    <div className="mb-4 flex items-center">
                                        <img src={newImg} alt="Product Image" className="w-32 h-auto" style={{ width: "200px", height: "200px" }} />

                                        <div style={{ marginLeft: "50px" }}>
                                            <input type="file" id="product_image" name="image" accept="image/*" className="hidden" onChange={handleImageChange} />
                                            <label htmlFor="product_image" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Upload Image</label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Product</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default AddProduct;
