'use client';



import React from 'react'
import style from '@/style/pricing.module.css';

const Marketingcard = ({ img, question, heading, para, button }) => {
    return (
        <>
            <div className={style['market-card']}>
                <div className='row justify-between'>

                    <div className='w-[50%] md:w-[35%]'>
                        <div className='ratio-1x1'>
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className='w-[100%] md:w-[60%]'>
                        <div className='flex flex-col gap-y-4'>
                            <p>{question}</p>
                            <p className='text-xl'>{heading}</p>
                            <p className='fs-14'>{para}</p>
                            <div className='w-full md:w-[50%]'><button className='btn-blue'>{button}</button></div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Marketingcard