import React from 'react';

export default class Error404 extends React.Component {
    render() {
        return (
            <>
                <div className='error-main'>
                    <div className='box'>
                        <text className='title code'>404 - That's an error</text> <br />
                        <text className='description'>The site that you wanted to visit doesn't exist..</text>
                    </div>
                </div>
            </>
        );
    };
};