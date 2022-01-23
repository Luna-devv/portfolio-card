import style from '../styles/Error.module.css';
import React from 'react';
import Head from 'next/head';

import { HiHome } from 'react-icons/hi';
export default class Error404 extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>Luna - 404</title>
                </Head>
                <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>404</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}> ⌋ Page not found</text> <br />
                        <button onClick={() => window.location.href = `/`} className='button' style={{ marginTop: 10 }}>
                            <HiHome style={{ height: 22, width: 22, marginTop: 1.8, marginRight: 5 }} />
                            <div>Go Home</div>
                        </button>
                    </div>
                </div>
            </>
        );
    };
};