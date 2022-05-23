import './card.styles.css'
import ProfileEllipse from '../../../../assets/ProfileEllipse.png'
import Star from '../../../../assets/Star.png'
const Card = () => {
  return (
    <div className='card-container p-4 flex flex-col'>
      <div className='flex flex-row'>
        <img src={ProfileEllipse} alt='profile' />
        <div className='flex flex-col ml-2'>
          <div className='profile-name'>Vizet Robert</div>
          <div className='profile-loc'>Arsaw, Poland</div>
        </div>
        <div className='ml-36 rating'>4.5</div>
        <img src={Star} alt='star' className='ml-2 w-4 h-3.5' />
      </div>
      <div className='review mt-4 w-80'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac elit
        accumsan, urna nibh nibh et tortor ut enim. Consectetur est est tellus
        semper luctus. Auctor eget pellentesque at ut sed tincidunt nulla nisl.
      </div>
    </div>
  )
}

export default Card
