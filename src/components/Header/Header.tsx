import './Header.css'
import logo from '../../assets/logo.svg'

export default function Header() {
  
  return (
    <div className="container">
      <div className="header">
        <a href="#"><img src={logo} alt="Green Leaf" className='logo'/></a>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
            <li className="nav__item"><a href="#team" className="nav__link">Team</a></li>
          </ul>
        </nav>
        <a href="#" className='btn heaedr__btn'>Contact</a>
      </div>
    </div>
  )
}
