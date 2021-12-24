import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/resposive.css';
import Layout from '../components/layout';
import Head from 'next/head';
import { AiFillHeart } from "react-icons/ai"
import Link from 'next/link';

export default function render({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <script async src='https://arc.io/widget.min.js#sqvWfDKJ'></script>
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta property='og:description' content="Heyia, I'm Luna and I was born 14 years ago and live in Austria." />
                <meta property='og:title' content='Luna - Software Engineer and LGBTQ+ Activist' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://avatars.githubusercontent.com/u/71079641?v=4' />
                <meta name='theme-color' content='#f19bec' />
                <title>
                    Luna - Software Engineer and LGBTQ+ Activist
                </title>
                <link rel='shortcut icon' type='image/x-icon' href='https://avatars.githubusercontent.com/u/71079641?v=4' />
            </Head>
            <Layout />
            <div className='set-luna'>
                <Link className='luna' href='https://waya.one/go/luna'>
                    <a>Made with&nbsp;<AiFillHeart style={{ position: 'relative', top: 3 }} />&nbsp;by&nbsp;Luna</a>
                </Link>
            </div>
            <body>
                <Component {...pageProps} />
            </body>
        </>
    );
};