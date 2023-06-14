import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import forEmpty from '../../../assets/img/forEmpty.webp';
// import { UtilsContext } from '../../UtilsProvider/UtilsProvider';
import Image from 'next/image'

import EventCard from '../../../elements/EventCard/EventCard';

let data = []
function AllEvents({ showAll, name, limit }) {
    //mixpanel
    // const utils = useContext(UtilsContext)

    const [eventType, setEventType] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/corporate-actions?fin-code=${name}`)
            .then((res) => {
                data = res.data
            }).then(setTimeout(() => setLoading(false), 300))
    }, [name]);

    const filterEvents = (data) => {
        let elements = data.filter(element => {
            return element.category.toLowerCase() === eventType.toLowerCase() || eventType === 'All';
        })

        let events;

        if (elements.length === 0) {
            events = <div className='pt-10'>
                <Image src={forEmpty} alt='icon' className='mx-auto' width={250} />
                <div className='text-center font-Inter text-[16px] landing-[28px] text-black font-semibold mt-3'>
                    Nothing to show for now
                </div>
                <div className='text-center font-Inter text-[12px] landing-[18px] text-[#414141] mt-2'>
                    Don’t worry we’l keep you posted
                </div>
            </div>;
        } else {
            events = elements.map((element, i) => {
                return <EventCard data={element} name={name} key={i} />
            })
        }

        return events;
    }

    return (
        <div className={`relative`}>
            <div id='events' className='absolute -top-44' />
            <div>
                <div className='font-Inter text-[16px] text-black flex flex-row justify-between mx-4 mt-6 mb-4 font-semibold'>
                    <div className='flex flex-row'>
                        <div>Events</div>
                    </div>
                </div>
            </div>
            <div className='font-Inter text-[12px] flex flex-row justify-between mb-3 overflow-x-auto no-scrollbar swiper-no-swiping'>
                <button
                    className={eventType === 'All' ?
                        'rounded-[19px] ml-3 px-3 py-1 my-2 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] ml-3 px-3 py-1 my-2 font-medium '}
                    onClick={() => setEventType('All')}
                >
                    All
                </button>
                <button
                    className={eventType === 'Results' ?
                        'rounded-[19px] px-3 py-1 my-2 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 my-2 font-medium '}
                    onClick={() => setEventType('Results')}
                >
                    Results
                </button>
                <button
                    className={eventType === 'Dividends' ?
                        'rounded-[19px] px-3 py-1 my-2 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 my-2 font-medium '}
                    onClick={() => setEventType('Dividends')}
                >
                    Dividends
                </button>
                <button
                    className={eventType === 'Announcements' ?
                        'rounded-[19px] px-3 py-1 my-2 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 my-2 font-medium '}
                    onClick={() => setEventType('Announcements')}
                >
                    Announcements
                </button>
                <button
                    className={eventType === 'Others' ?
                        'rounded-[19px] px-3 py-1 my-2 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold min-w-[130px]' :
                        'rounded-[19px] px-3 py-1 my-2 font-medium min-w-[130px]'}
                    onClick={() => setEventType('Others')}
                >
                    Other Activities
                </button>
            </div>
            <div className='mx-4 my-2'>
                {!loading ? filterEvents(data) : <div className="mx-4 bg-[#D9D9D9] rounded-lg px-3 pt-5 pb-4 h-[305px] w-full animate-pulse"></div>}
            </div>
        </div>
    )

}

export default AllEvents;