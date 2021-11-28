import React from 'react';
import { useState, useEffect } from 'react';

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

export default class Homepage extends React.Component {

    render() {
        return (
            <>
                <div className='main'>
                <img className='banner' src='https://cdn.xyna.space/r/f701e98771f5e36b068a92c8a8961e8e.gif' alt='banner' draggable='false'/>
                <img className='picture' src='https://cdn.xyna.space/r/mee.jpg' alt='profile picture' draggable='false'/>
                <text className='name'> Luna <t className='nah'>she/her</t> <br /></text>

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
                        <img className='site-picture' src={card.icon} draggable='false'/>
                    </div>
                    ))}

                </div>
            </div>
            </>
        );
    };
};

async function getData() {
    const data = await fetch(`https://api.lanyard.rest/v1/users/821472922140803112`);
    return data;
};