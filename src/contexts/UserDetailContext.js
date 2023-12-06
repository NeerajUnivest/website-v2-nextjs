import Actions from '@/elements/Actions';
import { FaceBook } from '@/elements/FaceBook';
import LogIn from '@/elements/LogIn/LogIn';
import React, { createContext, useState, useEffect, useRef } from 'react';
// import './StockPageModal.css'


const UserDetailProvider = createContext();

const UserDetailContext = (props) => {
    const inputRef = useRef(null)
    const [btn, setBtn] = useState(null)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        FaceBook.pageView()
        setUserData(JSON.parse(Actions.getCookie("user_details") ?? "{}"))
    }, [])


    return (
        <UserDetailProvider.Provider value={{ inputRef, btn, setBtn, userData, setUserData }}>
            {props.children}

            {btn?.show && <LogIn inputRef={inputRef} btn={btn} userData={userData} setUserData={setUserData} />}
        </UserDetailProvider.Provider>
    )
}
export { UserDetailContext, UserDetailProvider };