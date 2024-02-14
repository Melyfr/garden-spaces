import { useState } from 'react'
import './Services.css'

export default function Services() {
  const [activeServices, setActiveServices] = useState([false, false, false, false]);

  const clickHandler = (service:number) => {
    let newActiveServices = [...activeServices];
    newActiveServices[service] = !activeServices[service];
    setActiveServices(newActiveServices);
  };


  return (
    <section className="services" id='services'>
      <div className="container">
        <div className="services__header">
          <p className='subtitle services__subtitle'>Our Service</p>
          <h2 className='title services__title'>What we do</h2>
          <p className='title__desc'>
            Let our designs ignite your creativity and help you envision new possibilities for your own outdoor space.
          </p>
        </div>
        <div className="services__items">
          <div className={activeServices[0] ? 'services__item services__item--active' : 'services__item'} onClick={() => clickHandler(0)}>
            <div className='services__item__header'>
              <h3 className='services__item__title'>Garden Design</h3>
              <div className='services__item__btn'></div>
            </div>
            <p className='services__item__text'>
              Our Garden Design service is tailored to transform your outdoor space into a personalized sanctuary. Our experienced designers work closely with you to understand your vision, preferences, and lifestyle. We take into account factors like soil type, climate, and existing vegetation to create a comprehensive plan.
            </p>
          </div>

          <div className={activeServices[1] ? 'services__item services__item--active' : 'services__item'} onClick={() => clickHandler(1)}>
            <div className='services__item__header'>
              <h3 className='services__item__title'>Landscape Installation</h3>
              <div className='services__item__btn'></div>
            </div>
            <p className='services__item__text'>
              Our expert landscapers will bring your garden design to life, meticulousy planting each tree, shrub, and flower to create a lush and vibrant landscape. We also handle the installation of irrigation system, lighting, and other necessary features.
            </p>
          </div>

          <div className={activeServices[2] ? 'services__item services__item--active' : 'services__item'} onClick={() => clickHandler(2)}>
            <div className='services__item__header'>
              <h3 className='services__item__title'>Hardscaping</h3>
              <div className='services__item__btn'></div>
            </div>
            <p className='services__item__text'>
              Hardscaping is the backbone of any well-designed outdoor space. Our skilled team specializes in crafting durable and visually stunning features such as patios, walkways, retaining walls, and more. Using high-quality materials and precise techniques.
            </p>
          </div>

          <div className={activeServices[3] ? 'services__item services__item--active' : 'services__item'} onClick={() => clickHandler(3)}>
            <div className='services__item__header'>
              <h3 className='services__item__title'>Maintenance</h3>
              <div className='services__item__btn'></div>
            </div>
            <p className='services__item__text'>
            A beautifully designed garden deserves regular care to flourish year-round. Our Maintenance service is designed to keep your outdoor space in optimal condition. Our trained horticulturists and gardeners provide expert care, including pruning, weeding, fertilizing, and pest control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
