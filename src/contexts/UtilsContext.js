import { createContext, useState, useEffect } from 'react';
// import loader from '../assets/Icons/loader.gif';


const UtilsProvider = createContext();

// var authToken = '';

const UtilsContext = (props) => {
    // let [feedback, setFeedback] = useState({ show: false, icon: starEmoji, text: '', style: 'border-[#00439D] bg-[#EFF6FF]' });
    // useEffect(() => {
    //     if (feedback.show) {
    //         setTimeout(() => {
    //             setFeedback({ ...feedback, show: false })
    //             return;
    //         }, 3000)
    //     }
    // }, [feedback])
    // let [showLoader, setShowLoader] = useState(false);

    return (
        <UtilsProvider.Provider value={{
            // sendData, setFeedback, authToken, setShowLoader, handleBack 
        }}>
            {props.children}

            {/* <div className={`fixed ease-in duration-500 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[48px] w-11/12 pl-4 rounded-[4px] flex flex-row justify-between  border ${feedback.style} ${feedback.show ? 'bottom-16 z-50' : '-bottom-32 -z-50'}`}>
                <div className='flex flex-row'>
                    <div className='grid content-center mr-4'>
                        <img src={feedback.icon} className='max-h-6' alt='icon' />
                    </div>
                    <div className='grid content-center font-Inter text-[12px] leading-[16px] font-medium text-[#202020]'>
                        <div dangerouslySetInnerHTML={{ __html: feedback.text }} />
                    </div>
                </div>
                <div className='grid content-center px-4' onClick={() => setFeedback({ ...feedback, show: false })}>
                    <img src={closeIcon} className='' alt='icon' />
                </div>
            </div>*/}
            {/* {showLoader &&
                <div className='z-[51] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-screen w-screen bg-[#20202099]'>
                    <img src={loader} className='z-[52] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[200px]' alt='loading....' />
                </div>} */}
        </UtilsProvider.Provider>
    )
}
export { UtilsProvider, UtilsContext };