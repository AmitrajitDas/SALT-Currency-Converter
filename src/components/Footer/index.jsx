import SALT from '../../assets/SaltLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import './footer.styles.css'

const Footer = () => {
  return (
    <div className='bg-background flex flex-row px-36 pt-36 pb-12'>
      <div className='flex flex-col m-12'>
        <img src={SALT} alt='salt' className='w-28' />
        <div className='salt-info mt-6'>Salt provides borderless banking</div>
        <div className='salt-info'>and compliance solutions.</div>
        <div className='salt-info-2 mt-8'>
          Copyright @ Poziom Ventures Pvt. Ltd
        </div>
        <div className='salt-info-2'>
          Disclaimer | Privacy Policy | Terms of Service
        </div>
      </div>
      <div className='flex flex-col ml-48 mt-12'>
        <div className='footer-h6'>Company</div>
        <div className='pages flex flex-col mt-8'>
          <div>About Us</div>
          <div>Blogs</div>
          <div>Careers</div>
        </div>
        <div className='contact-us'>contact@salt.pe</div>
      </div>
      <div className='flex flex-col ml-48 mt-12'>
        <div className='footer-h6'>Add us to your life!</div>
        <div className='pages flex flex-col mt-8'>
          <div className='flex flex-row'>
            <FacebookIcon />
            <div className='ml-2'>Facebook</div>
          </div>
          <div className='flex flex-row'>
            <TwitterIcon />
            <div className='ml-2'>Twitter</div>
          </div>
          <div className='flex flex-row'>
            <LinkedInIcon />
            <div className='ml-2'>Linkedin</div>
          </div>
          <div className='flex flex-row'>
            <InstagramIcon />
            <div className='ml-2'>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
