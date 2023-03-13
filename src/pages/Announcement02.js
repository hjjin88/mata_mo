import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Announcement02  = ({setPopName }) => {
    return (
        <>
        <div className="Tutorial Announcement02">
        <div className="entire-tit">공지사항</div>
                <button type="button" className="entireclose closeWt16" onClick={ e => { setPopName(); }} />
          <div className="Tutorial-con txt-40Wt">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <p>메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <p>메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <p>메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <p>메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/resources/img/bg.png" alt="공지사항 이미지" />
                <p>메타스쿨에 오신 것을 환영합니다! <br /> 키보드 버튼을 눌러 내 아바타와 카메라를 움직일 수 있습니다.</p>
              </SwiperSlide>
              <fome className="form-check">
                <label htmlFor="ex-chk">오늘 하루 보지 않기</label>
                <input type="checkbox" name="ex-chk" id="ex-chk" />
              </fome>
            </Swiper>
          </div>
        </div>
        </>
    )
}
export default Announcement02;
