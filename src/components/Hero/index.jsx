import HeroSVG from '../../assets/Hero.png'
import './hero.styles.css'

const Hero = () => {
  return (
    <div className='px-44 mt-20 mb-20 flex flex-row justify-between'>
      <div className='flex flex-col'>
        <h1 className='font-primary text-5xl font-bold'>Not your average</h1>
        <h1 className='font-primary text-5xl font-bold'>banking experience.</h1>
        <div className='mt-12'>Banking, but seasoned with SALT.</div>
        <div>We deal with all things related to global business</div>
        <div>banking so that you don't have to.</div>
        <button className='mt-12 hero-btn text-secondary rounded-full cursor-pointer'>
          Get Started!
        </button>
      </div>
      <div>
        {' '}
        <img src={HeroSVG} alt='hero' />
      </div>
    </div>
  )
}

export default Hero
