const brokerList = [
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
]

const stocksList = [
    {
        compName: "Siemens Ltd.",
        symbol: "SIEMENS",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE003A01024.png",
    },
    {
        compName: "HDFC Bank Ltd.",
        symbol: "HDFCBANK",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE040A01034.png",
    },
    {
        compName: "ITC Ltd.",
        symbol: "ITC",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE154A01025.png",
    },
    {
        compName: "Reliance Industries Ltd.",
        symbol: "RELIANCE",
        logoUrl: "https://univest-staging.s3.ap-south-1.amazonaws.com/stock_logos/INE002A01018.png",
    },
    {
        compName: "Britannia Industries Ltd.",
        symbol: "BRITANNIA",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE216A01030.png",
    },
    {
        compName: "Grasim Industries Ltd.",
        symbol: "GRASIM",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE047A01021.png",
    },
    {
        compName: "Vedanta Ltd.",
        symbol: "VEDL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE205A01025.png",
    },
    {
        compName: "NTPC Ltd.",
        symbol: "NTPC",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE733E01010.png",
    },
    {
        compName: "Axis Bank Ltd.",
        symbol: "AXISBANK",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE238A01034.png",
    },
    {
        compName: "Pidilite Industries Ltd.",
        symbol: "PIDILITIND",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE318A01026.png",
    },
    {
        compName: "Indian Oil Corporation Ltd.",
        symbol: "IOC",
        logoUrl: "https://univest-staging.s3.ap-south-1.amazonaws.com/stock_logos/INE242A01010.png",
    },
    {
        compName: "Infosys Ltd.",
        symbol: "INFY",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE009A01021.png",
    },
    {
        compName: "Adani Enterprises Ltd.",
        symbol: "ADANIENT",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE423A01024.png",
    },
    {
        compName: "Wipro Ltd.",
        symbol: "WIPRO",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE075A01022.png",
    },
    {
        compName: "ICICI Bank Ltd.",
        symbol: "ICICIBANK",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE090A01021.png",
    },
    {
        compName: "Mahindra & Mahindra Ltd.",
        symbol: "M&M",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE101A01026.png",
    },
    {
        compName: "JSW Steel Ltd.",
        symbol: "JSWSTEEL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE019A01038.png",
    },
    {
        compName: "HCL Technologies Ltd.",
        symbol: "HCLTECH",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE860A01027.png",
    },
    {
        compName: "Adani Total Gas Ltd.",
        symbol: "ATGL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE399L01023.png",
    },
    {
        compName: "Tata Consultancy Services Ltd.",
        symbol: "TCS",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE467B01029.png",
    }]
export default function handler(req, res) {
    res.status(200).json({
        brokerList,
        stocksList
    })
}
