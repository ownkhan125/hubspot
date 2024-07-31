'use client';



import React from 'react'

const Logo = ({img}) => {
    return (
        <>
            <div className='w-[100px] h-[50px] mx-1 flex items-center justify-center'>
                <img src={img} alt="" height={50} width={50}  />
            </div>

        </>
    )
}

export default Logo