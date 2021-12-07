import React from 'react';
import { useState, useEffect } from 'react';
import config from '../config.json'

import {
    HomeIcon,
    CakeIcon,
    CodeIcon,
    HeartIcon,
    LockClosedIcon,
    NewspaperIcon,
    LinkIcon
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

function Homepage({ content }) {
    return (
        <>
            <div className='main'>
                <img className='banner' src={content?.banner} alt='banner' draggable='false' />
                <div className='picture' style={{ backgroundColor: content?.accentColor, padding: 3 }}>
                    <img src={content?.avatar} alt='profile picture' draggable='false' style={{ width: `8rem`, borderRadius: `0.8rem` }} />
                </div>
                <text className='name'> {content?.username.replace(`♡`, ``) || `Luna`} <t className='nah'>she/her</t> <br /></text>

                <div className='content'>
                    <div className='box'>
                        <text className='title'>about me</text> <br />
                        <text className='description'>
                            <LockClosedIcon className='ico' /> Shy, cautious <br />
                            <CakeIcon className='ico' /> 17th April, 2007 <br />
                            <HomeIcon className='ico' /> Austria, near Vienna <br />
                            <CodeIcon className='ico' /> Hobby Software Engineer <br />
                            <HeartIcon className='ico' /> Lesbian and LGBTQ+ Activist <br />
                        </text>
                    </div>

                    {cards.map((card) => (
                        <div className='site-box'>
                            <text className='title'>{card.name}</text> <br />
                            <text className='description'>
                                <NewspaperIcon className='ico' /> {card.description} <br />
                                <LinkIcon className='ico' /> <a className='link' href={card.url}>{card.url?.replace(`https://`, ``)?.replace(`http://`, ``)}</a> <br />
                            </text>
                            <img className='site-picture' src={card.icon} draggable='false' />
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
};

Homepage.getInitialProps = async () => { 
    const luna = await fetch(config.api + `/luna`).then(res => res.json());
    return luna;
};

export default Homepage;