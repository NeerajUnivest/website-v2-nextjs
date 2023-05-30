import React, { useState, useEffect, Fragment, useContext } from 'react'
import axios from "axios";

// import DropDown from '../../components/LaptopScreener/DropDown'
import PhoneScreener from '../../components/PhoneScreener/PhoneScreener';
// import LaptopScreener from '../../components/LaptopScreener/LaptopScreener';
import { useRouter } from 'next/router';

const getScreneersList = async () => {
    let res = await axios.get(`https://api.univest.in/resources/screeners/v2`)
    return res.data.data.list
}




export default function ScreenerPage({ screeners }) {
    const router = useRouter();
    const name = router.query.name
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        if (name) {
            axios.get(`https://api.univest.in/resources/screeners/${name}`)
                .then((res) => {
                    if (res.data) {
                        setData({
                            ...res.data.screenerDetail,
                            list: res.data.list ? res.data.list : []
                        });
                        // utils.changeTitle(res.data?.screenerDetail?.title)
                    }
                }).then(() => {
                    document.getElementsByTagName("body")[0]?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                    setTimeout(() => setLoading(false), 100)
                });
        }
    }, [name]);
    return (
        <Fragment>
            <div className='md:hidden'>
                <PhoneScreener name={name} screenersList={screeners.screenersList} data={data} loading={loading} />
            </div>
            {/* <div className='hidden md:grid grid-cols-12 min-h-screen'>
                <div className='col-span-12 lg:col-span-3'>
                    <DropDown list={screener} selected={data.categoryId} />
                </div>
                <LaptopScreener data={data} />
            </div> */}
        </Fragment>
    )
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: { name: 'SHORT_TERM_BULLISH' }
//             },
//             {
//                 params: { name: 'VOLUME_SHOCKERS' }
//             },
//             {
//                 params: { name: 'HIGH_DIVIDEND_STOCKS' }
//             },
//             {
//                 params: { name: 'TOP_GAINERS' }
//             },
//         ],
//         fallback: false
//     }
// }


export async function getServerSideProps() {
    let screeners = await getScreneersList()
    return {
        props: {
            screeners
        }
    };
}