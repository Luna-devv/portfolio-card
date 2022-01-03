import React from 'react';
import config from '../config.json';
import style from '../styles/Home.module.css';
import Link from 'next/link';

import {
    LockClosedIcon,
    CakeIcon,
    HomeIcon,
    CodeIcon,
    HeartIcon,
    CubeIcon,
    CubeTransparentIcon,
    NewspaperIcon,
    PaperClipIcon
} from '@heroicons/react/outline'

const cards = [{
    name: 'discord-botlist.eu',
    icon: 'https://cdn.discord-botlist.eu/pictures/logo.png',
    description: 'We give you the ailability to apply and give your bot a page on our site.',
    url: 'https://discord-botlist.eu'
}, {
    name: 'Tixte',
    icon: 'https://tixte.com/static/media/logo_mark.d3b45ae2.png',
    description: 'The fast, free and easy way to upload and store your files in the cloud.',
    url: 'https://discord.gg/vWcEAX5G4B'
}, {
    name: 'Dasu',
    icon: 'https://dasu.gifts/profile.png',
    description: 'Utilize powerful rules and control your giveaways with no limitations.',
    url: 'https://dasu.gifts'
}];

export default function Homepage({ user }) {
    return (
        <div className={style.user_container} style={{ border: `solid 0.2rem ${user.accentColor}`, borderTop: 1 }}>
            <div>
                <div style={{ backgroundColor: user.accentColor }}>
                    <img src={user?.banner} className={style.banner} style={{ borderRadius: 5, position: 'relative', top: 4 }} />
                </div>
                <div>
                    <div className={style.picture} style={{ backgroundColor: user.status.state.color, padding: 4, top: (user.status.emote || user.status.text) ? 214 : 200 }}>
                        <img src={user.nickavatar || user.avatar} alt='profile picture' draggable='false' style={{ width: 160, borderRadius: 12 }} />
                    </div>
                    {(user.status.emote || user.status.text) ?
                        <div style={{ position: 'absolute', left: 194, top: 298 }}>
                            <t style={{ fontSize: 40 }}> {user.nickname} <br /></t>
                            <img src={user.status.emote} style={{ height: 26, borderRadius: 3, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: '#080808' }} /> <t style={{ position: 'relative', bottom: 4.6, fontSize: 24, color: '#ABA8B3' }}>{user.status.text}</t>
                        </div>
                        :
                        <t style={{ position: 'absolute', left: 194, top: 305, fontSize: 46 }}> {user.nickname} <br /></t>
                    }
                </div>

                <div className={style.bio}>
                    <LockClosedIcon height={24} style={{ position: 'relative', top: 6 }} /> Shy, cautious <br />
                    <CakeIcon height={24} style={{ position: 'relative', top: 6 }} /> 17th April, 2007 <br />
                    <HomeIcon height={24} style={{ position: 'relative', top: 6 }} /> Austria, near Vienna <br />
                    <CodeIcon height={24} style={{ position: 'relative', top: 6 }} /> Hobby Software Engineer <br />
                    <HeartIcon height={24} style={{ position: 'relative', top: 6 }} /> Lesbian and LGBTQ+ Activist <br />
                </div>

                <div style={user.activities.length > 0 ? { marginTop: 30 } : {}}>
                    {user.activities?.map((activitie) => (
                        <div className={style.activitie}>
                            <img src={activitie.assets.large.image} style={{ borderRadius: 8, height: 100, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: '#080808' }} />
                            <div style={{ marginTop: 2, marginLeft: 10 }}>
                                <name style={{ fontSize: 26, color: '#987C9F' }}>{activitie.name}</name> <br />
                                <CubeIcon height={24} style={{ position: 'relative', top: 6 }} /> {activitie.state} <br />
                                <CubeTransparentIcon height={24} style={{ position: 'relative', top: 6 }} /> {activitie.details}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={cards.length > 0 ? { marginTop: 30 } : {}}>
                    {cards?.map((card) => (
                        <div className={style.sites}>
                            <div style={{ marginTop: 2, marginLeft: 10 }}>
                                <name style={{ fontSize: 26, color: '#987C9F' }}>{card.name}</name> <br />
                                <NewspaperIcon height={24} style={{ position: 'relative', top: 6 }} /> {card.description} <br />
                                <PaperClipIcon height={24} style={{ position: 'relative', top: 6 }} /> <Link href={card.url}><a className='link'>{card.url?.replace(`https://`, ``)?.replace(`http://`, ``)}</a></Link>
                            </div> <br />
                            <img src={card.icon} style={{ borderRadius: 16, height: 90, position: 'relative', bottom: 126, left: 626, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: '#080808' }} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

Homepage.getInitialProps = async () => {
    const luna = await fetch(config.api + `/luna`).then(res => res.json());
    console.log(luna.content)
    return { user: luna.content };
};