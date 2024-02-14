import './Footer.css'
import logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__img'>
        <div className="container">
          <p className='footer__img_text'>Making your business unique</p>
        </div>
      </div>
      <div className="container">
      <div className='footer__content'>
        <div className="footer__cta">
          <a href="#"><img src={logo} alt="Green Leaf" className='logo'/></a>
          <p className='desc footer__desc'>Breathing life into spaces: where expertise in gardens meets artistry in design.</p>
          <form className='footer__form'>
            <input type="text" placeholder='Enter your email' className='footer__input'/>
            <button className='btn footer__btn'>Subscribe</button>
          </form>
        </div>
        <nav className="footer__nav">
          <ul>
            <h4 className='footer__title'>Services</h4>
            <li><a href="#" className='footer__link'>Delivery free</a></li>
            <li><a href="#" className='footer__link'>Tree garden</a></li>
            <li><a href="#" className='footer__link'>Plantation</a></li>
            <li><a href="#" className='footer__link'>World green</a></li>
          </ul>
          <ul>
            <h4 className='footer__title'>About Us</h4>
            <li><a href="#" className='footer__link'>Payment Plans</a></li>
            <li><a href="#" className='footer__link'>Make saving More</a></li>
            <li><a href="#" className='footer__link'>Delivery Calculator</a></li>
            <li><a href="#" className='footer__link'>Price</a></li>
          </ul>
          <div className="footer__contact">
          <h4 className='footer__title'>Contact info</h4>
          <p className='footer__link'>455 West Orchard Street Kings Mountain, NC 280867</p>
          <p className='footer__link footer__icon footer__number'>+088 (246) 642-27-10</p>
          <p className='footer__link footer__icon footer__email'>example@gmail.com</p>
        </div>
        </nav>
      </div>
      </div>
    </footer>
  )
}
