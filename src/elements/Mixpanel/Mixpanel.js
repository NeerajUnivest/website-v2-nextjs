
import mixpanel from 'mixpanel-browser';
mixpanel.init('2e2810ad9467d0511f1c8c08cd48fa1c',
    { debug: true }
);

let env_check = true
// process.env.NODE_ENV === 'production';

let actions = {
    identify: (id) => {
        if (env_check) mixpanel.identify(id);
    },
    alias: (id) => {
        if (env_check) mixpanel.alias(id);
    },
    track: async (name, props) => {
        if (env_check) mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            if (env_check) mixpanel.people.set(props);
        },
    },
};

export let Mixpanel = actions;