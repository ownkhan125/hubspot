'use client';

import React from 'react'
import style from '@/style/home.module.css';
import { FaCheck } from "react-icons/fa6";


const Growcard = ({ logo, heading, month, seats, li }) => {

    return (
        <>
            <div className={style['grow-card']}>
                <div>
                    <div className='flex items-center'>
                        <div className='logo-wrapper'>
                            <img src={logo} alt="" />
                        </div>
                        <h4>{heading}</h4>
                    </div>
                    <p className='fs-14'>Start at</p>
                    <p className='fs-18'>{month}</p>
                    <div className='h-[20px]'>
                        <span className='fs-14 font-medium'>{seats}</span>
                    </div>
                </div>

                <div>
                    <span className='fs-18'>Popular Features</span>
                    <ul>

                        {
                            li.map((li, index) => (
                                <li key={index}><div><FaCheck /></div><p className='text-sm'>{li}</p></li>
                            ))
                        }


                    </ul>

                </div>

            </div>
        </>
    )
}

export default Growcard