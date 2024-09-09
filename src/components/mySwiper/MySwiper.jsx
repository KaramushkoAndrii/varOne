

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";



import 'swiper/css';
import './mySwiper.scss'

const MySwiper = ({slides, swiperConfig, moreBtn}) => {

    const { t } = useTranslation()
    return (
        <>
        <Swiper modules={[Navigation]}
        navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        }}
        {...swiperConfig}>
            {slides.map((slide,index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <a href={slide.link} target="_blank" rel="noreferrer">
                                <img src={slide.image} alt={slide.alt} />
                                <div className="slide-description">
                                    <h3>{t(`${slide.title}`)}</h3>
                                    <span>{t(`${moreBtn}`)}</span>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-navigation">
            <div className="swiper-btn-prev" />
            <div className="swiper-btn-next" />
        </div>
        </>
    )
}

export default MySwiper;