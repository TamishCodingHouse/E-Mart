// src/data/products.js
import Rproduct from "../assets/BgBanner.png"
import product from "../assets/product.png"
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product4.png"
const products = [
  {
    id: 1,
    title: "FRESH PRODUCE",
    description: "Fruits, vegetables, and organic farm-fresh items.",
    image: Rproduct, // replace with real img
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    title: "DAIRY & EGGS",
    description: "Milk, cheese, yogurt, butter, and fresh eggs.",
    image: product,
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "STAPLES & ESSENTIALS",
    description: "Rice, flour, pulses, spices, and cooking oils.",
    image: product1,
    bgColor: "bg-orange-100",
  },
  {
    id: 4,
    title: "SNACKS & BEVERAGES",
    description: "Chips, biscuits, soft drinks, juices, and tea/coffee.",
    image: product2,
    bgColor: "bg-yellow-100",
  },
  {
    id: 5,
    title: "HOUSEHOLD & PERSONAL CARE",
    description: "Cleaning supplies & hygiene products.",
    image: product3,
    bgColor: "bg-purple-100",
  },
];

export default products;
