import axios from "axios";

import DropDown from '../../components/LaptopScreener/DropDown'
import PhoneScreener from '../../components/PhoneScreener/PhoneScreener';
import LaptopScreener from '../../components/LaptopScreener/LaptopScreener';
import MetaSection from "@/elements/MetaSection/MetaSection";
import { useEffect } from "react";
import { Mixpanel } from "@/elements/Mixpanel";
import PageNotFound from "../404";
import { StompSessionProvider, } from "react-stomp-hooks";
import sreenersData from '../../components/Screeners/sreenersData.json'
import Actions from "@/elements/Actions";
const getScreenersList = async () => {
    let ress1 = await axios.get(`${process.env.apiBaseURL}/resources/screeners/v2`)
    return ress1
}
const getScreenerDetails = async (screenerCode) => {
    let ress = await axios.get(`${process.env.apiBaseURL}/resources/screeners/${screenerCode?.toUpperCase()?.replaceAll('-', '_')}`)
    return ress
}

export default function ScreenerPage({ name, screenersCategories, screenersList, screenerDetails, codeList }) {
    useEffect(() => {
        Mixpanel.pageView({
            'page': 'screeners',
            'screener_code': name
        }
        )
    }, [name])

    if (screenerDetails) {
        return (
            <>
                <MetaSection
                    title={sreenersData[name]?.META?.title ?? `${name?.replaceAll('_', ' ')} | Univest`}
                    desc={sreenersData[name]?.META?.desc ?? screenerDetails?.description}
                    schema={sreenersData[name]?.META?.schema}
                    keyWords='stock screener, NSE stocks, stock filter, Indian stock market, stock analysis tool, stock research tool, breakout stocks, multibagger stocks' />

                <section className='lg:pt-24 font-Inter'>
                    <StompSessionProvider url='wss://api.univest.in/univest-socket-endpoint'>
                        <div className='max-w-screen-xl mx-auto'>
                            <PhoneScreener name={name} screenersList={screenersList} data={screenerDetails} codeList={codeList} />
                            <div className='hidden md:grid grid-cols-12 min-h-screen'>
                                <div className='col-span-12 lg:col-span-3'>
                                    <DropDown screenersCategories={screenersCategories} screenersList={screenersList} selected={screenerDetails.categoryId} name={name} />
                                </div>
                                <div className='col-span-12 lg:col-span-9'>
                                    <LaptopScreener data={screenerDetails} name={name} />
                                    {sreenersData[name]?.BOTTOM?.map((ele, j) =>
                                        <div key={j} className='font-Inter mx-4 my-8 hidden md:block'>
                                            {ele.title && <h2 className="text-lg leading-8 font-extrabold">{ele.title}</h2>}
                                            {ele.disc && <p className="text-sm leading-6 font-medium text-[#414141]">{ele.disc}</p>}
                                            {ele.list && <ul className="font-Inter list-decimal pl-5 list-outside text-justify">
                                                {ele.list?.map((ele, i) =>
                                                    <li key={i} className="text-sm leading-6 font-normal text-[#414141]" dangerouslySetInnerHTML={{ __html: ele }} />)}
                                            </ul>}
                                        </div>)}
                                </div>
                            </div>
                            {sreenersData[name]?.BOTTOM?.map((ele, j) =>
                                <div key={j} className='font-Inter mx-4 my-8 md:hidden block'>
                                    {ele.title && <h2 className="text-base leading-7 font-extrabold">{ele.title}</h2>}
                                    {ele.disc && <p className="text-xs leading-5 font-medium text-[#414141]">{ele.disc}</p>}
                                    {ele.list && <ul className="font-Inter list-decimal pl-5 list-outside text-justify">
                                        {ele.list?.map((ele, i) =>
                                            <li key={i} className="text-xs leading-5 font-normal text-[#414141]" dangerouslySetInnerHTML={{ __html: ele }} />)}
                                    </ul>}
                                </div>)}
                        </div>
                    </StompSessionProvider>
                </section>
            </>
        )
    } else {
        return <PageNotFound />
    }
}


export async function getServerSideProps(context) {
    const { query, res } = context;
    const { name } = query;
    var changeName = null;

    // let res = await axios.get(`${process.env.apiBaseURL}/resources/screeners/v2`)
    // let ress = await axios.get(`${process.env.apiBaseURL}/resources/screeners/${name}`)

    const temp = {
        "FUNDAMENTAL_STRONG_STOCKS": "fundamentally-strong-stocks",
        "fundamental-strong-stocks": "fundamentally-strong-stocks",
        "multi-bagger-stocks": "multibagger-stocks",
        "HIGH_DIVIDEND_STOCKS": "highest-dividend-paying-stocks",
        "high-dividend-stocks": "highest-dividend-paying-stocks",
        "52WK_HIGH": "52-week-high",
        "52wk-high": "52-week-high",
        "52WK_LOW": "52-week-low",
        "52wk-low": "52-week-low",
    }
    if (Object.keys(temp).filter(f => f === name).length > 0) {
        res.writeHead(301, {
            location: `/screeners/${temp[name] ?? ''}`
        });
        res.end();
    } else if (Object.values(temp).filter(f => f === name).length > 0) {
        Object.entries(temp).map(([k, v]) => {
            if (v === name) {
                changeName = k;
            }
        })
    }
    console.log(changeName);
    const [ress1, ress] = await Promise.all([getScreenersList(), getScreenerDetails(changeName ?? name)]);

    const data = ress1.data?.data?.list
    var screenerDetails = {}

    if (ress.data?.screenerDetail) {
        screenerDetails = { ...ress.data?.screenerDetail, list: ress.data.list }
    } else {
        screenerDetails = null
    }
    if (data?.screenersList?.filter(f => !f.isFutureStock)?.map(ele => ele?.code)?.includes(name)) {
        res.writeHead(301, {
            location: Actions.toScreener(name)
        });
        res.end();
    }
    return {
        props: {
            screenersCategories: data?.screenersCategories?.filter(f => !f.isFutureStockScreenerCategory),
            screenersList: data?.screenersList?.filter(f => !f.isFutureStock),
            screenerDetails,
            name: (changeName ?? name)?.toUpperCase()?.replaceAll('-', '_'),
            codeList: data?.screenersList?.filter(f => !f.isFutureStock)?.map(ele => ele?.code)
        }
    };
}