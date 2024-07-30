'use client';

import React, { useEffect, useRef, useState } from 'react'
import style from '@/style/home.module.css'
import { IoIosArrowForward } from 'react-icons/io';

const Accordian = ({ id, text, content, isOpen, handleToggle }) => {


    return (
        <>
            <div className={`${style["accordion-single"]} ${isOpen ? style.isopen : ''}`} onClick={() => handleToggle(id)}>
                <div>
                    <div className='flex items-baseline gap-2'>
                        <div className={`${style.icon} ${isOpen ? style.isopen : ''}`}> <IoIosArrowForward /></div>
                        <p className='fs-18 p-1'>{text}</p>
                    </div>
                    <div className={`${style["accordion-single-content"]} ${isOpen ? style.isopen : ''}`}>
                        <p className='p-1'>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian;
