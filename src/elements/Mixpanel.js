import posthog from "posthog-js"
// import mixpanel from 'mixpanel-browser';
// mixpanel.init('2e2810ad9467d0511f1c8c08cd48fa1c',
//     { debug: true }
// );
let env_check = true;

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
        console.log('hiii');
        posthog.debug(env_check) // debug mode in development
    },
    // autocapture: false
})

let actions = {
    identify: (id, props) => {
        if (env_check) posthog.identify(id, props);
    },
    track: async (name, props) => {
        if (env_check) posthog.capture(name, props);
    },
};

export let Mixpanel = actions;