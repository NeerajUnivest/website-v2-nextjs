

let env_check = process.env.NODE_ENV === 'production';

let actions = {
    toStockDetail: (symbol, compName) => {
        return `/stocks/${encodeURIComponent(symbol)}~${encodeURIComponent(compName?.replaceAll(' ', '-'))}`
    },
};

export let Config = actions;