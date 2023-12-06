
let env_check = process.env.NODE_ENV === 'production' || true;

let actions = {
    pageView: () => {
        if (env_check) {
            import('react-facebook-pixel')
                .then(module => module.default)
                .then((ReactPixel) => {
                    ReactPixel.init('428181756128634', {},
                        {
                            autoConfig: true,
                            debug: false,
                        })
                    ReactPixel.pageView()
                })
        }
    },
    track: async (name, props) => {
        if (env_check) {
            import('react-facebook-pixel')
                .then(module => module.default)
                .then((ReactPixel) => {
                    ReactPixel.init('428181756128634', {},
                        {
                            autoConfig: true,
                            debug: false,
                        })
                    ReactPixel.track(name, props);
                })
        };
    },
    people: {
        set: (props) => {
            if (env_check) ReactPixel.people.set(props);
        },
    },
};

export let FaceBook = actions;