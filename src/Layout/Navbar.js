import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../app/features/auth/authSlice';


const Navbar = () => {
    const { user: { email, role }, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    if (isLoading) {
        return
    }
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }

    const signOut = () => {
        dispatch(logOut())
    }
    const navItem = 'text-sm md:ml-4 text-white mb-1 hover:bg-[#008000] px-5 py-2 rounded-full cursor-pointer font-semibold transition duration-500'
    const item = <ul className='flex md:items-center flex-col lg:flex-row md:justify-center'>

        <Link to='/home' className={`${navItem} ${pathname === '/home' && 'bg-[#008000]'}`}>Home</Link>
        <Link to='/all-products' className={`${navItem} ${pathname === '/all-products' && 'bg-[#008000]'}`}>All Products</Link>
        {
            role === 'admin' && <Link to='/deshboard' className={`${navItem} ${pathname === '/deshboard' && 'bg-[#008000]'}`}>Deshboard</Link>
        }
        <Link to='/card' className={`${navItem} ${pathname === '/card' && 'bg-[#008000]'}`}>Card</Link>
        <Link to='/contact' className={`${navItem} ${pathname === '/contact' && 'bg-[#008000]'}`}>Contact</Link>


    </ul>
    return (
        <div className='mb-10' >
            <div className='flex justify-end px-5 md:px-10 py-1'>
                {
                    email ? <button onClick={signOut} className='font-bold text-sm bg-[#bf0603] text-white py-1 px-2 rounded mr-3 flex justify-center items-center' data-aos="fade-right" data-aos-duration="1500"> <span className='text-sm mr-1 font-bold'><CgLogOut /></span>Sign Out</button> :
                        <><Link to="/login"><button className='font-bold text-sm bg-[#008000] text-white py-1 px-2 rounded mr-3 flex justify-center items-center' data-aos="fade-right" data-aos-duration="1500"> <span className='text-sm mr-1 font-bold'><FiLogIn /></span> Login</button></Link>
                            <Link to='/register'><button className='font-bold text-sm bg-[#008000] text-white py-1 px-2 rounded mr-3 flex justify-center items-center' data-aos="fade-left" data-aos-duration="1500"> <span className='text-sm mr-1 font-bold'><FaUserPlus /></span> Register</button></Link></>
                }



            </div>
            <div className='py-4  w-full bg-[#333533] transition duration-700' data-aos="fade-down" data-aos-duration="1000">
                <div className='flex justify-between items-center max-w-6xl mx-auto'>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 hidden lg:block mr-2' src="https://i.ibb.co/P1HrRh5/logo-removebg-preview.png" alt="" />
                        <h1 className='hidden lg:block text-white text-xl font-semibold'>SECURE <span className='text-[#0ebd0e]'>SHOP</span></h1>
                    </div>
                    <div className='hidden lg:block'>

                        {
                            item
                        }
                    </div>
                </div>
                <div className='lg:hidden flex justify-between mx-5 transition duration-700'>
                    <div className='flex justify-center items-center'>
                        <img className='w-12 mr-2' src="https://i.ibb.co/P1HrRh5/logo-removebg-preview.png" alt="" />
                        <h1 className=' text-white text-lg font-semibold'>SECURE <span className='text-[#0ebd0e]'>SHOP</span></h1></div>
                    {
                        isOpen ? <div><p className='flex justify-center items-center bg-[#008000] text-white px-2 py-1 cursor-pointer rounded' onClick={toggleIsOpen}> <span><ImCross className='text-xs  mr-1' /></span> Menu</p></div> :
                            <div><p className='flex justify-center items-center bg-white px-2 py-1 rounded cursor-pointer' onClick={toggleIsOpen}><span><AiOutlineMenu className='text-xs mr-1' /></span> Menu</p></div>
                    }


                </div>
                <div className='lg:hidden  '>
                    {
                        isOpen && <div className=' rounded-md p-3 transition duration-700'>
                            {
                                item
                            }
                        </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;