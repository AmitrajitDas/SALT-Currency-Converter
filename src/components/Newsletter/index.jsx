import './newsletter.styles.css'

const Newsletter = () => {
  return (
    <div
      className='my-36 mr-36 ml-56'
      style={{
        marginTop: '-10rem',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='newsletter-container p-24 flex flex-row justify-between'>
        <div className='flex flex-col'>
          <div className='font-secondary text-3xl font-semibold'>
            Subscribe Now to
          </div>
          <div className='font-secondary text-3xl font-semibold'>
            Get Special Features!
          </div>
          <div className='font-primary text-[#818181] mt-2'>
            Banking, but seasoned with SALT.
          </div>
        </div>
        <button className='newsletter-btn text-secondary rounded-full cursor-pointer hover:bg-[#1541AA] font-primary font-bold'>
          Subscribe Now!
        </button>
      </div>
    </div>
  )
}

export default Newsletter
