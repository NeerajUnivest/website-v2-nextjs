
import React from 'react'

export default function Error() {
    return (
        <div></div>
    )
}

export async function getServerSideProps({ query, res, resolvedUrl }) {
    if (query?.params.includes('blogs')) {
        res.writeHead(404, {
            location: resolvedUrl
        });
    } else {
        res.writeHead(301, {
            location: '/blogs' + resolvedUrl
        });
    }
    res.end();
    return {
        props: {}
    };
}