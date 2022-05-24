import Logo from '../../assets/SaltLogo.png'
import './header.styles.css'

const Header = () => {
  return (
    <div className='font-primary py-12 px-44 flex flex-row justify-between'>
      <div className='flex flex-row'>
        <img src={Logo} alt='logo' className='cursor-pointer' />
        <div className='ml-12 flex flex-row nav-links'>
          {window.location.pathname === '/' ? (
            <div className='mx-6 cursor-pointer text-primary font-bold'>
              About
            </div>
          ) : (
            <div className='mx-6 cursor-pointer hover:text-primary hover:font-bold'>
              About
            </div>
          )}

          <div className='mx-6 cursor-pointer hover:text-primary hover:font-bold'>
            Features
          </div>
          <div className='mx-6 cursor-pointer hover:text-primary hover:font-bold'>
            Pricing
          </div>
          <div className='mx-6 cursor-pointer hover:text-primary hover:font-bold'>
            Testimonials
          </div>
          <div className='mx-6 cursor-pointer hover:text-primary hover:font-bold'>
            Help
          </div>
        </div>
      </div>
      <div className='ml-24 font-bold flex flex-row'>
        <div className='ml-12 cursor-pointer hover:text-primary'>Login</div>
        <button className='btn rounded-full text-primary font-bold px-8 py-1 cursor-pointer hover:bg-primary hover:text-[#FFFFFF]'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Header
