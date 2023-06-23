

let env_check = process.env.NODE_ENV === 'production';

let actions = {
    toStockDetail: (symbol, compName, finCode) => {
        return `/stocks/${symbol?.replaceAll(' ', '-')}/${compName?.replaceAll(' ', '-')}`
    },
};

export let Config = actions;