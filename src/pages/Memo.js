
import { useEffect, useState } from "react";
import PopFooter from "./PopFooter";

const Memo = ({popName, setPopName }) => {

    return (
        <>
        <div className="Memo CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">메모</div>
            <div className="write-con memo">
                <textarea type="text" placeholder=""/>
            </div>
            <PopFooter popName={popName} setPopName={setPopName} />
        </div>
        </>
    )
}
export default Memo;
