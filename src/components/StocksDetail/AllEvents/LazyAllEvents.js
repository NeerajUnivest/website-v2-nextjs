import React, { useState } from 'react';
import LazyEventCard from '../../elements/EventCard/LazyEventCard';

import EventCard from '../../elements/EventCard/EventCard';

function LazyAllEvents() {
    const [eventType, setEventType] = useState('All');

    const filterEvents = (data) => {
        let elements = data.filter(element => {
            return element.tag === eventType.toLowerCase() || eventType === 'All';
        })

        let events;

        if (elements.length === 0) {
            events = <div>empty</div>;
        } else {
            events = elements.map((element, i) => {
                return <EventCard data={element} key={i} />
            })
        }

        return events;
    }

    return (
        <div>
            <div
                className='font-Inter text-[12px] flex flex-row justify-between mx-4 my-4 overflow-x-auto no-scrollbar'>
                <div
                    className='rounded-[19px] px-3 py-1 font-medium h-[26px] w-1/4 bg-[#D9D9D9] animate-pulse mx-1'></div>
                <div
                    className='rounded-[19px] px-3 py-1 font-medium h-[26px] w-1/4 bg-[#D9D9D9] animate-pulse mx-1'></div>
                <div
                    className='rounded-[19px] px-3 py-1 font-medium h-[26px] w-1/4 bg-[#D9D9D9] animate-pulse mx-1'></div>
                <div
                    className='rounded-[19px] px-3 py-1 font-medium h-[26px] w-1/4 bg-[#D9D9D9] animate-pulse mx-1'></div>
            </div>
            <div className='mx-4 my-2'>
                <LazyEventCard />
                <LazyEventCard />
                <LazyEventCard />
                <LazyEventCard />
                <LazyEventCard />
            </div>
        </div>
    )

}

export default LazyAllEvents;