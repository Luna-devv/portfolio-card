import React from 'react';
import config from '../../config';

export default function Go({ error }) {
    return <>{error ? <>{JSON.stringify(error)}</> : <>This redirect cannot be found</>}</>
};

Go.getInitialProps = async ({ query, req, res }) => {
    const link = await fetch(`${config.api}/links/${query.id}`).then(res => res.json()).catch((error) => { res.end(); return { error }; });
    if (link?.content?.destination) {
        res.writeHead(307, {
            Location: link?.content?.destination
        });
        fetch(`${config.api}/links/${query.id}`, {
            method: 'PATCH',
            headers: {
                authorization: process.env?.token
            }
        });
        res.end();
    };

    return {};
};