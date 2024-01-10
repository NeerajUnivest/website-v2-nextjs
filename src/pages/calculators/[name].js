import React, { useContext, useEffect } from 'react'
import PageNotFound from "../404";
import CalculatorDetails from '@/components/Calculators/CalculatorDetails';
import calcData from '../../components/Calculators/calculatorsJsonData';
import { UserDetailProvider } from '@/contexts/UserDetailContext';
import { Mixpanel } from '@/elements/Mixpanel';
import MetaSection from '@/elements/MetaSection/MetaSection';

export default function CalculatorsPage({ name, data }) {
    const userDetail = useContext(UserDetailProvider)
    useEffect(() => {
        Mixpanel.pageView(
            {
                'page': 'calculator_detail',
                'calculator_name': name?.toLowerCase()
            }
        )
        userDetail.setBtn({ show: false, beforeLogin: 'Get started', afterLogin: 'Download the app now', isProPage: false, page: 'calculators_home' })
    }, [])


    if (data) {
        return (<>
            <MetaSection
                title={data?.metaTitle}
                desc={data?.metaDesc}
                keyWords='stock screener, NSE stocks, stock filter, Indian stock market, stock analysis tool, stock research tool, breakout stocks, multibagger stocks' />
            <CalculatorDetails name={name} data={data} />
        </>)
    } else {
        return <PageNotFound />
    }

}

export async function getServerSideProps(ctx) {
    const { query } = ctx;
    const { name } = query;


    return {
        props: {
            name: name,
            data: calcData?.filter(f => f.url === name)?.[0] ?? null
        }
    }
}