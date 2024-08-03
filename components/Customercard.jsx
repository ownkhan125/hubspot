'use client';


import React, { useState } from 'react';
import style from '@/style/pricing.module.css';
import Switch from 'react-switch'


const Customercard = ({ month, seat, add, start, list }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);

    };

    return (
        <>
            <div className={style.card}>
                <div className='flex items-center bg-green-400 rounded-md p-2 absolute top-2 right-2'>
                    <span className='text-[10px] uppercase text-white text-center'>recommended</span>
                </div>
                <div className='my-4'>
                    <h4 className='mb-6'>Professional Customer Platform</h4>
                    <p className='fs-14 mb-4'>Comprehensive marketing, sales, customer service, content, and operations software</p>
                    <span className='fs-12'>Starts at</span>
                    <h5 className='mb-4'>{month}</h5>
                    <p className='fs-14'>{seat}</p>
                    <p className='fs-14 mb-6'>{add}</p>
                </div>

                <div>
                    <Switch
                        className='mb-5'
                        onChange={handleChange}
                        checked={checked}
                        handleDiameter={60}
                        checkedHandleIcon={true}
                        offColor="#dfe3eb"
                        onColor="#dfe3eb"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={70}          // Switch ki height set kar rahe hain
                        width={250}
                    // translate='10px'
                    />
                    <button className='btn-blue'>Talk to Sales</button>
                </div>



                <div>
                    <p className='fs-14'>{start}</p>

                    <div className='flex flex-col gap-4'>
                        {list.map((item, index) => (
                            <div key={index} className='flex items-center gap-3'>
                                <div className='w-[30px] mr-2'>
                                    <img src={item.icon} alt="" />
                                </div>
                                <div>
                                    <p className='fs-14'>{item.li}</p>
                                    <span className='text-sm'>{item.include}</span>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>

        </>
    );
}

export default Customercard