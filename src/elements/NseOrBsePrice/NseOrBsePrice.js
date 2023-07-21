

const ltpClosePrice = (ltp, close) => {
    return (ltp - close)?.toFixed(1);
};

export default function NseOrBsePrice({ ltpPrice, closePrice, textClass }) {
    return (
        <div className={`${textClass} font-Inter ${ltpClosePrice(ltpPrice, closePrice) >= 0
            ? "text-[#26A649]" : "text-[#EB4E2C]"}`}>
            {ltpClosePrice(ltpPrice, closePrice)} ({Math.abs((ltpClosePrice(ltpPrice, closePrice) * 100) / closePrice).toFixed(1)}%)
        </div>
    );
}

