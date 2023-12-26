import React from 'react'

export default function Calculators({ name }) {
    return (
        <div>Calculators {name}</div>
    )
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