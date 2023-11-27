import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { BlackButton } from "./Button/Button";
import { toast } from "./Toast/Toast";
import axios from "axios";
import { Mixpanel } from "./Mixpanel";

export default function HeroSearchBox({ isDark = false }) {
    const [number, setNumber] = useState('')
    const [error, setError] = useState(null)
    const submit = () => {
        if (number.length === 10) {
            axios.get(`${process.env.apiBaseURL}/resources/website/get-phone-call/${number}`)
                .then(res => {
                    toast.notify(res.data?.message)
                    setNumber('')
                })
            Mixpanel.track(
                'lead_submitted',
                {
                    'number': number,
                }
            )
        } else {
            setError('Please enter a valid number')
        }
    }
    return (<div className="mx-4 lg:mx-0">
        <p className={`mt-10 lg:mt-14 mb-1 mx-1 text-sm lg:text-base font-medium ${isDark ? 'text-white' : 'text-[#414141]'}`}>
            Connect with wealth advisor today
        </p>
        <div className='w-full sm:w-[460px] h-10 lg:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs lg:text-base font-medium'>
            <BsTelephone className='h-4 lg:h-14 ml-4 lg:ml-6' color="#747474" size={24} />
            <input className='w-[calc(100%-90px)] caret-primary ml-2.5 lg:ml-4 text-[#747474]' type='text' placeholder='Enter your mobile number'
                value={number} pattern="[0-9]*" inputMode="numeric" onChange={(e) => {
                    var numbers = /^[0-9]+$/;
                    if (e.target.value.match(numbers) || e.target.value === '') {
                        setError(null)
                    } else {
                        setError('Please enter a valid number')
                    }
                    setNumber(e.target.value)
                }} />
            <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-full ml-auto' text='Get a callback' onClick={submit} />
        </div>
        {error &&
            <div className='flex items-center ml-2 mt-1 '>
                <AiFillInfoCircle color='#EB4E2C' className='text-[12px] mr-1' />
                <div className={`text-[10px] ${error ? 'text-[#EB4E2C]' : 'text-[#747474]'}`}>
                    {error}
                </div>
            </div>}
    </div>
    )
}
