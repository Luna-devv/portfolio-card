import React from 'react';
import config from '../../config';

export default function Go({ }) {
    return (
        <>
        </>
    )
};

Go.getInitialProps = async ({ query, req, res }) => {
    res.writeHead(307, {
        Location: `https://lunish.nl/${query.id}`
    });
    res.end();

    return {};
};