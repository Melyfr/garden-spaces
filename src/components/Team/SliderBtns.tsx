import {useSwiper} from 'swiper/react';

export function BtnPrev() {
    const swiper = useSwiper();

    return (
        <span className='slide__nav__btn' onClick={() => swiper.slidePrev()}>Prev</span>
    )
}

export function BtnNext() {
    const swiper = useSwiper();

    return (
        <span className='slide__nav__btn' onClick={() => swiper.slideNext()}>Next</span>
    )
}
