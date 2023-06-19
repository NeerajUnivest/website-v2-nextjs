import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import React, { createContext, useState, useEffect } from 'react';
import ReactModal from 'react-modal';
// import './StockPageModal.css'
import closeIcon from '../assets/icn/closeIcon.svg';

const customStyles = (isPhone) => ({
    content: {
        top: 'auto',
        left: isPhone ? '0' : '50%',
        right: isPhone ? '0' : 'auto',
        bottom: isPhone ? '0' : '50%',
        // marginRight: '-50%',
        transform: !isPhone && 'translate(-50%, 50%)',
        width: isPhone ? '100%' : '600px',
        padding: isPhone ? 0 : '20px',
        borderRadius: !isPhone && '20px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
    },
    overlay: {
        backgroundColor: '#20202099',
        zIndex: 20
    }
});

const ModalProvider = createContext();

const ModalContext = (props) => {

    const { width } = useWindowSize();
    const [modal, setModal] = useState(false);
    const [modalData, setModaldata] = useState([]);
    const [title, setTitle] = useState('');

    const closeModalHandler = () => {
        setModal(false);
    }
    return (
        <ModalProvider.Provider value={{ modal, setModal, setModaldata, setTitle }}>
            {props.children}

            <ReactModal
                // shouldCloseOnOverlayClick
                isOpen={modal}
                ariaHideApp={false}
                shouldFocusAfterRender={false}
                onRequestClose={closeModalHandler}
                style={customStyles(width < 746)}
            // className="StockPageModal"
            // overlayClassName="OverlayStockPageModal"
            >
                <div className='mt-6 '>
                    <div className='mx-4 flex flex-row justify-between'>
                        <div className='font-Inter text-[16px] leading-[24px] text-[#232A31] font-semibold'>
                            {title}
                        </div>
                        <button onClick={closeModalHandler}>
                            <Image src={closeIcon} alt="close" className='w-[14px] h-[14px]' />
                        </button>
                    </div>
                    <div className='overflow-y-auto mt-4 px-4 font-medium font-Inter text-[12px] leading-[18px] h-[50vh]'>
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
        </ModalProvider.Provider>
    )
}
export { ModalContext, ModalProvider };