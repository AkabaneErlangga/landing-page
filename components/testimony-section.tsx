"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const TestimonySection = () => {
  return (
    <div className="flex flex-col p-4 lg:p-14 gap-4">
      <h4 className="text-lg">Testimony</h4>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="testimonySwiper"
      >
        <SwiperSlide className='rounded-md'>
          <div className="flex flex-col gap-4 p-4 rounded-md shrink-0 bg-white">
            <p className="text-black">Buat aplikasi sama tim ini emang luar biasa dicarikan
              solusi yang paling murah supaya bisa segera mulai
              aplikasi PPOB saya. 2 minggu udah jadi hasilnya
              saya tinggal fokus di promosi! Terima kasih Nodewave.</p>
            <p className="text-blue-600">Ahmad Prasetyo</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-md'>
          <div className="flex flex-col gap-4 p-4 rounded-md shrink-0 bg-white">
            <p className="text-black">Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
              ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami
              tinggal cerita aja lewat zoom maunya buat website seperti apa,
              langsung dibuatin dengan cepat sama Nodewave.</p>
            <p className="text-blue-600">Laras Ratnadewi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-md'>
          <div className="flex flex-col gap-4 p-4 rounded-md shrink-0 bg-white">
            <p className="text-black">BYang paling keren sih source codenya sekalian dikasih,
              pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
              develop lagi fitur2 baru untuk startup gw.
              Thanks a lot Nodewave supportnya!!</p>
            <p className="text-blue-600">Yusuf Uwais</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonySection;