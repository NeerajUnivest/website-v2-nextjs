import Head from "next/head";
import Script from "next/script";

export default function MetaSection({ title, desc, keyWords, schema }) {
    const defaultSchema = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://univest.in/",
        "name": "Univest",
        "logo": "https://storage.googleapis.com/app-assets-univest/website-assets/UnivestLogo.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurugram, Haryana",
            "postalCode": "122002",
            "streetAddress": "10, Poorvi Marg, DLF Phase 2, Sector 25, Gurugram, Haryana 122002"
        },
        "email": "support@univest.in",
        "telephone": "+91-8800049790",
        "sameAs": [
            "https://www.facebook.com/Univest.in",
            "https://www.instagram.com/univest.in/",
            "https://twitter.com/UnivestIN",
            "http://linkedin.com/company/univest-in",
            "https://www.youtube.com/channel/UCRlFx-WxA4yY7Y33SRZaQ4w",
            "https://www.crunchbase.com/organization/univest-557f"
        ],
        "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91-8800049790",
            "contactType": "Customer Service"
        }
        ],
        "foundingDate": "2022",
        "founders": [
            {
                "@type": "Person",
                "name": "Pranit Arora",
                "id": "https://in.linkedin.com/in/pranit-arora-1b505422"
            },
            {
                "@type": "Person",
                "name": "Avneet Dhamija",
                "id": "https://in.linkedin.com/in/avneet-dhamija"
            },
            {
                "@type": "Person",
                "name": "Vikash Agarwal",
                "id": "https://in.linkedin.com/in/vikashagrawal1985"
            },
        ],
        "funder": [
            {
                "@type": "Corporation",
                "legalName": "Trinity media Group",
                "url": "https://www.vccircle.com/company/trinity-media-group"
            }
        ],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://univest.in/stocks/{symbol}",
            "query-input": "required symbol"
        }
    }
    return (<>
        <Head>
            <title>{title ?? 'Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'}</title>
            <meta name="description" content={desc ?? "Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%"} />
            <meta name="keywords" content={keyWords ?? "Stock screener, NSE stocks, Indian stock market, stock analysis tool, stock research tool, Smart Investment, Market News, Share Market News, Share Market news, finance news, IPO News, Investment ideas, Trading ideas"} />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />

            <meta property="al:android:url" content="https://" />
            <meta property="al:android:package" content="com.univest.capp" />
            <meta property="al:android:app_name" content="Univest" />

            <meta property="al:ios:url" content="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" />
            <meta property="al:ios:app_store_id" content="6443753518" />
            <meta property="al:ios:app_name" content="Univest" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://storage.googleapis.com/app-assets-univest/website-assets/UnivestLogo.jpg" />
            <meta name="twitter:site" content="UnivestIN" />
            <meta name="twitter:creator" content="UnivestIN" />
            <meta name="twitter:title" content={title ?? 'Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'} />
            <meta name="twitter:description" content={desc ?? "Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%"} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content="https://univest.in" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://storage.googleapis.com/app-assets-univest/website-assets/UnivestLogo.jpg" />
            <meta property="og:site_name" content="Univest" />
            <meta name="og:title" content={title ?? 'Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'} />
            <meta name="og:description" content={desc ?? "Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%"} />

            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TS8KFRM3');`,
                }}
            />

        </Head>

        <noscript
            dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TS8KFRM3" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
        />

        {/* <Script src="https://www.facebook.com/tr?id=428181756128634&ev=PageView&noscript=1" /> */}

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema ?? defaultSchema) }}
        />
    </>)
}