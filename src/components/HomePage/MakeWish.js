import { useState } from "react";
import makeWish from "../../assets/img/makeWish.webp";

export default function MakeWish() {
    const [data, setData] = useState({ email: '', request_body: '', });
    const handleSubmit = (e) => {
        // utils.sendData(
        //     'web_wish_request',
        //     {
        //         ...data,
        //         page: 'webhome',
        //     }
        // )
        // utils.setFeedback({ ...utils.feedback, show: true, text: `Thanks! We're received your request` })
        // setData({ email: '', request_body: '' });
        e.preventDefault();
    }
    return (
        <div className="w-full lg:min-h-[650px] bg-[#E8E4FF] relative  bg-[length:200vw_100%] lg:bg-[length:100vw_100%]" style={{
            backgroundImage: `url(${makeWish})`, backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
        }} data-aos="fade-up">
            <div className='mx-auto w-10/12 lg:w-6/12 py-8 lg:py-12'>
                <form className='flex flex-col z-0' onSubmit={handleSubmit}>
                    <div className='mb-6 text-center font-Inter font-semibold text-[18px] leading-[24px] text-[#00439D] lg:text-[32px] lg:leading-[32px] lg:text-[#000000]'>
                        Make a wish! We’ ll make it happen
                    </div>
                    <div className='my-2 lg:my-4'>
                        <input className='w-full focus:caret-[#00439D] rounded-[16px] lg:rounded-[30px] h-[40px] lg:h-[60px] px-4 lg:px-8 font-Inter text-[12px] lg:text-[18px] leading-[24px]' type="email" placeholder='Your email address' required
                            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className='my-2 lg:my-4'>
                        <textarea className='w-full focus:caret-[#00439D] rounded-[16px] lg:rounded-[30px] h-[160px] py-2 lg:py-4 lg:h-[328px] px-4 lg:px-8 font-Inter text-[12px] lg:text-[18px] leading-[24px]' type="text" placeholder='Drop your message' required
                            value={data.request_body} onChange={(e) => setData({ ...data, request_body: e.target.value })} />
                    </div>
                    <div className='my-2 lg:my-4 mx-auto'>
                        <button className='rounded-full bg-[#5C46D9] hover:bg-[#42339a] h-11 lg:h-14 w-40 lg:w-60'>
                            <div className='font-Inter text-white text-[16px] leading-[20px] lg:text-[24px] lg:leading-[32px]'>
                                Submit
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
