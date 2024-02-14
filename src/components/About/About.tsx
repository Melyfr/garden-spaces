import './About.css'

export default function About() {
  return (
    <section className="about" id='about'>
      <div className="container">
        <div className="about__header">
          <p className='subtitle about__subtitle'>About us</p>
          <h2 className='title about__title'>Create from a small garden</h2>
          <p className='title__desc'>
            We aim to spark your creativity and passion for gardening through our articles, images, and real-life stories.
          </p>
        </div>
        <div className="about__items">

        <div className="about__line">
          <div className="about__item about__item--oak">
            <div className='oak__img'></div>
            <div className="oak__content">
              <a className="about__btn">Buy now</a>
              <div className='about__price'>
                <span>Oak</span>
                <span>$4.50</span>
              </div>
            </div>
          </div>
          <div>
            <div className="about__item about__item--about">
              <h3 className='about__item__title'>Create from a small garden to beautify your enviroment</h3>
              <p className='desc'>
                That's why we offer a treasure trove of educational resources.
              </p>
            </div>
            <div className='about__item about__item--img'></div>
          </div>
        </div>
          
        <div className='about__line'>
          <div className="about__item about__item--clients">
            <div className='clients__top'>
              <h3 className='about__item__title'>Fragrant flower scent</h3>
              <p className='desc'>
                Our team of experienced gardeners, landscapers, and horticulturists is ready to turn your vision into reality.
              </p>
            </div>
            <div className='clients__bottom'>
              <div>
                <span className='clients__percent'>96%</span>
                <p className='clients__satisfaction'>Clients Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="about__item about__item--overview">
            <ul className='about__item__list'>
              <li>
                <h4 className='about__item__subtitle'>Seeds and Seedlings</h4>
                <p className='desc'>
                  Choose from a variety of premium seeds and healthy seedings to ensure a strong start for your crops.
                </p>
              </li>
              <li>
                <h4 className='about__item__subtitle'>Fertilizers and Soil Enhancers</h4>
                <p className='desc'>
                  Enhance soil fertility and promote healthy plant growth with our range of organic fertilizers and sail amendments.
                </p>
              </li>
              <li>
                <h4 className='about__item__subtitle'>Crop Protection</h4>
                <p className='desc'>
                  Safeguard your crops from pests and diseases with our proven range of enviromentally friendly crop protection solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
