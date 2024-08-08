'use client';



import Customercard from '@/components/Customercard';
import { FaCheckCircle } from 'react-icons/fa';
import style from '@/style/pricing.module.css';
import React, { useEffect, useState } from 'react';
import Marketingcard from '@/components/Marketingcard';
import { tableJSON } from '@/json/table';

const page = ({params}) => {
    const [showAll, setShowAll] = useState(false);
    const [table, setTable] = useState([]);

    console.log(params);

    useEffect(() => {
        (async () => {
            try {

                // const response = await fetch('json/table.json');
                // console.log(await response.json());

                setTable(tableJSON)
            } catch (error) {
                console.log(error?.message);
            }
        })();
    }, [])




    const toggleRows = () => {
        setShowAll(!showAll);
    };



    const list = [
        { icon: '/images/saleshub.svg', li: 'Free marketing tools', include: 'include' },
        { icon: '/images/arrow.svg', li: 'Free marketing tools' },
        { icon: '/images/servicehub.svg', li: 'Free marketing tools' },
        { icon: '/images/setting.svg', li: 'Free marketing tools' }
    ]





    return (

        <>


            <div className='my-[60px] px-4'>
                <div className='text-center mb-3'>
                    <h3>Customer Platform</h3>
                    <p className='fs-14'>Everything you need to scale your business, bundled together and discounted.</p>
                </div>


                <div className='flex flex-wrap justify-around gap-1 mb-10'>

                    <Customercard
                        month={'$0'}
                        // seat={'Include seate 5'}
                        // add={'Additional seats start at $45/mo'}
                        start={'Includes'}
                        list={list}
                    />

                    <Customercard
                        month={'$800/mo'}
                        seat={'Include seate 5'}
                        add={'Additional seats start at $45/mo'}
                        start={'Starter Plus'}
                        list={list}
                    />

                    <Customercard
                        month={'$1000/mo'}
                        seat={'Include seate 15'}
                        add={'Additional seats start at $75/mo'}
                        start={'Professinal Customer Platform'}
                        list={list}
                    />


                </div>



                {/* Start table-section */}
                <div>


                    <table className='w-[100%]'>
                        <tr>
                            <th><h4>Features</h4></th>
                            <th>

                                <p className='fs-14'>Marketing hub Prfessional</p>
                                <span className='text-sm'>$800/mo</span>

                            </th>
                            <th className='hidden md:table-cell'>
                                <p className='fs-14'>Marketing hub Enterprises</p>
                                <span className='text-sm'>$3,600/mo</span>
                            </th>
                        </tr>

                        {
                            table.slice(0, showAll ? table.length : 7).map((item, index) => (
                                <tr>
                                    <td className={style.textstart} key={index}>
                                        <p className='fs-14'>{item.heading}</p>
                                    </td>

                                    <td>
                                        <p className='text-sm'>{item.professional}</p>
                                    </td>

                                    <td className='hidden md:table-cell'>
                                        <p className='text-sm'>{item.enterprises}</p>
                                    </td>
                                </tr>


                            ))
                        }

                    </table>
                    {table.length > 7 && (

                        <button onClick={toggleRows} className={`${style.grade} ${showAll ? style.active : ''} `}>
                            {showAll ? 'See Less' : 'See all features and limits'}
                        </button>

                    )}



                </div>
                {/* End table-section */}

                <div className='market-section'>
                    <Marketingcard
                        img={"/images/market.webp"}
                        question={'Need a complete marketing solution?'}
                        heading={'Marketing+'}
                        para={'A complete solution that unites the power of content marketing with world-class lead generation and marketing automation tools.'}
                        button={'Learn more'}
                    />
                </div>


            </div>


        </>
    )
}

export default page;