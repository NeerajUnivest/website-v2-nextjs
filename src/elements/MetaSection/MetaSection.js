import Head from "next/head";

export default function MetaSection({ title, desc, keyWords }) {
    return (
        <Head>
            <title>{title ?? 'Univest is a one-stop solution for all investment problems.'}</title>
            <meta name="description" content={desc ?? "We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views."} />
            <meta name="keywords" content={keyWords ?? "bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips"} />
            <meta charset="utf-8" />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />

            <meta property="al:android:url" content="https://" />
            <meta property="al:android:package" content="com.univest.capp" />
            <meta property="al:android:app_name" content="Univest" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://univest-prod.s3.ap-south-1.amazonaws.com/UnivestLogo.jpg" />
            <meta name="twitter:site" content="UnivestIN" />
            <meta name="twitter:creator" content="UnivestIN" />
            <meta name="twitter:title" content={title ?? 'Univest is a one-stop solution for all investment problems.'} />
            <meta name="twitter:description" content={desc ?? "We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views."} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://univest-prod.s3.ap-south-1.amazonaws.com/UnivestLogo.jpg" />
            <meta property="og:site_name" content="Univest" />
            <meta name="og:title" content={title ?? 'Univest is a one-stop solution for all investment problems.'} />
            <meta name="og:description" content={desc ?? "We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views."} />

        </Head>
    )
}