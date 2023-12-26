import posthog from "posthog-js"
import Actions from "./Actions";
// import mixpanel from 'mixpanel-browser';
// mixpanel.init('2e2810ad9467d0511f1c8c08cd48fa1c',
//     { debug: true }
// );
let env_check = process.env.NODE_ENV === 'production';

const getUserStatus = () => {
    let user_details = Actions.getCookie("user_details") ? JSON.parse(Actions.getCookie("user_details")) : ({ subscriptionState: "GUEST" });
    // console.log(user_details?.subscriptionState);
    return ({ "pro_state": user_details?.subscriptionState ?? 'GUEST' })
}

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
        posthog.debug(env_check) // debug mode in development
    },
    autocapture: false
})
let actions = {
    identify: (id, props) => {
        if (env_check) posthog.identify(id, { ...props, ...getUserStatus() });
    },
    track: async (name, props) => {
        if (env_check) posthog.capture(name, { ...props, ...getUserStatus() });
    },
    pageView: async (props) => {
        if (env_check) posthog.capture('$pageview', { ...props, ...getUserStatus() });
    },
    btnClick: async (props) => {
        if (env_check) posthog.capture('Button Click', { ...props, ...getUserStatus() });
    },
};

export let Mixpanel = actions;