import React from 'react'
import '../scss/garam_LP.scss'
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

const LiveParking = () => {
    return (
        <div className='LiveParking'>
            <h3>실시간 주차 현황</h3>

            <div className="LpBtn">
                <Button className='LpBtn1' onClick={() => { }}>
                    공용 주차장
                </Button>

                <Button className='LpBtn2' onClick={() => { }}>
                    여성전용 주차장
                </Button>

                <Button className='LpBtn3' onClick={() => { }}>
                    장애인전용 주차장
                </Button>
            </div>


            <div className="LpBigBox">
                <div className="Lp1"></div>

                <div className="LpSlide">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={22}
                        className="mySwiper LpSwiper"
                    >
                        <SwiperSlide className="LpSlide">Slide 1</SwiperSlide>

                        <SwiperSlide className="LpSlide">Slide 2</SwiperSlide>

                        <SwiperSlide className="LpSlide">Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default LiveParking