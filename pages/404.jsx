import React from 'react';

export default class Error404 extends React.Component {
    render() {
        return (
            <div className='main'>

                <div className='content errorPage'>
                    <div className='box'>
                        <text className='title'>404</text> <br />
                        <text className='description'>
                            The requrested site cannot be found <br />
                        </text>
                    </div>

                </div>
            </div>
        );
    };
};