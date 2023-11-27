import { memo } from "react";
import Countdown from 'react-countdown';




function CustomCount({ onComplete, sec }) {
    return (
        <Countdown date={Date.now() + (1000 * sec)} r renderer={({ seconds, completed }) => completed ? <div /> : <div className='mx-2 font-Inter text-[12px] leading-[20px] font-medium text-[#00439D]'>({seconds}s)</div>}
            onComplete={onComplete} />
    )
}

export default memo(CustomCount);