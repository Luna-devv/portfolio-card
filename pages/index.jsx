import config from '../config';
import { useState, useEffect } from 'react';
import style from '../styles/Home.module.css';

import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiOutlineFire, HiOutlineCode } from 'react-icons/hi';
export default function Homepage({ user, cards, error, light }) {

    const [width, setWidth] = useState();
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    });
    return (
        <>
            <div className={`${style.align} ${light ? style.align_light : ''}`}>
                <div className={`${style.container} ${light ? style.container_light : ''}`}>
                    <div className={style.align}>
                        <div alt='banner' className={style.banner} style={{ background: `url('${user?.banner}') no-repeat left top`, backgroundSize: 'cover' }}></div>
                        <div className={style.on_banner} style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 68%, rgb(30, 26, 34) 100%)', display: user?.banner ? '' : 'none' }} />
                    </div>
                    <div className={style.me}>
                        <div className={style.profilepicture} style={{ backgroundColor: (user?.status?.state?.color || `#747F8D`) }}>
                            <img src={user?.nickavatar ?? user?.avatar} alt='profile picture' draggable={false} style={{ width: 138, borderRadius: 10 }} />
                        </div>
                        <div style={{ marginLeft: 176, marginTop: (user?.status?.emote || user?.status?.text) ? 14 : 35 }} className={style.name}>
                            <text style={(user?.status?.emote || user?.status?.text) ? { fontSize: 44, color: '#fff' } : { fontSize: 48, position: 'relative', top: 4, color: '#fff' }}>{user?.nickname}</text>
                            {(user?.status?.emote || user?.status?.text) ?
                                <div style={{ display: 'felx' }}>
                                    {user?.status?.emote ? <img src={user?.status?.emote} style={{ width: 24, borderRadius: 3, marginTop: 4, marginRight: 3 }} draggable={false} /> : <></>}
                                    <text style={{ position: 'relative', top: -5, left: 4, color: '#CCCCCC', fontSize: 20 }}>{user?.status?.text ? (user.status.text.length > 59 ? (user.status.text.slice(0, 60) + '...') : user.status.text) : ''}</text>
                                </div>
                                : <></>
                            }
                        </div>
                        <div className={style.badges} style={(user?.status?.emote || user?.status?.text) ? { marginTop: 8 } : { marginTop: width > 540 ? 14 : 4 }}>
                            <button className={`${style.badge} ${light ? style.badge_light : ''}`} title='https://waya.one/go/blog_be499f28-b1ac-48da-b0fa-13a21c12d173' onClick={() => window.open('https://waya.one/go/blog_be499f28-b1ac-48da-b0fa-13a21c12d173')}> <HiOutlineFire style={{ height: 22, width: 22, marginRight: 4 }} /> UI&nbsp;Designer </button>
                            <button className={`${style.badge} ${light ? style.badge_light : ''}`} title='https://waya.one/go/github' onClick={() => window.open('https://waya.one/go/github')}> <HiOutlineCode style={{ height: 22, width: 22, marginRight: 4 }} /> Developer </button>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={`${style.readme} ${light ? style.readme_light : ''}`}>
                            <strong style={{ fontSize: 27 }}>👋 About me</strong> <br />
                            <div style={{ marginTop: 8, marginLeft: 12, display: 'block' }}>
                                I'm <strong>Luna</strong>, born at <strong>17th of April</strong> and currently live in <strong>Austria</strong> near Vienna.. I'm some hobby <strong>Software Engineer</strong> and <strong>LGBTQ+ Activist</strong>.
                                I'm a proud <strong>Lesbian</strong> <img src='https://cdn.discordapp.com/emojis/750307298827567236.png?size=20&quality=lossless' style={{ position: 'relative', top: 5 }} draggable={false} /> and currently have a crush haha

                                <br />
                                <br />

                                I'm <strong>female</strong> and my pronouns are <strong>She/Her</strong> <img src='https://cdn.discordapp.com/emojis/959513603134853180.png?size=20&quality=lossless' style={{ position: 'relative', top: 3 }} draggable={false} />, in my free time I  love to <strong>code Discord bots</strong>, websites in general and I'm a <strong>single developer</strong>. <img src='https://cdn.discordapp.com/emojis/959513603009028146.png?size=20&quality=lossless' style={{ position: 'relative', top: 3 }} draggable={false} />

                                <br />
                                <br />

                                I currently mainly work at my <strong>heart project @Waya</strong> - a multi-function bot <br />
                                with the main weight on <strong>Pronouns</strong> and <strong>Server Moderation</strong>. <br />
                                You can learn more about it at <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://waya.one')}>https://waya.one</button> <img src='https://cdn.discordapp.com/emojis/959513603097116763.png?size=20&quality=lossless' style={{ position: 'relative', top: 3 }} draggable={false} />
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>🪄 Languages</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                •&nbsp; JavaScript, Node.JS<br />
                                •&nbsp; Next.JS, Express<br />
                                •&nbsp; HTML, CSS<br />
                                •&nbsp; MongoDB<br />
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>🍧 Contact</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                You want to collaborate with me or just want to have a nice talk in with my community? <br />
                                Feel free to join my <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://waya.one/go/discord')}>Discord server</button> and shoot a ping at me!
                            </div>
                        </div>
                        <div className={user?.activities.length > 0 ? style.section : ''}>
                            {user?.activities.map((activity) => (
                                <div className={`${style.readme} ${light ? style.readme_light : ''}`} style={{ paddingLeft: 14 }} key={activity.applicationId}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{activity.name}</strong><text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {activity.name.toLowerCase().includes(`music`) ? 'Listening' : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? 'Developing' : (activity.name.toLowerCase().includes(`github`) ? 'Browsing' : 'Playing')))}</text>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ position: 'relative', marginTop: 6 }}>
                                            {activity.assets.large.image ?
                                                <img src={activity.assets.large.image} style={{ height: 80, borderRadius: 4 }} draggable={false} alt={`${activity.name}'s big icon`} title={activity.assets.large.text} />
                                                : <></>
                                            }
                                            {activity.assets.small.image ?
                                                <img src={activity.assets.small.image} style={{ height: 27, position: 'absolute', top: 62, left: 66, backgroundColor: '#201d24', borderRadius: 10, outline: '#201d24 solid 0.2rem' }} draggable={false} alt={`${activity.name}'s small icon`} title={activity.assets.small.text} />
                                                : <></>
                                            }
                                        </div>
                                        <div style={{ marginTop: 24, marginLeft: 8 }}>
                                            <div style={{ display: 'flex', marginBottom: 2 }}>
                                                <HiOutlineFolder style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.details?.length >= 70 ? `${activity.details.slice(0, -(activity.details?.length - 70 + 3))}...` : activity.details}</div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: 2 }}>
                                                <HiOutlineMenuAlt2 style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.state?.length >= 70 ? `${activity.state.slice(0, -(activity.state?.length - 70 + 3))}...` : activity.state}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cards?.length > 0 ? style.section : ''} style={{ marginBottom: width > 540 ? 20 : 60 }}>
                            {cards?.map((card) => (
                                <div className={`${style.readme} ${light ? style.readme_light : ''}`} style={{ paddingLeft: 14 }} key={card.name}>
                                    <strong style={{ fontSize: 24, color: light ? 'rgb(87, 92, 99)' : '#ddd9e6' }}>{card.name}</strong>
                                    {card?.bot > 0 ?
                                        <badge style={{ backgroundColor: `#5865f2`, fontWeight: 600, fontFamily: 'Open Sans, sans-serif', fontSize: 13, padding: 2, paddingRight: 6, paddingLeft: (card?.bot > 1 ? 19 : 6), borderRadius: 4, color: '#fff', position: 'relative', marginLeft: 4 }}>
                                            {card?.bot > 1 ? <svg style={{ position: 'absolute', top: 4, left: 2.5 }}>
                                                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="#fff"></path>
                                            </svg> : <></>}
                                            BOT
                                        </badge>
                                        : <></>
                                    }
                                    {card.position ? <text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {card.position}</text> : <></>}
                                    <div style={{ marginTop: 4, display: 'flex' }}>
                                        <HiOutlineNewspaper style={{ minHeight: 22, minWidth: 22 }} />
                                        <div style={{ marginTop: 2 }}>&nbsp;{card.description}</div>
                                    </div>
                                    <button style={{ marginTop: 4, display: 'flex', color: 'currentColor', cursor: 'pointer' }} onClick={() => window.open(card.url)}>
                                        <HiOutlineLink style={{ minHeight: 21, minWidth: 21 }} />
                                        <div className='link' style={{ marginTop: 2, fontSize: '1.1rem', position: 'relative', bottom: 3 }}>&nbsp;{card.url.replace(/https?:\/\//g, ``).split('?')?.[0]}</div>
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
    let user = {};
    let error = false;
    if (config.api.url && config.api.path) try {
        user = await fetch(`${config.api.url}${config.api.path.startsWith(`/`) ? `${config.api.path}` : `/${config.api.path}`}`).then(res => res.json()).catch(() => { return; });
    } catch (e) { error = e }
    if (user?.status !== 200 || !user?.content?.id) {
        if (config.api.url && config.api.path) error = true;
        user = { content: config.user };
    };

    return { user: user?.content, cards: config?.cards, error: error };
};
