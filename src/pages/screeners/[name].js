import axios from "axios";

import DropDown from '../../components/LaptopScreener/DropDown'
import PhoneScreener from '../../components/PhoneScreener/PhoneScreener';
import LaptopScreener from '../../components/LaptopScreener/LaptopScreener';
import MetaSection from "@/elements/MetaSection/MetaSection";
import { useEffect } from "react";
import { Mixpanel } from "@/elements/Mixpanel";
import PageNotFound from "../404";
import { StompSessionProvider, } from "react-stomp-hooks";
const getScreenersList = async () => {
    let res = await axios.get(`${process.env.apiBaseURL}/resources/screeners/v2`)
    return res
}
const getScreenerDetails = async (screenerCode) => {
    let ress = await axios.get(`${process.env.apiBaseURL}/resources/screeners/${screenerCode}`)
    return ress
}

export default function ScreenerPage({ name, screenersCategories, screenersList, screenerDetails, codeList }) {
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': 'screeners',
                'screener_code': name
            }
        )
    }, [name])

    if (screenerDetails) {
        return (
            <>
                <MetaSection
                    title={`${name?.replaceAll('_', ' ')} | Univest`}
                    desc={screenerDetails?.description}
                    keyWords='stock screener, NSE stocks, stock filter, Indian stock market, stock analysis tool, stock research tool, breakout stocks, multibagger stocks' />

                <section className='lg:pt-24 font-Inter'>
                    <StompSessionProvider url='wss://api.univest.in/univest-socket-endpoint'>
                        <div className='max-w-screen-xl mx-auto'>
                            <PhoneScreener name={name} screenersList={screenersList} data={screenerDetails} codeList={codeList} />
                            <div className='hidden md:grid grid-cols-12 min-h-screen'>
                                <div className='col-span-12 lg:col-span-3'>
                                    <DropDown screenersCategories={screenersCategories} screenersList={screenersList} selected={screenerDetails.categoryId} name={name} />
                                </div>
                                <LaptopScreener data={screenerDetails} name={name} />
                            </div>
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
    const { query } = context;
    const { name } = query;

    // let res = await axios.get(`${process.env.apiBaseURL}/resources/screeners/v2`)
    // let ress = await axios.get(`${process.env.apiBaseURL}/resources/screeners/${name}`)

    const [res, ress] = await Promise.all([getScreenersList(), getScreenerDetails(name)]);

    const data = res.data?.data?.list
    var screenerDetails = {}

    if (ress.data?.screenerDetail) {
        screenerDetails = { ...ress.data?.screenerDetail, list: ress.data.list }
    } else {
        screenerDetails = null
    }
    return {
        props: {
            screenersCategories: data?.screenersCategories?.filter(f => !f.isFutureStockScreenerCategory),
            screenersList: data?.screenersList?.filter(f => !f.isFutureStock),
            screenerDetails,
            name,
            codeList: data?.screenersList?.filter(f => !f.isFutureStock)?.map(ele => ele?.code)
        }
    };
}