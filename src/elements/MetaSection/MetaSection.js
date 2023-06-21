import Head from "next/head";

export default function MetaSection({ title, desc, keyWords }) {
    return (
        <Head>
            <title>{title ?? 'Univest is a one-stop solution for all investment problems.'}</title>
            <meta name="description" content={desc ?? "We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views."} />
            <meta name="keywords" content={keyWords ?? "bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips"} />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}
