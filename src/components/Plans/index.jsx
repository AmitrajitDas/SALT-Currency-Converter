import Card from './Card'
import { Plans as PlansArr } from '../../data/Plans'
import './plans.styles.css'

const Plans = () => {
  return (
    <div className='m-16'>
      <div className='bg-secondary flex-col-center p-24'>
        <h2 className='font-secondary font-bold text-3xl'>Choose Your Plan</h2>
        <div className='font-primary mt-6'>
          Let’s choose a package that is best for you and explore it happily and
        </div>
        <div className='font-primary'>cheerfully</div>
        <div className='flex flex-row justify-between mt-12'>
          {PlansArr?.map((plan) => (
            <>
              <Card plan={plan} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plans
