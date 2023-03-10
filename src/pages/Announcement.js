import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Announcement = ({ popName, setPopName }) => {

    return (
        <>
        {/* <div className="layer" /> */}
            <div className="Announcement">
                <div className="entire-tit">공지사항</div>
                <button type="button" className="entireclose closeWt16" onClick={ e => { setPopName(); }} />
                <div className="Announcement-con">
                    <Swiper className="con-wrap"
                    modules={[Navigation, Pagination]}
                    // spaceBetween={25}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    // scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide >
                        <div className="con-inner-slide">
                            <div className="con-box">
                            
                            </div>
                            <fome className="form-check">
                                <label htmlFor="ex-chk">오늘 하루 보지 않기</label>
                                <input type="checkbox" name="ex-chk" id="ex-chk" />
                            </fome>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="con-inner-slide">
                            <div className="con-box">
                                <div className="con-tit">휴강 안내</div>
                                <div className="con-txt">
                                    안녕하세요. <br />
                                    금일 ‘2024 현우진의 뉴런 - 수학Ⅰ’ 강의는<br />
                                    강사의 개인사정으로 인하여 휴강됐음을 알립니다. <br />
                                    차주 수업은 예정대로 진행될 예정이오니 <br />
                                    참고하시길 바랍니다. <br />
                                    <br /><br />
                                    감사합니다.<br />
                                    <br /><br /><br />
                                    2023.02.21 (화)
                                </div>
                            </div>
                            <fome className="form-check">
                                <label htmlFor="ex-chk">오늘 하루 보지 않기</label>
                                <input type="checkbox" name="ex-chk" id="ex-chk" />
                            </fome>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="con-inner-slide">
                            <div className="con-box">
                                <div className="con-tit">휴강 안내</div>
                                <div className="con-txt">
                                    안녕하세요. <br />
                                    금일 ‘2024 현우진의 뉴런 - 수학Ⅰ’ 강의는<br />
                                    강사의 개인사정으로 인하여 휴강됐음을 알립니다. <br />
                                    차주 수업은 예정대로 진행될 예정이오니 <br />
                                    참고하시길 바랍니다. <br />
                                    <br /><br />
                                    감사합니다.<br />
                                    <br /><br /><br />
                                    2023.02.21 (화)
                                </div>
                            </div>
                            <fome className="form-check">
                                <label htmlFor="ex-chk">오늘 하루 보지 않기</label>
                                <input type="checkbox" name="ex-chk" id="ex-chk" />
                            </fome>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="con-inner-slide">
                            <div className="con-box">
                                <div className="con-tit">휴강 안내</div>
                                <div className="con-txt">
                                    안녕하세요. <br />
                                    금일 ‘2024 현우진의 뉴런 - 수학Ⅰ’ 강의는<br />
                                    강사의 개인사정으로 인하여 휴강됐음을 알립니다. <br />
                                    차주 수업은 예정대로 진행될 예정이오니 <br />
                                    참고하시길 바랍니다. <br />
                                    <br /><br />
                                    감사합니다.<br />
                                    <br /><br /><br />
                                    2023.02.21 (화)
                                </div>
                            </div>
                            <fome className="form-check">
                                <label htmlFor="ex-chk">오늘 하루 보지 않기</label>
                                <input type="checkbox" name="ex-chk" id="ex-chk" />
                            </fome>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="con-inner-slide">
                            <div className="con-box">
                                <div className="con-tit">휴강 안내</div>
                                <div className="con-txt">
                                    안녕하세요. <br />
                                    금일 ‘2024 현우진의 뉴런 - 수학Ⅰ’ 강의는<br />
                                    강사의 개인사정으로 인하여 휴강됐음을 알립니다. <br />
                                    차주 수업은 예정대로 진행될 예정이오니 <br />
                                    참고하시길 바랍니다. <br />
                                    <br /><br />
                                    감사합니다.<br />
                                    <br /><br /><br />
                                    2023.02.21 (화)
                                </div>
                            </div>
                            <fome className="form-check">
                                <label htmlFor="ex-chk">오늘 하루 보지 않기</label>
                                <input type="checkbox" name="ex-chk" id="ex-chk" />
                            </fome>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Announcement;
