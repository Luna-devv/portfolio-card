import config from '../config';

export default function Add({ }) {
    return (<></>);
};

Add.getInitialProps = async ({ req, res, query }) => {
    const response = await fetch(`https://api.waya.one/`).then(res => res.json());

    res.writeHead(307, {
        Location: response?.content?.invite
    });

    res.end();
    return {};
};