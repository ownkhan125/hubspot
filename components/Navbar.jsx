'use client';


import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosContact, IoMdClose, IoMdMenu } from "react-icons/io";
import { PiGlobeStandFill } from 'react-icons/pi';
import Switch from 'react-switch';
import { MdMessage } from "react-icons/md";
import { IoClose, IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(null)
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(null);

    const navopen = () => {
        setOpen(!open)
        document.body.classList.toggle('fixed');
        // body.style.add('fixed')
    };


    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
        document.body.classList.toggle('orange');

    };
    const searching = () => {
        setShow(!show)
    }

    return (
        <>

            <section className='search-section hidden md:block'>
                <div className='max-w-[1080px] mx-auto p-2'>
                    <div className='flex justify-between items-center relative'>
                        <input type="text" placeholder='searching' className={`input ${show ? 'isopen' : ''}`} />



                        <div className='flex items-center gap-x-8'>
                            <div className='flex items-center gap-x-2  fs-12'>
                                <PiGlobeStandFill />
                                <p className='fs-12 '>English</p>
                            </div>

                            <div className="switch-container">
                                <label className='flex items-center gap-x-2'>
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        offColor="#a9abb6"
                                        onColor="#ff642d"
                                        handleDiameter={12}   // Handle ka size set kar rahe hain
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        height={18}          // Switch ki height set kar rahe hain
                                        width={35}
                                    // translate='10px'
                                    />
                                    <span className='fs-12 '>High Contrast</span>
                                </label>
                            </div>

                            <div className='flex items-center gap-x-2  fs-12'>
                                <MdMessage />
                                <p className='fs-12 '>Customer Support </p>
                            </div>

                            <div className='flex items-center gap-x-2  fs-12'>
                                <IoIosContact />
                                <p className='fs-12 '>Contact Sales</p>
                            </div>
                        </div>




                        <div className=' flex items-center gap-x-8 py-3'>
                            <div className='cursor-pointer' onClick={() => searching()}>
                                <IoSearchOutline className={show ? 'hidden' : ''} />
                                <IoClose className={show ? '' : 'hidden'} />
                            </div>

                            <div className='cursor-pointer'>
                                <span className='fs-12'>Log in</span>
                            </div>

                            <div className='cursor-pointer'>
                                <span className='fs-12'>About</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className='navbar-section relative z-50 '>

                <div class="nav-section  max-w-[1080px] mx-auto p-2  ">

                    <nav>
                        <div class=" flex flex-col lg:flex-row items-center mx-auto">
                            <div class=" w-[100%] lg:w-fit flex flex-row justify-between">
                                <a href="" className='max-w-[100px] mr-3'>
                                    <img src="/images/download (1).svg" alt="" />
                                </a>
                                <button className="lg:hidden " onClick={() => navopen()}><IoMdMenu /></button>
                            </div>


                            <div
                                class="text-white  hidden lg:flex   items-center justify-between w-full basis-[100%] lg:basis-auto">
                                <ul class=" flex justify-between  lg:flex-row ">
                                    <li>
                                        <Link href={'/'}>Product</Link>
                                    </li>
                                    <li>
                                        <Link href={'/solution'}>Solution</Link>
                                    </li>
                                    <li>
                                        <Link href={'/pricing'}>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href={''}>resources</Link>
                                    </li>

                                </ul>

                                <div class="flex flex-row items-center  gap-x-2">

                                    <div class="w-fit a1">
                                        <a href="" className='btn-blue'>Get a demo</a>
                                        <i class="fa-solid fa-arrow-right b2"></i>
                                        <i class="fa-solid fa-chevron-right b1"></i>
                                    </div>
                                    <div class=" white ">
                                        <a href="" className='btn'>Get started free</a>
                                        <i class="fa-solid fa-chevron-right p-1"></i>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className={`lg:hidden navbar-toggle ${open ? 'isopen' : ''}`}>
                            <ul class=" flex   flex-col ">
                                <div class="flex justify-between my-3">
                                    <a href="" className='max-w-[100px] mr-3'>
                                        <img src="/images/download (1).svg" alt="" />
                                    </a>
                                    <button onClick={() => navopen()}><IoMdClose /></button>


                                </div>
                                <li>
                                    <a href="" class="block p-3  lg:p-4 ">About</a>
                                </li>
                                <li>
                                    <a href="" class="block p-3  lg:p-4">Products</a>
                                </li>
                                <li>
                                    <a href="" class="block p-3  lg:p-4">Pricing</a>
                                </li>
                                <li>
                                    <a href="" class="block p-3  lg:p-4">Blog</a>
                                </li>
                                <li>
                                    <a href="" class="block p-3  lg:p-4">Jobs</a>
                                </li>
                                <li>
                                    <a href="" class="block p-3  lg:p-4">More</a>
                                </li>
                            </ul>

                            <div class="flex flex-col items-center  gap-x-2">

                                <div class=" w-fit a1">
                                    <a href="">Contact Sales</a>
                                    <i class="fa-solid fa-arrow-right b2"></i>
                                    <i class="fa-solid fa-chevron-right b1"></i>
                                </div>
                                <a href="" class="btn-2 py-1 px-5">Sign in</a>

                            </div>
                        </div>


                    </nav>


                </div>
            </section>


            <div className={open ? 'body-blur' : ''}>

            </div>
        </>
    )
}

export default Navbar;