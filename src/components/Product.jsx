import React from 'react'
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h2 className='text-black text-5xl text-center my-10 '>Our Trendy <span className=' text-black font-semibold'>Products</span></h2>
                {/* Products Links */}
                <div className='flex justify-center items-center space-x-20'>
                    <Link to="/Fruits" className='font-medium text-xl'>Fruits/Drinks</Link>
                    <Link to="/Vegetables" className='font-medium text-xl'>Vegetables</Link>
                    <Link to="/Dried Foods" className='font-medium text-xl'>Dried Foods</Link>
                    <Link to="/ Breads&Cakes" className='font-medium text-xl'>Breads& Cakes</Link>
                    <Link to="/Fish@Meats" className='font-medium text-xl'>Fish@Meats</Link>

                </div>
            </div>

        </div>
    )
}

export default Product
