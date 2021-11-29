import { UserAddIcon } from '@heroicons/react/outline';
import React from 'react';

let luna = false;
export default class Homepage extends React.Component {

    async componentDidMount() {
        await this.setState(JSON.parse(localStorage.getItem('user')));
        if (this.state?.id !== '821472922140803112') {
            window.location.href='https://github.com/Luna-devv/luna-site/tree/main/';
        };
    };


    render() {
        return (
            <>
                <div className='paste-main'>

                </div>
            </>
        );
    };
};