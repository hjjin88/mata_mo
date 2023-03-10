
import { useEffect, useState } from "react";

const StudentCertified = ({setPopName }) => {

    const [send, setSend] = useState(false);
    const [Complete, setComplete] = useState(false);

    return (
        <>
            <div className="layer" />
            <div className="StudentCertified">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">학생 인증</div>
                <div className="layer-wrap">
                    <div className="layer-cont">
                        <div className="stu-certi">
                            <p className="txt-notice">현재 캠퍼스 입장 시 학교 이메일 인증이 필요합니다. <br />이메일을 입력해 주세요.</p>
                            <p className="txt-warning">발송된 인증코드는 1시간 동안 유효 합니다. 인증코드를 받지 못한 경우 ‘메일 발송’ 을 눌러 새 인증코드를 발송하세요.</p>
                            <div className="form-certi">
                                <dl>
                                    <dt className="form-label">
                                        <p>이메일</p>
                                    </dt>
                                    <dd>
                                        <div className="form-control">
                                            <input type="text" id="email" placeholder="이메일 주소를 입력해주세요." />
                                            <button type="button" className="btn-squre" onClick={() => {setSend(!send)}}>메일 <br />발송</button>
                                        </div>
                                    </dd>
                                </dl>
                                <dl className={`${send ? "on" : "off"}`}>
                                    <dt className="form-label">
                                        <p>인증코드</p>
                                    </dt>
                                    <dd>
                                        <div className="form-control">
                                            <input type="text" id="code" placeholder="인증코드를 입력해주세요." />
                                            <button type="button" className="btn-squre">인증</button>
                                        </div>
                                    </dd>
                                </dl>
                                <div className="form-request">
                                    <p className="txt-notice gray">학생이 아니지만 입장이 필요하신가요? <br />학교의 허용이 있으면 입장이 가능합니다.</p>
                                    <button type="button">입장 허용 요청</button>
                                </div>
                            </div>
                            <div className="inp-wrap">
                                <input type="text" placeholder="" />
                                <div className="inp-tit pt20">소속 학교 내 닉네임</div>
                                <div className="inp-con ctr">
                                    <input type="text" placeholder="변경 닉네임(20자 이내로 입력)" />
                                    <button type="button" className="inp-btn">인증<br/>확인</button>
                                </div>
                                <span className="er">닉네임을 정확히 입력해 주세요.</span>
                            </div>
                            <div className="sec-btns">
                                <button type="button" className="sec-btn">이전</button>
                                <button type="button" 
                                className={`sec-btn ${Complete ? "off03" : "on02"}`}
                                onClick={() => {setComplete(!Complete)}}
                                >인증 완료</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StudentCertified;
