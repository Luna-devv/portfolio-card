import config from '../config';

export default function Add({ }) {
    return (<></>);
};

Add.getInitialProps = async ({ req, res, query }) => {
    const response = await fetch(`${config.api.url}/`).then(res => res.json());

    res.writeHead(307, {
        Location: response?.content?.bot?.invite
    });

    res.end();
    return {};
};