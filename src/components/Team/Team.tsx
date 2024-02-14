import { Swiper, SwiperSlide} from 'swiper/react';
import { BtnPrev, BtnNext } from './SliderBtns';
import 'swiper/css';
import './Team.css'

import teamOne from '../../assets/team1.png'
import teamTwo from '../../assets/team2.png'
import teamThree from '../../assets/team3.png'

export default function Team() {
  return (
    <section className="team" id="team">
    <div className="container">
      <div className="team__header">
        <p className='subtitle team__subtitle'>Team</p>
        <h2 className='title team__title'>Work for you</h2>
      </div>
      <Swiper className="team__slider" >
        <SwiperSlide className='team__slide'>
          <img src={teamOne} className="slide__img"></img>
          <div className="slide__content">
            <div className="slide__header">
              <span className='slide__name'>— Adam S.</span>
              <span className="slide__post">Marketer</span>
            </div>
            <div className="slide__text">
              <p>
                Possesses in-depth knowledge of plants, landscape design, and environmentally sustainable methods for tending to garden spaces. A creative approach and a commitment to excellence make each garden crafted by them a true work of art. Known for transforming outdoor spaces into vibrant and sustainable havens.
              </p>
              <p>
                Experienced gardener specializing in creating unique landscape solutions. 
              </p>
            </div>
            <div className="slide__nav"> 
              <BtnPrev />
              <span>01 / 03</span>
              <BtnNext />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='team__slide'>
          <img src={teamTwo} className="slide__img"></img>
          <div className="slide__content">
            <div className="slide__header">
              <span className='slide__name'>— Jeffrey P.</span>
              <span className="slide__post">Gardener</span>
            </div>
            <div className="slide__text">
              <p>
                Holds profound knowledge of plants, crafting astonishing compositions and harmonious garden spaces. Strives for an ecologically clean approach in caring for plants and upholds an aesthetic that blends beauty with functionality. Recognized for transforming ideas into visually stunning and ecologically conscious landscapes.
              </p>
              <p>
                Professional gardener specializing in landscape design.
              </p>
            </div>
            <div className="slide__nav">
              <BtnPrev />
                <span>02 / 03</span>
              <BtnNext />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='team__slide'>
          <img src={teamThree} className="slide__img"></img>
          <div className="slide__content">
            <div className="slide__header">
              <span className='slide__name'>— Alaina W.</span>
              <span className="slide__post">Designer</span>
            </div>
            <div className="slide__text">
              <p>
                Possesses a unique vision and a creative approach to crafting picturesque and functional outdoor spaces. Deep knowledge of plants, structures, and color solutions allows them to create distinctive landscapes tailored to meet the clients' needs. Renowned for seamlessly blending aesthetics with practicality in outdoor design.
              </p>
              <p>
                Talented designer specializing in landscape design.
              </p>
            </div>
            <div className="slide__nav">
              <BtnPrev />
                <span>03 / 03</span>
              <BtnNext />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  )
}
