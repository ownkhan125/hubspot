'use client';

import React from 'react'
import style from '@/style/home.module.css'
import Link from 'next/link';

const Servicecard = ({img,link, para}) => {
  return (
   <>
   <div className='card text-center'>
    <div className={style['img-wrapper']}>
        <img src={img} alt="" height={100} width={100}/>
    </div>
    <div>
        <Link href={'/'} className='fs-18 text-blue-700 underline underline-offset-1'>{link}</Link>
        <p className='text-sm mt-4'>{para}</p>

    </div>
   </div>
   
   </>
  )
}

export default Servicecard