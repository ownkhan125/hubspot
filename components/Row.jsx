'use client';

import React from 'react'
import style from '@/style/home.module.css'
import Link from 'next/link'

const Row = ({ direction, img, heading, para1, para2 }) => {
    return (
        <>
            <div className={`row ${direction} mb-4`}>
                <div className='w-[80%] md:w-[50%]'>
                    <div className='ratio-4x3 rounded-md'>
                        <img src={img} alt="" height={300} width={300} />
                    </div>
                </div>


                <div className='w-[100%] md:w-[50%] px-6'>
                    <h4 className='mb-6'>{heading}</h4>
                    <p className='mb-4'>{para1}</p>
                    <p className='mb-4'>{para2}</p>
                    <Link href="/">
                        Learn more
                    </Link>
                </div>

            </div>


        </>
    )
}

export default Row