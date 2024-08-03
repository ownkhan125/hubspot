'use client';
import React, { useState } from 'react';
import style from '../../style/pricing.module.css';
import Link from 'next/link';
import Customercard from '@/components/Customercard';
import { FaCheckCircle } from 'react-icons/fa';



const page = () => {
  const list = [
    { icon: '/images/saleshub.svg', li: 'Free marketing tools', include: 'include' },
    { icon: '/images/arrow.svg', li: 'Free marketing tools' },
    { icon: '/images/servicehub.svg', li: 'Free marketing tools' },
    { icon: '/images/setting.svg', li: 'Free marketing tools' }
  ]


  const table = [
    { heading: 'Form automation', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Marketing event object', professional: <FaCheckCircle className='mx-auto text-green-600' />, enterprises: <FaCheckCircle className='mx-auto text-green-600' /> },
    { heading: 'Shared inbox', professional: 'upto 100 inbox', enterprises: 'upto 200 inbox' },
    { heading: 'Subdomain and country code top-level domain availability', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Form automation', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Shared inbox', professional: 'upto 100 inbox', enterprises: 'upto 200 inbox' },
    { heading: 'Subdomain and country code top-level domain availability', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Form automation', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Marketing event object', professional: <FaCheckCircle className='mx-auto text-green-600' />, enterprises: <FaCheckCircle className='mx-auto text-green-600' /> },
    { heading: 'Shared inbox', professional: 'upto 100 inbox', enterprises: 'upto 200 inbox' },
    { heading: 'Subdomain and country code top-level domain availability', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Form automation', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Shared inbox', professional: 'upto 100 inbox', enterprises: 'upto 200 inbox' },
    { heading: 'Subdomain and country code top-level domain availability', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' },
    { heading: 'Form automation', professional: 'Unlimited actions, plus omni-channel marketing automation', enterprises: 'Unlimited actions, plus omni-channel marketing automation' }
  ]

  const [showAll, setShowAll] = useState(false);

  // Toggle function to show/hide all rows
  const toggleRows = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      {/* individuals-section */}

      <div className={`${style['individuals-section']} container-2 `}>
        <div className="flex">
          <div className="w-[20%] h-screen p-4">
            <div className="sticky top-0">
              <p className='fs-16 mb-3'>Platform Solution</p>
              <ul>
                <li><Link href={''}>Customer Platform</Link></li>
                <li><Link href={''}>Free Tools</Link></li>
                <li><Link href={''}>Create a Bundle</Link></li>
                <li><Link href={''}>Marketing+</Link></li>
              </ul>

              <p className='fs-16 mb-3'>Products</p>
              <ul>
                <li><Link href={''}>Marketing</Link></li>
                <li><Link href={''}>Sales</Link></li>
                <li><Link href={''}>Service</Link></li>
                <li><Link href={''}>Content</Link></li>
                <li><Link href={''}>Operation</Link></li>
                <li><Link href={''}>Commerce</Link></li>
              </ul>
              <p className='fs-16 mb-3'>USD $</p>
            </div>
          </div>



          <div className='w-[80%] '>
            <div className='text-center mb-3'>
              <h3>Customer Platform</h3>
              <p className='fs-14'>Everything you need to scale your business, bundled together and discounted.</p>
            </div>


            <div className='flex justify-around mb-10'>

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




            <div>
              <table className='w-[100%]'>
                <tr>
                  <th><h4>Features</h4></th>
                  <th>

                    <p className='fs-14'>Marketing hub Prfessional</p>
                    <span className='text-sm'>$800/mo</span>

                  </th>
                  <th>
                    <p className='fs-14'>Marketing hub Enterprises</p>
                    <span className='text-sm'>$3,600/mo</span>
                  </th>
                </tr>

                {table.slice(0, showAll ? table.length : 7).map((item, index) => (
                  <tr>
                    <td className={style.textstart} key={index}>
                      <p className='fs-14'>{item.heading}</p>
                    </td>

                    <td>
                      <p className='text-sm'>{item.professional}</p>
                    </td>

                    <td>
                      <p className='text-sm'>{item.enterprises}</p>
                    </td>
                  </tr>


                ))}





              </table>
              {table.length > 7 && (

                <button onClick={toggleRows} className={`${style.grade} ${showAll ? style.active : ''} fs-14 w-[100%] mt-[-16px]`}>
                  {showAll ? 'Show Less' : 'Show More'}
                </button>

              )}


            </div>



          </div>

        </div>
      </div>



    </>
  );
}

export default page;