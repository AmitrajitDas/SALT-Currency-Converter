import { Container, useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { Feedbacks } from '../../../data/Feedback'
import './carousel.styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import Card from './Card'

const Carousel = () => {
  const matches = useMediaQuery('(max-width:1024px)')

  return (
    <Container className='mt-12'>
      <Swiper
        slidesPerView={matches ? 1 : 3}
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
              <Card feedback={feedback} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Carousel
