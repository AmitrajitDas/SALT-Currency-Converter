import SALT from '../../assets/SaltLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import './footer.styles.css'

const Footer = () => {
  return (
    <div className='bg-background px-36 pt-36 pb-12 wrapper'>
      <div className='flex flex-col m-12'>
        <img src={SALT} alt='salt' className='w-28' />
        <div className='text-[#434343] font-primary text-lg mt-6'>
          Salt provides borderless banking
        </div>
        <div className='text-[#434343] font-primary text-lg'>
          and compliance solutions.
        </div>
        <div className='text-[#434343] font-primary text-sm mt-8'>
          Copyright @ Poziom Ventures Pvt. Ltd
        </div>
        <div className='text-[#434343] font-primary text-sm'>
          Disclaimer | Privacy Policy | Terms of Service
        </div>
      </div>
      <div className='flex flex-col ml-48 mt-12'>
        <div className='font-primary font-bold text-lg text-[#434343]'>
          Company
        </div>
        <div className='font-primary text-base flex flex-col mt-8'>
          <div className='mb-2 hover:font-bold cursor-pointer'>About Us</div>
          <div className='mb-2 hover:font-bold cursor-pointer'>Blogs</div>
          <div className='mb-2 hover:font-bold cursor-pointer'>Careers</div>
        </div>
        <div className='font-primary font-bold cursor-pointer text-base text-[#434343]'>
          contact@salt.pe
        </div>
      </div>
      <div className='flex flex-col ml-48 mt-12'>
        <div className='font-primary font-bold text-lg text-[#434343]'>
          Add us to your life!
        </div>
        <div className='font-primary text-base flex flex-col mt-8'>
          <div className='flex flex-row mb-2'>
            <FacebookIcon />
            <div className='ml-2 hover:font-bold cursor-pointer'>Facebook</div>
          </div>
          <div className='flex flex-row mb-2'>
            <TwitterIcon />
            <div className='ml-2 hover:font-bold cursor-pointer'>Twitter</div>
          </div>
          <div className='flex flex-row mb-2'>
            <LinkedInIcon />
            <div className='ml-2 hover:font-bold cursor-pointer'>Linkedin</div>
          </div>
          <div className='flex flex-row mb-2'>
            <InstagramIcon />
            <div className='ml-2 hover:font-bold cursor-pointer'>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
