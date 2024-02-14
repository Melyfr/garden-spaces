import './Hero.css'

export default function Hero() {
  return (
      <section className='hero'>
        <div className='container hero__container'>
          <div className="hero__content">
            <p className='subtitle hero__subtitle'>Best choice</p>
            <h2 className='title hero__title'>Transform Your Garden Dream into Reality</h2>
            <p className='desc'>
              Our gardens are more than just collections of plants: they're living works of art. Explore various garden style, from classical formal gardens.
            </p>
            <a href="#" className="btn hero__btn">Get started now</a>
          </div>
          <div className="hero__img">
            <div className='hero__tree'></div>
          </div>
        </div>
      </section>
  )
}
