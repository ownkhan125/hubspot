'use client';

import React from 'react'
import style from '@/style/home.module.css';

const Achievcard = ({ img, heading, para }) => {
    return (
        <>
            <div className={style.achievcard}>
                <div className={style['img-wrapper']}>
                    <img src={img} alt="" />
                </div>
                <h2>{heading}</h2>
                <p className='fs-14'>{para}</p>

            </div>


        </>
    );
}

export default Achievcard