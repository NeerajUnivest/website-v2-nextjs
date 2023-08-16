

const ltpClosePrice = (ltp, close) => {
    return (ltp - close)?.toFixed(1);
};

export default function NseOrBsePrice({ nseLtpPrice, nseClosePrice, bseLtpPrice, bseClosePrice, textClass }) {
    if (nseLtpPrice && nseLtpPrice !== 0.0) {
        return (
            <div className={`${textClass} font-Inter ${ltpClosePrice(nseLtpPrice, nseClosePrice) >= 0
                ? "text-[#26A649]" : "text-[#EB4E2C]"}`}>
                {ltpClosePrice(nseLtpPrice, nseClosePrice)} ({Math.abs((ltpClosePrice(nseLtpPrice, nseClosePrice) * 100) / nseClosePrice).toFixed(1)}%)
            </div>
        );
    } else {
        return (
            <div className={`${textClass} font-Inter ${ltpClosePrice(bseLtpPrice, bseClosePrice) >= 0
                ? "text-[#26A649]" : "text-[#EB4E2C]"}`}>
                {ltpClosePrice(bseLtpPrice, bseClosePrice)} ({Math.abs((ltpClosePrice(bseLtpPrice, bseClosePrice) * 100) / bseClosePrice).toFixed(1)}%)
            </div>
        );
    }
}
