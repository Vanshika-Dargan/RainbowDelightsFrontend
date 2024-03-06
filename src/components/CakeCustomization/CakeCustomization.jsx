import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import BaseFlavour from '../../BaseFlavour';
// import Decoration from '../../Decoration';
// import Toppings from '../../Toppings';
// import Weight from '../../Weight';
import cakeImage from '../../assets/cake.jpg';
import './CakeCustomization.css';
import Axios from './../../utils/Axios';


function CakeCustomization() {
  const [baseFlavour, setBaseFlavour] = useState([]);
  const [decoration, setDecoration] = useState([]);
  const [topping, setTopping] = useState([]);
  const [weight,setWeight] = useState([]);

  const [selectedWeights, setSelectedWeights] = useState(new Set());
  const [selectedBaseFlavour, setSelectedBaseFlavour] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState(new Set());
  const [selectedDecorations, setSelectedDecorations] = useState(new Set());
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(()=>{

    Axios.get("/product/getBaseFlavour")
        .then((res)=>setBaseFlavour([...res.data]))
        .catch((err)=>console.log(err.message))
        
    Axios.get("/product/getDecoration")
        .then((res)=> setDecoration([...res.data]))
        .catch((err)=>console.log(err.message))
    
        Axios.get("/product/getTopping")
        .then((res)=> setTopping([...res.data]))
        .catch((err)=>console.log(err.message))

    Axios.get("/product/getWeight")
        .then((res)=>{ 
          console.log(res.data)
          setWeight([...res.data])})
        .catch((err)=>console.log(err.message))    
  },[])

  useEffect(() => {
    const priceWeights = Array.from(selectedWeights).reduce((acc, curr) => acc + weight.find(w => w.id === curr).price, 0);
    const priceFlavour = selectedBaseFlavour ? baseFlavour.find(f => f.id === selectedBaseFlavour).price : 0;
    const priceToppings = Array.from(selectedToppings).reduce((acc, curr) => acc + topping.find(t => t.id === curr).price, 0);
    const priceDecorations = Array.from(selectedDecorations).reduce((acc, curr) => acc + decoration.find(d => d.id === curr).price, 0);
    
    setEstimatedPrice(priceWeights + priceFlavour + priceToppings + priceDecorations);
  }, [selectedWeights, selectedBaseFlavour, selectedToppings, selectedDecorations]);

  const handleWeightChange = (id) => {
    setSelectedWeights(prev => new Set(prev.has(id) ? Array.from(prev).filter(w => w !== id) : [...prev, id]));
  };

  const handleBaseFlavourChange = (id) => {
    setSelectedBaseFlavour(id);
  };

  const handleToppingsChange = (id) => {
    setSelectedToppings(prev => new Set(prev.has(id) ? Array.from(prev).filter(t => t !== id) : [...prev, id]));
  };

  const handleDecorationsChange = (id) => {
    setSelectedDecorations(prev => new Set(prev.has(id) ? Array.from(prev).filter(d => d !== id) : [...prev, id]));
  };

  const handleSubmit = () => {
    toast.success('Customization request sent to Baker!', {
        className: "toast-color",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    console.log({
      selectedWeights: Array.from(selectedWeights).map(id => `${weight.find(w => w.id === id).size} kg`)[0],
      selectedBaseFlavour: baseFlavour.find(f => f.id === selectedBaseFlavour)?.name || "None",
      selectedToppings: Array.from(selectedToppings).map(id => topping.find(t => t.id === id).name),
      selectedDecorations: Array.from(selectedDecorations).map(id => decoration.find(d => d.id === id).name),
      additionalNotes,
      deliveryDate,
      deliveryTime,
      estimatedPrice,
    });
    setSelectedWeights(new Set());
    setSelectedBaseFlavour(null);
    setSelectedToppings(new Set());
    setSelectedDecorations(new Set());
    setAdditionalNotes('');
    setDeliveryDate('');
    setDeliveryTime('');
    setEstimatedPrice(0);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <img src={cakeImage} alt="Custom Cake" className="h-96 w-full object-cover" />
        <div className="flex flex-col">
  <h2 className="text-2xl font-semibold pt-4 pb-1 px-2 text-font-color">Weight</h2>
  <div className="flex overflow-x-auto pb-4">
    {weight.map(weight => (
      <label key={weight.id} className="flex flex-col items-center mx-2 px-10">
        <input
          type="radio"
          name="weight"
          checked={selectedWeights.has(weight.id)}
          onChange={() => handleWeightChange(weight.id)}
          className="mb-2"
        />
        {`${weight.size} kg`}
        <span className="text-sm font-extrabold text-red-900">+${weight.price}</span>
      </label>
    ))}
  </div>
</div>

<div className="flex flex-col">
  <h2 className="text-2xl font-semibold pb-1 px-2 text-font-color">Need something more, type here.</h2>
  <textarea
    placeholder="Need something more?"
    value={additionalNotes}
    onChange={e => setAdditionalNotes(e.target.value)}
    className="w-full p-2 border-2 border-red-900 rounded"
    rows="4"
  />
</div>
      </div>
      <div className="w-1/2 p-4">
      <div className="flex flex-col">
  <h2 className="text-2xl font-semibold pt-4 pb-1 px-2 text-font-color">Base Flavour</h2>
  <div className="flex overflow-x-scroll">
    {baseFlavour.map(flavour => (
      <label key={flavour.id} className="flex flex-col items-center mx-2 px-10">
        <input
          type="radio"
          name="baseFlavour"
          checked={selectedBaseFlavour === flavour.id}
          onChange={() => handleBaseFlavourChange(flavour.id)}
          className="mb-2"
        />
        <img src={flavour.image} alt={flavour.name} className="w-16 h-16 object-cover mb-2" />
        {flavour.name}
        <span className="text-sm font-extrabold text-red-900">+${flavour.price}</span>
      </label>
    ))}
  </div>
</div>

<div className="flex justify-between">
<div className="w-1/2 pr-2">
  <h2 className="text-2xl font-semibold pt-4 pb-1 px-2 text-font-color">Toppings</h2>
  <div className="overflow-y-auto " style={{ maxHeight: '200px' }}>
    {topping.map(topping => (
      <label key={topping.id} className="block mb-2">
        <input
          type="checkbox"
          name="Toppings"
          checked={selectedToppings.has(topping.id)}
          onChange={() => handleToppingsChange(topping.id)}
          className="mr-2"
        />
        <img src={topping.image} alt={topping.name} className="w-8 h-8 object-cover inline-block mr-2" />
        {topping.name}&emsp;
        <span className="text-sm font-extrabold text-red-900">+${topping.price}</span>
      </label>
    ))}
  </div>
</div>

<div className="w-1/2 pl-2">
  <h2 className="text-2xl font-semibold pt-4 pb-1 px-2 text-font-color">Decorations</h2>
  <div className="overflow-y-auto" style={{ maxHeight: '200px' }}>
    {decoration.map(decoration => (
      <label key={decoration.id} className="block mb-2">
        <input
          type="checkbox"
          name="Decoration"
          checked={selectedDecorations.has(decoration.id)}
          onChange={() => handleDecorationsChange(decoration.id)}
          className="mr-2"
        />
        <img src={decoration.image} alt={decoration.name} className="w-8 h-8 object-cover inline-block mr-2" />
        {decoration.name}&emsp;
        <span className="text-sm font-extrabold text-red-900">+${decoration.price}</span>
      </label>
    ))}
  </div>
</div>

</div>
<div className="flex flex-col my-4">
  <h2 className="text-2xl font-semibold pb-1 text-center text-font-color">When you want?</h2>
  <div className="flex justify-evenly">
  <input
  type="date"
  value={deliveryDate}
  onChange={e => setDeliveryDate(e.target.value)}
  min={new Date().toISOString().split('T')[0]}
  className="border border-gray-300 rounded py-1 px-5"
/>

  <select
  value={deliveryTime}
  onChange={e => setDeliveryTime(e.target.value)}
  className="border border-gray-300 rounded py-1 px-5"
>
  <option value="Anytime">Anytime</option>
  <option value="10:00">10:00 am</option>
  <option value="12:30">12:30 pm</option>
  <option value="15:00">3:00 pm</option>
  <option value="17:30">5:30 pm</option>
  <option value="19:30">7:30 pm</option>
</select>

  </div>
</div>

<div className="text-2xl font-bold pt-1 text-font-color">
<span className="px-2">
Estimated Price:
</span>
<span className='text-5xl text-red-900'>
${estimatedPrice}
</span>
</div>
<div className="text-sm pb-2">
Prices may vary based on additional requirements you have specified.
</div>
<button
       onClick={handleSubmit}
       className="w-full bg-blue-500 text-white py-2 rounded"
     >
Submit
</button>
<ToastContainer
            position="top-right"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
</div>
</div>
);
}

export default CakeCustomization;