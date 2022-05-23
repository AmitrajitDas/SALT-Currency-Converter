import './card.styles.css'
import ProfileEllipse from '../../../../assets/ProfileEllipse.png'
import Star from '../../../../assets/Star.png'

const Card = ({ feedback }) => {
  const { name, location, review, rating } = feedback

  return (
    <div className='card-container p-4 flex flex-col'>
      <div className='flex flex-row'>
        <img src={ProfileEllipse} alt='profile' />
        <div className='flex flex-col ml-2'>
          <div className='font-primary font-bold'>{name}</div>
          <div className='font-primary text-sm'>{location}</div>
        </div>
        <div className='ml-32 font-primary font-bold'>{rating}</div>
        <img src={Star} alt='star' className='ml-2 mt-0.5 w-4 h-3.5' />
      </div>
      <div className='font-primary text-xs mt-4 w-80'>{review}</div>
    </div>
  )
}

export default Card
