import Vector from '../../../assets/PlansVector.png'
import Tick from '../../../assets/tick.svg'
import './card.styles.css'

const Card = ({ plan }) => {
  return (
    <div className='card-wrapper items-col-center p-12 mx-12'>
      <img src={Vector} alt='vector' />
      <div className='mt-6 font-bold text-2xl font-secondary'>{plan.tier}</div>
      <div className='mt-12 flex flex-col'>
        {plan.plansArr?.map((plan) => (
          <>
            <div className='flex flex-row mt-6'>
              <img src={Tick} alt='tick' />
              <div className='font-secondary ml-3'>{plan}</div>
            </div>
          </>
        ))}
      </div>
      {plan.charge === 'Free' ? (
        <div className='mt-24 mb-12 font-secondary text-3xl font-bold'>
          {plan.charge}
        </div>
      ) : (
        <div className='mt-24 mb-12 font-secondary text-3xl flex flex-row'>
          <div className='font-bold'>{plan.charge}</div>/mo
        </div>
      )}
      <button className='card-btn rounded-full text-primary font-bold px-8 py-2 cursor-pointer mr-6'>
        Sign Up
      </button>
    </div>
  )
}

export default Card
