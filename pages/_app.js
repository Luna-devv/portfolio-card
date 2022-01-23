import '../styles/globals.css';
import '../styles/layout.css';
import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';

import { AiFillHeart } from 'react-icons/ai';

export default function render({ Component, pageProps }) {

    return (
        <>
            <Head>
                <script async src="https://arc.io/widget.min.js#sqvWfDKJ"></script>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

                <meta property='title' content='Luna - Software Engineer and LGBTQ+ Activist' />
                <meta property='description' content="Heyia, I'm Luna Seemann and I was born 14 years ago and live in Austria." />
                <meta name='keywords' content='Luna, Lunish, Lunish#8888, waya, waya.one, waya profiles, Luna profile, Luna onlyfans, Luna github, Lunish onlyfans, Lunish githu, Luna Seemann, Seemann, discord-botlist.eu, Flamex, Bendix, dbleu' />

                <meta name="twitter:site" content="@waya.one" />
                <meta name="twitter:title" content="Luna - Software Engineer and LGBTQ+ Activist" />
                <meta name="twitter:description" content="Heyia, I'm Luna Seemann and I was born 14 years ago and live in Austria." />
                <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/71079641?v=4" />

                <meta property='og:title' content='Luna - Software Engineer and LGBTQ+ Activist' />
                <meta property='og:description' content="Heyia, I'm Luna Seemann and I was born 14 years ago and live in Austria." />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://avatars.githubusercontent.com/u/71079641?v=4' />

                <meta name='theme-color' content='#f19bec' />
                <title> Luna - Software Engineer and LGBTQ+ Activist</title>
                <link rel='shortcut icon' type='image/x-icon' href='https://avatars.githubusercontent.com/u/71079641?v=4' />
            </Head>
            <body>
                <Layout />
                <div className='set-luna'>
                    <Link href='/a'>
                        <a>Made with&nbsp;<AiFillHeart style={{ position: 'relative', top: 2 }} />&nbsp;by&nbsp;Luna</a>
                    </Link>
                </div>
                <Component {...pageProps} />
            </body>
        </>
    );
};
