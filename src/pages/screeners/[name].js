import axios from "axios";

import DropDown from '../../components/LaptopScreener/DropDown'
import PhoneScreener from '../../components/PhoneScreener/PhoneScreener';
import LaptopScreener from '../../components/LaptopScreener/LaptopScreener';
import MetaSection from "@/elements/MetaSection/MetaSection";
import { useEffect } from "react";
import { Mixpanel } from "@/elements/Mixpanel";

const getScreenersList = async () => {
    let res = await axios.get(`${process.env.apiBaseURL}/resources/screeners/v2`)
    return res.data.data.list
}
const getScreenerDetails = async (screenerCode) => {
    let res = await axios.get(`${process.env.apiBaseURL}/resources/screeners/${screenerCode}`)
    return { ...res.data.screenerDetail, list: res.data.list }
}

export default function ScreenerPage({ name, screenersList, screenerDetails, codeList }) {
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': 'screeners',
                'screener_code': name
            }
        )
    }, [name])
    return (
        <>
            <MetaSection
                title={`${name?.replaceAll('_', ' ')} | Univest`}
                desc={screenerDetails?.description}
                keyWords='stock screener, NSE stocks, stock filter, Indian stock market, stock analysis tool, stock research tool, breakout stocks, multibagger stocks' />

            <section className='lg:pt-24 font-Inter'>
                <div className='max-w-screen-xl mx-auto'>
                    <PhoneScreener name={name} screenersList={screenersList} data={screenerDetails} codeList={codeList} />
                    <div className='hidden md:grid grid-cols-12 min-h-screen'>
                        <div className='col-span-12 lg:col-span-3'>
                            <DropDown list={screenersList} selected={screenerDetails.categoryId} name={name} />
                        </div>
                        <LaptopScreener data={screenerDetails} />
                    </div>
                </div>
            </section>
        </>
    )
}


export async function getServerSideProps(context) {
    const { query } = context;
    const { name } = query;

    const [screenersList, screenerDetails] = await Promise.all([
        getScreenersList(),
        getScreenerDetails(name)
    ]);
    return {
        props: {
            screenersList,
            screenerDetails,
            name,
            codeList: screenersList?.screenersList?.map(ele => ele?.code)
        }
    };
}