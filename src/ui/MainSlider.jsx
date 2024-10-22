import { Swiper, SwiperSlide } from 'swiper/react'

import { useNewestMovie } from '../hooks/useNewestMovie'
import MainSliderSlide from './MainSliderSlide'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Инициализируйте модули Swiper
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import Loader from './loader'

function MainSlider() {
  const { data, isLoading } = useNewestMovie()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
          >
            {data &&
              data.map((el) => (
                <SwiperSlide key={el.id}>
                  <MainSliderSlide data={el} />
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
    </>
  )
}

export default MainSlider
