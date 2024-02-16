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
        img: BCake,
        price: 100,
        piece:null,
        ingredients:[egg,milk,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 2,
        name: "Chocolate Cakes",
        img: ChocoCake,
        price: 75,
        piece:3,
        ingredients:[egg,milk,choco,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 3,
        name: "Chocolate Cookies",
        img: ChoCookie,
        price: 100,
        piece:5,
        ingredients:[egg,milk,choco,sugar,wheat],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 4,
        name: "Cookies",
        img: Cookies,
        price: 20,
        piece:5,
        ingredients:[egg,milk,wheat,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 5,
        name: "Icecream Cakes",
        img: IceCake,
        price: 200,
        piece:2,
        ingredients:[egg,milk,sugar,choco,ice],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 6,
        name: "Eclairs",
        img: Eclairs,
        price: 200,
        piece:7,
        ingredients:[wheat,choco,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Others"
    },
    {
        id: 7,
        name: "Cup Cakes",
        img: CupCake,
        price: 200,
        piece:10,
        ingredients:[egg,milk,sugar,wheat],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Cakes"
    },
    {
        id: 8,
        name: "Pie",
        img: Pie,
        price: 200,
        piece:null,
        ingredients:[egg,wheat,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Others"
    },
    {
        id: 9,
        name: "Butter Cookies",
        img: butter_cookie,
        price: 100,
        piece:5,
        ingredients:[egg,milk,wheat,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 10,
        name: "Cheese Bread",
        img: cheese_bread,
        price: 300,
        piece:null,
        ingredients:[egg,wheat,sugar,milk],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Breads"
    },
    {
        id: 11,
        name: "Choco Balls",
        img: choco_balls,
        price: 50,
        piece:5,
        ingredients:[milk,choco,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Chocolates"
    },
    {
        id: 12,
        name: "Chocolates",
        img: chocolate,
        price: 50,
        piece:5,
        ingredients:[milk,choco,sugar],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Chocolates"
    },
    {
        id: 13,
        name: "Fruit Bread",
        img: fruit_bread,
        price: 200,
        piece:null,
        ingredients:[egg,wheat,sugar,milk],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Breads"
    },
    {
        id: 14,
        name: "Garlic Bread",
        img: garlic_bread,
        price: 200,
        piece:null,
        ingredients:[egg,wheat,sugar,milk],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Breads"
    },
    {
        id: 15,
        name: "Jam Cookies",
        img: jam_cookies,
        price:75,
        piece:7,
        ingredients:[egg,wheat,sugar,milk],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 16,
        name: "Rainbow Cookies",
        img: rainbow_cookies,
        price: 100,
        piece:5,
        ingredients:[egg,wheat,sugar,milk],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Biscuits"
    },
    {
        id: 17,
        name: "White Chocolates",
        img: white_chocolate,
        price: 150,
        piece:3,
        ingredients:[sugar,milk,choco],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae molestiae blanditiis autem quasi ducimus.",
        category: "Chocolates"
    }
]
export default ProductsData;