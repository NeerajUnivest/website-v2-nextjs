import React from 'react'
import PageNotFound from "../404";
import CalculatorDetails from '@/components/Calculators/CalculatorDetails';
import calcData from './calculatorsJsonData';

export default function CalculatorsPage({ name, data }) {
    if (data) {
        return (
            <CalculatorDetails name={name} data={data} />
        )
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
            data: calcData.filter(f => f.title === name)?.[0]
        }
    }
}