import Head from "next/head";

export default function MetaSection({ title, desc, keyWords }) {
    return (
        <Head>
            <title>{title ?? 'Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'}</title>
            <meta name="description" content={desc ?? "Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%"} />
            <meta name="keywords" content={keyWords ?? "Stock screener, NSE stocks, Indian stock market, stock analysis tool, stock research tool, Smart Investment, Market News, Share Market News, Share Market news, finance news, IPO News, Investment ideas, Trading ideas"} />
            <meta charset="utf-8" />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />

            <meta property="al:android:url" content="https://play.google.com/store/apps/details?id=com.univest.capp" />
            <meta property="al:android:package" content="com.univest.capp" />
            <meta property="al:android:app_name" content="Univest" />

            <meta property="al:ios:url" content="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" />
            <meta property="al:ios:app_store_id" content="6443753518" />
            <meta property="al:ios:app_name" content="Univest" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://univest-prod.s3.ap-south-1.amazonaws.com/UnivestLogo.jpg" />
            <meta name="twitter:site" content="UnivestIN" />
            <meta name="twitter:creator" content="UnivestIN" />
            <meta name="twitter:title" content={title ?? 'Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'} />
            <meta name="twitter:description" content={desc ?? "Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%"} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://univest-prod.s3.ap-south-1.amazonaws.com/UnivestLogo.jpg" />
            <meta property="og:site_name" content="Univest" />
            <meta name="og:title" content={title ?? 'Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'} />
            <meta name="og:description" content={desc ?? "Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%"} />
        </Head>
    )
}