import React from 'react';
import config from '../../config';

export default function Go({ }) {
    return <>This redirect cannot be found</>
};

Go.getInitialProps = async ({ query, req, res }) => {
    const link = await fetch(`${config.api}/links/${query.id}`).then(res => res.json());
    console.log(link)
    if (link?.content?.destination) {
        res.writeHead(307, {
            Location: link?.content?.destination
        });
        res.end();
    };

    return {};
};