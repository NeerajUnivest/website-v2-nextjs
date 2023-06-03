import React, { useState, useEffect, Fragment, useContext } from 'react'
import axios from "axios";

import DropDown from '../../components/LaptopScreener/DropDown'
import PhoneScreener from '../../components/PhoneScreener/PhoneScreener';
import LaptopScreener from '../../components/LaptopScreener/LaptopScreener';

const getScreenersList = async () => {
    let res = await axios.get(`https://api.univest.in/resources/screeners/v2`)
    return res.data.data.list
}
const getScreenerDetails = async (screenerCode) => {
    let res = await axios.get(`https://api.univest.in/resources/screeners/${screenerCode}`)
    return { ...res.data.screenerDetail, list: res.data.list }
}

export default function ScreenerPage({ name, screenersList, screenerDetails }) {
    return (
        <section className='lg:pt-24 font-Inter'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='md:hidden'>
                    <PhoneScreener name={name} screenersList={screenersList.screenersList} data={screenerDetails} loading={false} />
                </div>
                <div className='hidden md:grid grid-cols-12 min-h-screen'>
                    <div className='col-span-12 lg:col-span-3'>
                        <DropDown list={screenersList} selected={screenerDetails.categoryId} />
                    </div>
                    <LaptopScreener data={screenerDetails} />
                </div>
            </div>
        </section>
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
            name
        }
    };
}