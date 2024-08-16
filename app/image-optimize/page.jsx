'use client';


import Image from "next/image";



const page = () => {
    return (
        <>
            <Image
                src="/images/best.png"
                alt="this is image optimization"
                width={150}
                height={150}
            />

        </>
    )
}

export default page