import Actions from '@/elements/Actions';
import LogIn from '@/elements/LogIn/LogIn';
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
        borderBottomRightRadius: '0px',
        borderBottomRightRadius: '0px',
    },
    overlay: {
        backgroundColor: '#20202099',
        zIndex: 20
    }
});

const UserDetailProvider = createContext();

const UserDetailContext = (props) => {
    const [btn, setBtn] = useState({ show: false, beforeLogin: '', afterLogin: '' })
    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData(JSON.parse(Actions.getCookie("user_details") ?? "{}"))
    }, [])


    return (
        <UserDetailProvider.Provider value={{ btn, setBtn, userData, setUserData }}>
            {props.children}

            {btn.show && <LogIn btn={btn} userData={userData} setUserData={setUserData} />}
        </UserDetailProvider.Provider>
    )
}
export { UserDetailContext, UserDetailProvider };