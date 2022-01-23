import config from '../config.json';
import style from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { BiWindowAlt, BiCodeAlt } from 'react-icons/bi';
import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2 } from 'react-icons/hi';

const cards = [{
    name: 'discord-botlist.eu',
    icon: 'https://cdn.discord-botlist.eu/pictures/logo.png',
    description: 'We give you the ability to apply and give your bot a page on our site.',
    url: 'https://discord-botlist.eu',
    position: `Moderator`
}, {
    name: 'Tixte',
    icon: 'https://tixte.com/static/media/logo_mark.d3b45ae2.png',
    description: 'The fast, free and easy way to upload and store your files in the cloud.',
    url: 'https://discord.gg/vWcEAX5G4B',
    position: `Moderator`
}, {
    name: 'Dasu',
    icon: 'https://dasu.gifts/profile.png',
    description: 'Utilize powerful rules and control your giveaways with no limitations.',
    url: 'https://dasu.gifts',
    position: `Moderator`
}, {
    name: 'Pronouns',
    icon: 'https://cdn.waya.one/r/pronouns.png',
    description: 'A Simple way to add your Pronouns and Sexualities in Discord.',
    url: 'https://prns.waya.one',
    position: `Founder, Developer`
}];

export default function Homepage({ user, error }) {
    user.status.text = null
    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    });
    return (
        <>
            <div className={style.align}>
                <div className={style.container}>
                    <div className={style.align}>
                        <div alt='banner' className={style.banner} style={{ background: `url('${user?.banner}') no-repeat left top`, backgroundSize: 'cover' }}></div>
                        <div className={style.on_banner} style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 68%, rgb(30, 26, 34) 100%)', display: user?.banner ? '' : 'none' }} />
                    </div>
                    <div className={style.me}>
                        <div className={style.profilepicture} style={{ backgroundColor: (user?.status?.state?.color || `#747F8D`) }}>
                            <img src={user?.nickavatar} alt='profile picture' draggable={false} style={{ width: 138, borderRadius: 10 }} />
                        </div>
                        <div style={{ marginLeft: 176, marginTop: (user?.status?.emote || user?.status?.text) ? 14 : 35 }} className={style.name}>
                            <text style={(user?.status?.emote || user?.status?.text) ? { fontSize: 44, color: '#fff' } : { fontSize: 48, position: 'relative', top: 4, color: '#fff' }}>{user?.nickname}</text>
                            {(user?.status?.emote || user?.status?.text) ?
                                <div style={{ display: 'felx' }}>
                                    {user?.status?.emote ? <img src={user?.status?.emote} style={{ width: 24, borderRadius: 3, marginTop: 4, marginRight: 3 }} draggable={false} /> : <></>}
                                    <text style={{ position: 'relative', top: -5, left: 4, color: '#CCCCCC', fontSize: 20 }}>{user?.status?.text ? user?.status?.text : ``}</text>
                                </div>
                                : <></>
                            }
                            <div className={style.badges} style={(user?.status?.emote || user?.status?.text) ? { marginTop: 8 } : { marginTop: width > 540 ? 14 : -14 }}>
                                <div className={style.badge}> <BiWindowAlt style={{ height: 22, width: 22, marginRight: 4 }} /> UI&nbsp;Designer </div>
                                <div className={style.badge}> <BiCodeAlt style={{ height: 22, width: 22, marginRight: 4 }} /> Developer </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.readme}>
                            <strong style={{ fontSize: 27 }}>👋 About me</strong> <br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                I'm <strong>Luna</strong>, born at <strong>17th of April 2007</strong> and live in <strong>Austria</strong> near Vienna.
                                I'm some hobby <strong>Software Engineer</strong> and <strong>LGBTQ+ Activist</strong>.
                                I self taught me the <strong>MERN</strong> stack with a bit of help from friends!
                                Learn more about my story and my projects <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://blog.waya.one/')}>in my blog</button> 🌈
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>🪄 Languages & Frameworks</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                •&nbsp; JavaScript<br />
                                •&nbsp; Node.JS<br />
                                •&nbsp; MongoDB<br />
                                •&nbsp; HTML & CSS<br />
                                •&nbsp; React, Next.JS<br />
                                •&nbsp; Express
                            </div>
                        </div>
                        <div className={user.activities.length > 0 ? style.section : ''}>
                            {user?.activities.map((activity) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={activity.applicationId}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{activity.name}</strong><text style={{ color: 'rgb(65, 59, 74)' }}> ⌋ {activity.name === `YouTube` ? 'Watching' : 'Playing'}</text>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={activity.assets.large.image} style={{ height: 100 }} draggable={false} alt={`${activity.name}'s big icon`} title={activity.assets.large.text} />
                                            <img src={activity.assets.small.image} style={{ height: 27, position: 'absolute', top: 62, left: 76, backgroundColor: '#201d24', borderRadius: 10, outline: '#201d24 solid 0.15rem' }} draggable={false} alt={`${activity.name}'s small icon`} title={activity.assets.small.text} />
                                        </div>
                                        <div style={{ marginTop: 26, marginLeft: 4 }}>
                                            <div style={{ display: 'flex', marginBottom: 2 }}>
                                                <HiOutlineFolder style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.details.length >= 70 ? `${activity.details.slice(0, -(activity.details.length - 70 + 3))}...` : activity.details}</div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: 2 }}>
                                                <HiOutlineMenuAlt2 style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.state.length >= 70 ? `${activity.state.slice(0, -(activity.state.length - 70 + 3))}...` : activity.state}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cards.length > 0 ? style.section : ''} style={{ marginBottom: width > 540 ? 20 : 60 }}>
                            {cards.map((card) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={card.name}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{card.name}</strong>{card.position ? <text style={{ color: 'rgb(65, 59, 74)' }}> ⌋ {card.position}</text> : <></>}
                                    <div style={{ marginTop: 4, display: 'flex' }}>
                                        <HiOutlineNewspaper style={{ minHeight: 22, minWidth: 22 }} />
                                        <div style={{ marginTop: 2 }}>&nbsp;{card.description}</div>
                                    </div>
                                    <button style={{ marginTop: 4, display: 'flex', color: 'currentColor', cursor: 'pointer' }} onClick={() => window.open(card.url)}>
                                        <HiOutlineLink style={{ minHeight: 21, minWidth: 21 }} />
                                        <div className='link' style={{ marginTop: 2, fontSize: '1.1rem', position: 'relative', bottom: 3 }}>&nbsp;{card.url.replace(/https:\/\//, ``)}</div>
                                    </button>
                                    <img src={card.icon} className={style.icon} draggable={false} alt={`${card.name}'s icon`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {error === true ?
                    <div className={style.error} id='error'>
                        <strong><HiOutlineExclamation style={{ minHeight: 23, minWidth: 23, position: 'relative', top: 5 }} /> ERROR:</strong>
                        <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
                            Failed to fetch user data; <br />
                            Using preconfigured data;
                        </div>
                        <button style={{ position: 'absolute', top: 8, right: 8, display: 'flex' }} onClick={() => { document.getElementById('error').className += ' Home_fadeout__2jQec'; setTimeout(() => { document.getElementById('error').style.display = 'none' }, 900) }} >
                            <HiX /> <div style={{ position: 'relative', bottom: 2 }}>CLOSE</div>
                        </button>
                    </div>
                    : <></>
                }
            </div>
        </>
    );
};

Homepage.getInitialProps = async () => {
    let luna = await fetch(config.api + `/luna`).then(res => res.json());
    luna.content.activities.push({
        "applicationId": "463097721130188830",
        "name": "YouTube",
        "url": null,
        "details": "06 Sportfreunde Stiller - Es Muss Was Wunderbares Sein Von Mir Geliebt Zu Werden",
        "state": "Listening to a playlist",
        "createdTimestamp": 1640811066009,
        "timestamps": {
            "start": null,
            "end": 1640811170000
        },
        "assets": {
            "large": {
                "text": "PreMiD  v2.2.0 • Ext v2.2.3",
                "image": "https://cdn.discordapp.com/app-assets/463097721130188830/513734690272968717.png"
            },
            "small": {
                "text": "Playing",
                "image": "https://cdn.discordapp.com/app-assets/463097721130188830/493061639994867714.png"
            }
        }
    })
    let error = false;
    if (!luna?.content?.username) {
        luna.content = {
            username: `Lunish`,
            nickname: `Luna`,
            avatar: `https://cdn.discordapp.com/avatars/821472922140803112/a_821f41012a430779fb354fa201a97529.gif?size=2048`,
            nickavatar: `https://cdn.discordapp.com/guilds/923346903289184336/users/821472922140803112/avatars/15fb29ee64bd696c3a79bdfe56a8fa0e.png?size=2048`,
            banner: `https://cdn.discordapp.com/banners/821472922140803112/a_476c6e1379984c9c6b39f3f2a6e12790.gif?size=600`,
            status: {
                state: {
                    text: `Unknown`,
                    color: `#747F8D`
                },
                emote: null,
                text: null
            },
            activities: [],
            accentColor: `b6334c`
        };
        error = true;
    };

    return { user: luna?.content, error: error };
};
