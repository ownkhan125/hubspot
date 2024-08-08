'use client'

import { useEffect } from 'react';

const page = () => {



    useEffect(() => {
        (async () => {
            try {

                await fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(val => console.log(val))

            } catch (error) {
                console.log(error?.message);
            }
        })();
    }, [])





    return (

        <>
            <div className='container-1'>
                <div className='row'>
                    <div className='w-[60%] bg-[#fef4ea;]'>
                        <div className='ratio-21x9'>
                            <img src="/images/report.png" width={200} height={150} alt="" />
                        </div>
                        <div className='p-8'>
                            

                        </div>
                    </div>
                    <div className='w-[40%]'></div>
                </div>

            </div>

        </>
    )
}

export default page