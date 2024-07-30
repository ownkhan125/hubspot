'use client';

import React from 'react'
import style from '@/style/home.module.css'
import { Swiper as SwiperCore, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PiGreaterThanBold } from "react-icons/pi";
import { PiLessThanBold } from "react-icons/pi";

const Swiper = () => {
    return (
        <>


            <div className={style['swiper-container']}>
                <SwiperCore
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: `${style['swiper-button-prev1']}`,
                        nextEl: `${style['swiper-button-next1']}`,
                    }}
                    
                >
                 
                    <SwiperSlide className={style['swiper-slide']}>Slide 1</SwiperSlide>
                    <SwiperSlide className={style['swiper-slide']}>Slide 2</SwiperSlide>
                    <SwiperSlide className={style['swiper-slide']}>Slide 3</SwiperSlide>
                    <SwiperSlide className={style['swiper-slide']}>Slide 4</SwiperSlide>
                    
                </SwiperCore>
                <div className={style['swiper-button-prev1']}><PiGreaterThanBold className={style['cl-icon']} />
                </div>
                <div className={style['swiper-button-next1']}><PiLessThanBold className={style['cl-icon']} /></div>
            </div>

        </>
    )
}

export default Swiper;