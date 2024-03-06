import Cookies from "./assets/Products/cookies.jpg";
import BCake from "./assets/Products/bithdaycake.jpg"
import ChocoCake from "./assets/Products/choco_cake.jpg";
import ChoCookie from "./assets/Products/choco_cookie.jpg";
import IceCake from "./assets/Products/icecream_cake.jpg";
import Pie from "./assets/Products/pie.jpg";
import CupCake from "./assets/Products/cupcakes.jpg";
import Eclairs from "./assets/Products/eclairs.jpg";
import butter_cookie from "./assets/Products/butter_cookies.jpg";
import cheese_bread from "./assets/Products/cheese_bread.jpg";
import choco_balls from "./assets/Products/choco_balls.jpg";
import chocolate from "./assets/Products/chocolate.jpg";
import fruit_bread from "./assets/Products/fruit_bread.jpg";
import garlic_bread from "./assets/Products/garlic_bread.jpg";
import jam_cookies from "./assets/Products/jam_cookies.jpg";
import rainbow_cookies from "./assets/Products/rainbow_cookies.jpg";
import white_chocolate from "./assets/Products/white_choco.jpg";
import egg from "./assets/egg-svgrepo-com.svg";
import milk from "./assets/milk-bottle-svgrepo-com.svg";
import wheat from "./assets/wheat-svgrepo-com.svg";
import sugar from "./assets/sugar-svgrepo-com.svg";
import choco from "./assets/chocolate-svgrepo-com.svg";
import ice from "./assets/icecream2-svgrepo-com.svg";
const ProductsData=[

    {
        id: 1,
        name: "Birthday Cakes",
        image: BCake,
        price: 100,
        quantityPerBox:null,
        ingredients:[egg,milk,sugar],
        weight:1000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 2,
        name: "Chocolate Cakes",
        image: ChocoCake,
        price: 75,
        quantityPerBox:3,
        ingredients:[egg,milk,choco,sugar],
        weight:200,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 3,
        name: "Chocolate Cookies",
        image: ChoCookie,
        price: 100,
        quantityPerBox:5,
        ingredients:[egg,milk,choco,sugar,wheat],
        weight:100,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 4,
        name: "Cookies",
        image: Cookies,
        price: 20,
        quantityPerBox:5,
        ingredients:[egg,milk,wheat,sugar],
        weight:100,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 5,
        name: "Icecream Cakes",
        image: IceCake,
        price: 200,
        quantityPerBox:2,
        ingredients:[egg,milk,sugar,choco,ice],
        weight:1200,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 6,
        name: "Eclairs",
        image: Eclairs,
        price: 200,
        quantityPerBox:7,
        ingredients:[wheat,choco,sugar],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Others"
    },
    {
        id: 7,
        name: "Cup Cakes",
        image: CupCake,
        price: 200,
        quantityPerBox:10,
        ingredients:[egg,milk,sugar,wheat],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 8,
        name: "Pie",
        image: Pie,
        price: 200,
        quantityPerBox:null,
        ingredients:[egg,wheat,sugar],
        weight:500,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Others"
    },
    {
        id: 9,
        name: "Butter Cookies",
        image: butter_cookie,
        price: 100,
        quantityPerBox:5,
        ingredients:[egg,milk,wheat,sugar],
        weight:100,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 10,
        name: "Cheese Bread",
        image: cheese_bread,
        price: 300,
        quantityPerBox:null,
        ingredients:[egg,wheat,sugar,milk],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Breads"
    },
    {
        id: 11,
        name: "Choco Balls",
        image: choco_balls,
        price: 50,
        quantityPerBox:5,
        ingredients:[milk,choco,sugar],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Chocolates"
    },
    {
        id: 12,
        name: "Chocolates",
        image: chocolate,
        price: 50,
        quantityPerBox:5,
        ingredients:[milk,choco,sugar],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Chocolates"
    },
    {
        id: 13,
        name: "Fruit Bread",
        image: fruit_bread,
        price: 200,
        quantityPerBox:null,
        ingredients:[egg,wheat,sugar,milk],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Breads"
    },
    {
        id: 14,
        name: "Garlic Bread",
        image: garlic_bread,
        price: 200,
        quantityPerBox:null,
        ingredients:[egg,wheat,sugar,milk],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Breads"
    },
    {
        id: 15,
        name: "Jam Cookies",
        image: jam_cookies,
        price:75,
        quantityPerBox:7,
        ingredients:[egg,wheat,sugar,milk],
        weight:100,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 16,
        name: "Rainbow Cookies",
        image: rainbow_cookies,
        price: 100,
        quantityPerBox:5,
        ingredients:[egg,wheat,sugar,milk],
        weight:100,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 17,
        name: "White Chocolates",
        image: white_chocolate,
        price: 150,
        quantityPerBox:3,
        ingredients:[sugar,milk,choco],
        weight:null,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Chocolates"
    }
]
export default ProductsData;
