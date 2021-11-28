import React from 'react';

export default class Error404 extends React.Component {
    render() {
        return (
            <>
                <div className='error-main'>
                    <div className='error-content'>
                        <div className='box'>
                            <text className='title'>404</text> <br />
                            <text className='description'>
                                The requested site cannot be found <br />
                            </text>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};