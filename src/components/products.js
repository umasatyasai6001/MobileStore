import React from 'react';
import iphone14 from './images/iphone14.jpeg';
import iphone15pro from './images/iphone15pro.jpeg';
import iqoo12 from './images/iqoo12.jpeg';
import iqooz6 from './images/iqooz6.jpeg';
import motoedge40 from './images/motoedge40.jpeg';
import oneplus11 from './images/oneplus11.jpeg';
import './products.css';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart,removeItem } from './redux/productslice';
import { FaArrowDown } from "react-icons/fa6";

const Products = () => {
    const data = [
        {
            id: 1,
            name: "iphone14",
            src: `${iphone14}`,
            price: 12000,
        },
        {
            id: 2,
            name: "iphone15pro",
            src: `${iphone15pro}`,
            price: 13000,
        },
        {
            id: 3,
            name: "iqoo12",
            src: `${iqoo12}`,
            price: 9000,
        },
        {
            id: 4,
            name: "iqooz6",
            src: `${iqooz6}`,
            price: 10000,
        },
        {
            id: 5,
            name: "motoedge40",
            src: `${motoedge40}`,
            price: 8000,
        },
        {
            id: 6,
            name: "oneplus11",
            src: `${oneplus11}`,
            price: 11000,
        },
    ];

    const storeData = useSelector((state) => state.product1);//points to reducers object
    console.log(storeData, "mystore");

    const dispatch = useDispatch(addtocart);
    const dispatch1=useDispatch(removeItem);

    return (
        <>
        <div className='transition'>
            <div className="arrow">{<FaArrowDown/>}</div>
            <text className='electronics'>Swipe Here To See Discounts</text>

        </div>


        <div className='data'>
            {
                data.map((item) => (
                    <div className='dataitem' key={item.id}>
                        <div className='innercontent'>
                            <h3 className='name'>{item.name}</h3>
                            <img className='images' src={item.src} alt={item.name} />
                            <p className='price'>{item.price}</p>
                        </div>
                        <button className='addbtn' style={{color:'white'}} onClick={() => dispatch(addtocart({
                            ProductName:item.name,
                            ProductPrice:item.price,
                            ProductId:item.id,

                        }))}>Add:</button>
                        <button className='removebtn' style={{color:'white'}} onClick={()=>dispatch1(removeItem({
                             ProductName:item.name,
                             ProductPrice:item.price,
                             
                        }))}>Remove</button>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Products;

