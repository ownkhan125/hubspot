'use client';


import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen] = useState(null)


    const navopen = () => {
        setOpen(!open)
        document.body.classList.toggle('fixed');
        // body.style.add('fixed')
    };




    return (
        <>

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
                                        <a href="">Product</a>
                                    </li>
                                    <li>
                                        <a href="">Solution</a>
                                    </li>
                                    <li>
                                        <a href="">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="">Resources</a>
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