import Carousel from './Carousel'
import './testimonial.styles.css'

const Testimonial = () => {
  return (
    <div className='mt-12 mb-36 testi-center p-12'>
      <div className='font-secondary text-3xl font-bold'>
        Trusted by Thousands of
      </div>
      <div className='font-secondary text-3xl font-bold'>Happy Customer</div>
      <div className='mt-6 font-primary text-[#818181]'>
        These are the stories of our customers who have joined us with
      </div>
      <div className='font-primary text-[#818181]'>
        great pleasure when using this crazy neobank.
      </div>
      <Carousel />
    </div>
  )
}

export default Testimonial
