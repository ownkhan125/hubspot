import Sidebar from '@/components/Sidebar';
import style from '@/style/pricing.module.css'
import Link from 'next/link';


const PricingLayout = ({ children }) => {


    return (
        <div className={`${style['individuals-section']} container-2`}>


            <div className='flex flex-col md:flex-row '>
                <div className='w-[100%] md:w-[20%] my-6'>
                    <Sidebar />
                </div>
                <div className='w-[100%] md:w-[80%]'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PricingLayout;
