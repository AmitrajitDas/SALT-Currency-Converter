import Card from './Card'
import './plans.styles.css'

const Plans = () => {
  const plans = [
    {
      tier: 'Free Plan',
      plansArr: [
        'Unlimited Free Data',
        'Encrypted Data',
        '24x7 Support',
        'Works on All Devices',
      ],
      charge: 'Free',
    },
    {
      tier: 'Starter Plan',
      plansArr: [
        'Unlimited Free Data',
        'Encrypted Data',
        '24x7 Support',
        'Works on All Devices',
      ],
      charge: '$9',
    },
    {
      tier: 'Pro Plan',
      plansArr: [
        'Unlimited Free Data',
        'Encrypted Data',
        '24x7 Support',
        'Works on All Devices',
      ],
      charge: '$12',
    },
  ]

  return (
    <div className='mt-20 mb-20 p-12'>
      <div className='bg-secondary flex-col-center p-24'>
        <h2 className='font-secondary font-bold text-3xl'>Choose Your Plan</h2>
        <div className='font-primary mt-6'>
          Let’s choose a package that is best for you and explore it happily and
        </div>
        <div className='font-primary'>cheerfully</div>
        <div className='flex flex-row justify-between mt-12'>
          {plans?.map((plan) => (
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
