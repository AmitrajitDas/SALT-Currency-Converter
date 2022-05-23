import Carousel from './Carousel'
import './testimonial.styles.css'

const Testimonial = () => {
  return (
    <div className='mt-12 testi-center p-12'>
      <div className='testi-header'>Trusted by Thousands of</div>
      <div className='testi-header'>Happy Customer</div>
      <div className='mt-6 testi-sub'>
        These are the stories of our customers who have joined us with
      </div>
      <div className='testi-sub'>
        great pleasure when using this crazy noebank.
      </div>
      <Carousel />
    </div>
  )
}

export default Testimonial
