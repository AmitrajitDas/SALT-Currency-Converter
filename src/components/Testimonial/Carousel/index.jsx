import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { Feedbacks } from '../../../data/Feedback'
import './carousel.styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import Card from './Card'

const Carousel = () => {
  return (
    <Container className='mt-12'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
      >
        {Feedbacks.map((feedback, index) => {
          return (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Carousel
