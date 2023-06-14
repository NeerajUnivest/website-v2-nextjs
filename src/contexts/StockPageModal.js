import React, { createContext, useState, useEffect } from 'react';
import ReactModal from 'react-modal';
// import './StockPageModal.css'

import closeIcon from '../assets/icn/closeIcon.svg';

const ModalContext = createContext();

const ModalProvider = (props) => {

    // modal
    const [modal, setModal] = useState(false);
    const [modalData, setModaldata] = useState([]);
    const [title, setTitle] = useState('');
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [modal])

    const closeModalHandler = () => {
        setModal(false);
    }
    return (
        <ModalContext.Provider value={{ modal, setModal, setModaldata, setTitle }}>
            {props.children}

            <ReactModal
                isOpen={modal}
                ariaHideApp={false}
                shouldFocusAfterRender={false}
                onRequestClose={closeModalHandler}
                className="StockPageModal"
                overlayClassName="OverlayStockPageModal"
            >
                <div className='mt-6'>
                    <div className='mx-4 flex flex-row justify-between'>
                        <div className='font-Poppins text-[16px] leading-[24px] text-[#232A31] font-semibold'>
                            {title}
                        </div>
                        <button onClick={closeModalHandler}>
                            <img src={closeIcon} alt="close" className='w-[14px] h-[14px]' />
                        </button>
                    </div>
                    <div className='overflow-y-auto mt-4 px-4 font-medium font-Poppins text-[12px] leading-[18px] h-[50vh]'>
                        {modalData?.map((ele, i) =>
                            <div className='my-2' key={i}>
                                <div className='mb-2'>{ele.heading}</div>
                                <div className='text-[#8E8E93]'>
                                    {ele.details}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ReactModal>
        </ModalContext.Provider>
    )
}
export { ModalContext, ModalProvider as default };