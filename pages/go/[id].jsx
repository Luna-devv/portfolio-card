import React from 'react';
import config from '../../config';

export default function Go({ link }) {
    return (
        <>
            {JSON.stringify(link, null, 4)}
        </>
    )
};

Go.getInitialProps = async ({ query, req, res }) => {
    const link = await fetch(`${config.api.url?.replace('whois', 'api')}/links/${query.id}`).then(res => res.json()).catch(() => { res.end(); return {}; });

    if (link?.content?.destination) {
        res.writeHead(307, {
            Location: `${link?.content?.destination}${req.url.split('?')[1] ? `?${req.url.split('?')[1]}` : ''}`
        });
        fetch(`${config.api.url?.replace('whois', 'api')}/links/${query.id}`, {
            method: 'PATCH',
            headers: {
                authorization: process.env?.token
            }
        });
        res.end();
    };

    return { link };
};