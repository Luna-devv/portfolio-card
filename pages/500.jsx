import React from 'react';

export default class Error500 extends React.Component {
    render() {
        return (
            <>
                <div className='error-main'>
                    <div className='box'>
                        <text className='title code'>500 - That's an error</text> <br />
                        <text className='description'>We could not render the page correctly for you..</text>
                    </div>
                </div>
            </>
        );
    };
};