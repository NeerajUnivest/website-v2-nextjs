import { ToastContainer } from '@/elements/Toast/Toast';
import Head from 'next/head';
import { createContext } from 'react';
const UtilsProvider = createContext();

const UtilsContext = (props) => {

    return (
        <UtilsProvider.Provider value={{}}>
            <Head>
                <title>Univest is a one-stop solution for all investment problems.</title>
                <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
                <meta name="theme-color" content="#00439D" />
                <meta name="msapplication-navbutton-color" content="#00439D" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
            </Head>
            {props.children}

            <ToastContainer />
            <div id="pop-up-container" />
        </UtilsProvider.Provider>
    )
}
export { UtilsProvider, UtilsContext };