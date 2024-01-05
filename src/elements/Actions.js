import moment from "moment";


let env_check = process.env.NODE_ENV === 'production';

let Actions = {
    toStockDetailOld: (symbol, compName) => {
        return `/stocks/${encodeURIComponent(symbol)}~${encodeURIComponent(compName?.replaceAll(' ', '-'))}`
    },
    toStockDetail: (symbol, compName) => {
        const lowerCase = (text) => text?.toLowerCase();
        const repl = (text) => text?.replaceAll(' ', '-')?.replaceAll(/([.])+/g, '');
        return `/stocks/${encodeURIComponent(lowerCase(symbol))}/${encodeURIComponent(repl(lowerCase(compName)))}-share-price-today`
    },
    toScreener: (code) => {
        const repl = (text) => text?.toLowerCase()?.replaceAll('_', '-');
        return `/screeners/${repl(code)}`
    },
    setCookie: (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    },
    removeCookie: (cname) => {
        const d = new Date();
        d.setTime(d.getTime() + 1);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + '' + ";" + expires + ";path=/";
    },
    trimName: (name, n = 25) => {
        return name?.length > n ? name?.slice(0, n) + '...' : name
    },
    generateUniqueDeviceID: () => {
        let fingerprint = '';
        if (navigator?.userAgent) {
            fingerprint += navigator.userAgent;
        }

        if (navigator.platform) {
            fingerprint += navigator.platform;
        }

        if (window.screen && window.screen.width && window.screen.height) {
            fingerprint += window.screen.width + 'x' + window.screen.height;
        }
        const uniqueID = btoa(fingerprint);
        return Actions.getCookie('_ga') ?? uniqueID;
    },
    getDeviceName: () => {
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.includes('android')) {
            return 'Android Web';
        } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
            return 'iOS Web';
        } else if (userAgent.includes('windows')) {
            return 'Windows Web';
        } else if (userAgent.includes('macintosh') || userAgent.includes('mac os')) {
            return 'Mac Web';
        } else if (userAgent.includes('linux')) {
            return 'Linux Web';
        } else {
            return 'Unknown Web';
        }
    },
    putComma: (num, to = 2) => {
        return num?.toLocaleString('en-IN', { maximumFractionDigits: to })
    },
    trimNumber: (val) => {
        if (Math.abs(val) > 10000000) {
            return (val / 10000000).toFixed(2) + 'Cr';
        } else if (Math.abs(val) > 100000) {
            return (val / 100000).toFixed(2) + 'L';
        } else if (Math.abs(val) > 1000) {
            return (val / 1000).toFixed(2) + 'K';
        } else {
            return (val / 1000).toFixed(2);
        }
    },
    downloadNow: (isProPage) => {
        if (isProPage) {
            window.open('https://univest.onelink.me/fN1T/p45lthtg', '_blank')
        } else {
            window.open('https://univest.onelink.me/fN1T/bkyef08z', '_blank')
        }
    }
};

export default Actions;