
import { useEffect, useState } from "react";

const More01 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <div className="popMoBar"></div>
            <ul className="more-ty01 txt-11">
                <li><img src="/img/alarm24.svg" alt="알림 버튼 이미지" /><p>알림</p></li>
                <li><img src="/img/alarmSetting24.svg" alt="알림 설정 버튼 이미지" /><p>알림 설정</p></li>
            </ul>
        </div>
        </>
    )
}
export default More01;
