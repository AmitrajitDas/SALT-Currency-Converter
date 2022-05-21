import Logo from '../../assets/SaltLogo.png'
import './styles.css'

const Header = () => {
  return (
    <div className='font-primary p-12 flex flex-row'>
      <img src={Logo} alt='logo' className='cursor-pointer	' />
      <div className='mx-12 font-bold flex flex-row'>
        <div className='mx-6 text-primary cursor-pointer'>About</div>
        <div className='mx-6 cursor-pointer	'>Features</div>
        <div className='mx-6 cursor-pointer	'>Pricing</div>
        <div className='mx-6 cursor-pointer	'>Testimonials</div>
        <div className='mx-6 cursor-pointer	'>Help</div>
      </div>
      <div className='ml-44 font-bold flex flex-row'>
        <div className='ml-12 cursor-pointer	'>Login</div>
        <button className='btn rounded-full text-primary font-bold px-5 py-2 cursor-pointer'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Header
