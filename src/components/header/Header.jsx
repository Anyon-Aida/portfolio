import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import 'animate.css'

const Header = () => {
  var ReactRotatingText = require('react-rotating-text');

  return (
    <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Zalan Dominik</h1>
          <h2>
            <ReactRotatingText emptyPause={2000} typingInterval={200} deletingInterval={200} items={['Web Developer', 'Web Designer', 'UI/UX Designer']} />
          </h2>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CTA />
          <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt='me'/>
          </div>
          
          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header