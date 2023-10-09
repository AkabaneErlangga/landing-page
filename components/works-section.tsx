"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import work1 from '@/public/img/work-bg-1.png'
import workthumb1 from '@/public/img/work-thumb-1.png'
import work2 from '@/public/img/work-bg-2.png'
import workthumb2 from '@/public/img/work-thumb-2.png'

const WorkSection = () => {
  return (
    <div className="flex flex-col items-center p-4 lg:p-14 gap-4">
      <h3 className='text-2xl font-semibold'>Our Works</h3>
      <div className="flex w-full overflow-x-scroll gap-4">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="workSwiper"
        >
          <SwiperSlide className='rounded-xl'>
            <div className='relative shrink-0 rounded-xl'>
              <div className="h-[520px] gap-3"
                style={{
                  backgroundImage: `url(${work1.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  filter: "blur(2px)"
                }}>
              </div>
              <div className="absolute top-48 lg:top-1/2 -translate-y-1/2">
                <div className='flex flex-col lg:flex-row gap-3 p-4'>
                  <Image
                    src={workthumb1.src}
                    alt='work-bg-1'
                    width={557}
                    height={329}
                  />
                  <div className="flex flex-col gap-4 lg:w-1/3">
                    <h4 className='text-black text-3xl text-center font-bold'>Rayu Motor</h4>
                    <p className='text-black'>AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='rounded-lg'>
            <div className='relative shrink-0 rounded-lg'>
              <div className="h-[520px] gap-3"
                style={{
                  backgroundImage: `url(${work2.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition:"center",
                  filter: "blur(2px)"
                }}>
              </div>
              <div className="absolute top-48 lg:top-1/2 -translate-y-1/2">
                <div className='flex flex-col lg:flex-row gap-3 p-4'>
                  <Image
                    src={workthumb2.src}
                    alt='work-bg-1'
                    width={557}
                    height={329}
                  />
                  <div className="flex flex-col gap-4 lg:w-1/3">
                    <h4 className='text-3xl text-center font-bold'>Rayu Motor</h4>
                    <p>AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  );
}

export default WorkSection;