'use client';

import React from 'react'
import style from '@/style/home.module.css'
import Link from 'next/link';

const Featurecard = ({ link, para }) => {
    return (
        <>
            <div className='card'>
                <div className='mb-6 text-blue-800 underline underline-offset-1'><Link href="/" >
                    {link}
                </Link></div>
                <p>{para}</p>
            </div>


        </>
    );
}

export default Featurecard