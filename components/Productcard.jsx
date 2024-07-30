'use client';


import React from 'react'
import style from '@/style/home.module.css'
import Link from 'next/link';


const Productcard = ({ img, heading, content, link }) => {
    return (
        <>
            <div className={style.card}>
                <div className='text-center'>
                    <div className={style['img-wrapper']}>
                        <img src={img} alt="" height={50} width={50} />
                    </div>
                    <h4 className='my-3'>{heading}</h4>
                </div>

                <div>
                    <p className='mb-4'>{content}</p>
                    <div className='mb-6 text-blue-800 underline underline-offset-1'><Link href="/" >
                        {link}
                    </Link></div>
                </div>
            </div>

        </>
    )
}

export default Productcard