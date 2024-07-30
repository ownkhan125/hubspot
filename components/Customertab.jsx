'use client';

import React from 'react'
import style from '@/style/home.module.css'
import Link from 'next/link';

const Customertab = ({ logo, heading, para1, para2, para3, img, video, className }) => {
    return (
        <>
            <div className={`${style.customertab} ${className}  py-6`}>
                <div className='w-[100%] md:w-[50%]'>
                    <div className={style['logo-wrapper']}>
                        <img src={logo} alt="" width={200} height={100} />
                    </div>
                    <h4 className='my-2'>{heading}</h4>
                    <div className='my-3'>
                        <strong>The Challenge</strong>
                        <p>{para1}</p>
                    </div>

                    <div className='my-3'>
                        <strong>The Solution</strong>
                        <p>{para2}</p>
                    </div>

                    <div className='my-3'>
                        <p>{para3}</p>
                    </div>

                    <div>
                        <Link href={'/'} className='underline underline-offset-1 text-blue-700'>
                            Read the full cast study
                        </Link>
                    </div>

                </div>
                <div className='w-[100%] md:w-[50%]'>
                    <div className={style['img-wrapper']}>
                        <div > {video} </div>
                        <img src={img} alt="" height={500} width={500} />

                    </div>

                </div>
            </div>


        </>
    )
}

export default Customertab