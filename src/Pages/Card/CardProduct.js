import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
    const { image, price, discound, model, brand, _id } = product
    const originPrice = parseInt(price)
    const discoundPrice = originPrice - (originPrice * (parseInt(discound) / 100))

    return (
        <div className='flex justify-center' data-aos="fade-up" data-aos-duration="1000">
            <Link to={`/card-details/${_id}`}>
                <div className='hover:border border-[black] bg-white rounded-2xl  cursor-pointer mx-auto'>
                    <img className='p-3 w-80 h-96' src={image} alt="" />
                    <div className='p-3'>
                        <h1 className='font-semibold'>{brand} {model}</h1>
                        <p className='text-[#008000] '>BDT <span className='font-semibold text-lg'>{parseInt(discoundPrice)}</span></p>
                        <div className='flex justify-start text-xs'>
                            <p className='line-through'>BDT {originPrice}</p>
                            <p>-{discound}%</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default CardProduct;