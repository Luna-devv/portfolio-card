import { useEffect } from 'react';
import config from '../config.json';

export default function Login({ }) {
    useEffect(() => {
        if (!new URLSearchParams(window.location.search).get('code')) window.location.href = 'https://discord.com/oauth2/authorize?client_id=857230367350063104&redirect_uri=http%3A%2F%2F10.0.0.43%3A3000%2Flogin&response_type=code&scope=identify';

        const data = new FormData();
        data.append('client_id', '857230367350063104');
        data.append('client_secret', config.client_secret);
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', 'http://10.0.0.43:3000/login');
        data.append('scope', 'identify');
        data.append('code', new URLSearchParams(window.location.search).get('code'));
        fetch('https://discordapp.com/api/oauth2/token', {
            method: 'POST',
            body: data
        }).then(res => res.json()).then(async info => {
            return await fetch('https://discordapp.com/api/users/@me', {
                headers: {
                    authorization: `${info.token_type} ${info.access_token}`
                }
            }).then(res => res.json()).then(res => {
                res.auth = info.access_token;
                return res;
            });
        }).then(async data => {
            await localStorage.removeItem('storageUser');
            // if (data?.id && data?.username) localStorage.setItem('storageUser', JSON.stringify({auth: data.auth}));
            window.location.href = '/';
        });
    }, []);

    return <></>
};