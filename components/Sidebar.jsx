'use client';




import style from '@/style/pricing.module.css';
import Link from 'next/link';


import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sidebar = () => {


    const [activeLink, setActiveLink] = useState('');
    const [down, setDown] = useState('');
    const path = usePathname();

    console.log(path);



    useEffect(() => {

        setActiveLink(path);
        // console.log(router)

    }, [path]);


    const drop = () => {
        setDown(!down);
        let con = document.querySelector('.container-2');
        let main = document.querySelector('#main')
        con.addEventListener('click', (event) => {

            let own = event.target;
            console.log(own)


        })

    }



    return (
        <>
            {/* individuals-section */}

            <div className={`${down ? 'active' : ''}`} onClick={() => drop()}>
                <div className='fs-16 mb-3 '> <p id='main'>Platform Solution</p></div>
                <ul>
                    <li><Link href={''}>Customer Platform</Link></li>
                    <li><Link href={''}>Free Tools</Link></li>
                    <li><Link href={''}>Create a Bundle</Link></li>
                    <li><Link href={''}>Marketing+</Link></li>
                </ul>

                <p className='fs-16 mb-3'>Products</p>
                <ul>
                    <Link href={'/pricing/marketing'} scroll={false} ><li className={`${style.link} ${activeLink === '/pricing/marketing' ? style.active : ''}`}>Marketing</li></Link>
                    <Link href={'/pricing/sales'} scroll={false}> <li className={`${style.link} ${activeLink === '/pricing/sales' ? style.active : ''}`}>Sales</li></Link>
                    <li className={`${style.link} `}><Link href={''}>Service</Link></li>
                    <li className={`${style.link} `}><Link href={''}>Content</Link></li>
                    <li className={`${style.link} `}><Link href={''}>Operation</Link></li>
                    <li className={`${style.link} `}><Link href={''}>Commerce</Link></li>
                </ul>
                <p className='fs-16 mb-3'>USD $</p>
            </div>



        </>
    )
}

export default Sidebar