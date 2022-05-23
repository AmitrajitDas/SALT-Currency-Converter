import './newsletter.styles.css'

const Newsletter = () => {
  return (
    <div
      className='my-36 mr-36 ml-56'
      style={{ marginTop: '-10rem', position: 'absolute' }}
    >
      <div className='newsletter-container p-24 flex flex-row justify-between'>
        <div className='flex flex-col'>
          <div className='newsletter-header'>Subscribe Now to</div>
          <div className='newsletter-header'>Get Special Features!</div>
          <div className='newsletter-sub mt-2'>
            Banking, but seasoned with SALT.
          </div>
        </div>
        <button className='newsletter-btn text-secondary rounded-full cursor-pointer'>
          Subscribe Now!
        </button>
      </div>
    </div>
  )
}

export default Newsletter
