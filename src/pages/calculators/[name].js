import React from 'react'
import PageNotFound from "../404";
import CalculatorDetails from '@/components/Calculators/CalculatorDetails';

export default function CalculatorsPage({ name }) {
    if (name) {
        return (
            <CalculatorDetails name={name} />
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
            name: name
        }
    }
}