const LectureRoom15 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">크로마키</div>
                    <div className="layer-body">
                        <div className="lecture-chromakey-title">배경 제거</div>
                        <div className="lecture-chromakey">
                            <div className="lecture-chromakey-video">
                                <video className="video" src="http://amssamples.streaming.mediaservices.windows.net/2e91931e-0d29-482b-a42b-9aadc93eb825/AzurePromo.mp4" />
                                <label>
                                    <input type="checkbox"/>
                                    <span>크로마키</span>
                                    <i></i>
                                </label>
                                <button className="lecture-chromakey-pointer" style={{top: '10px', left: '10px'}}></button>
                            </div>
                            <div className="lecture-chromakey-color">
                                <div className="lecture-chromakey-color-select" style={{backgroundColor: '#1F1F1F'}}>
                                    <div className="lecture-chromakey-color-info">
                                        <div className="hex">Hex : #1F1F1F</div>
                                        <div className="rgb">
                                            <span>R : 31</span>
                                            <span>G : 31</span>
                                            <span>B : 31</span>
                                        </div>
                                    </div>
                                    <div className="lecture-chromakey-color-select-range">
                                        <div className="color-range" style={{background: `linear-gradient(90deg, #FFFFFF 20.65%, #1F1F1F 100%)`}}>
                                        <i style={{left: `50%`}}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="lecture-chromakey-color-range">
                                    <div className="lecture-chromakey-color-title">Cutoff</div>
                                    <div className="color-range" style={{background: `linear-gradient(90deg, #FFFFFF 20.65%, #1F1F1F 100%)`}}>
                                        <i style={{left: `5%`}}></i>
                                    </div>
                                </div>
                                <div className="lecture-chromakey-color-range">
                                    <div className="lecture-chromakey-color-title">Falloff</div>
                                    <div className="color-range" style={{background: `linear-gradient(90deg, #FFFFFF 20.65%, #1F1F1F 100%)`}}>
                                        <i style={{left: `80%`}}></i>
                                    </div>
                                </div>
                                <div className="lecture-chromakey-color-list">
                                    <button className="lecture-chromakey-picker active"></button>

                                    <button style={{backgroundColor: '#1F1F1F'}}></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>

                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="button button-outline">적용하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom15;
