
import { useEffect, useState } from "react";

const Memo = ({setPopName }) => {

    return (
        <>
        <div className="Memo TopCtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">메모</div>
            <div className="write-con memo">
                <textarea type="text" placeholder=""/>
            </div>
        </div>
        </>
    )
}
export default Memo;
