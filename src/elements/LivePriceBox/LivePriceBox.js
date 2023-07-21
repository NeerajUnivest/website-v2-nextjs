import { useRef, useEffect, useState } from "react";



const LivePriceBox = ({ ltpPrice, textClass }) => {
    const [value, setValue] = useState(0);
    const prevData = useRef();
    useEffect(() => {
        setValue(prevData.current ? ltpPrice - prevData.current : 0);
        prevData.current = ltpPrice;
        setTimeout(() => setValue(0), 600);
    }, [ltpPrice]);
    return (
        <div
            className={`font-Inter ease-linear duration-200 ${textClass} text-[#202020]  ${value === 0 ? "bg-[#fff]" : value > 0 ? "bg-[#E0FFE7]" : "bg-[#FFE7E0]"
                }`}
        >
            ₹{ltpPrice?.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </div>
    );
};

export default LivePriceBox;