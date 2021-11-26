import React from 'react';

import {
    UserIcon,
    HomeIcon,
    CakeIcon,
    CodeIcon,
    HeartIcon,
    LockClosedIcon
} from '@heroicons/react/outline'

const cards = [{
    "name": "discord-botlist.eu",
    "image": "https://cdn.discord-botlist.eu/pictures/logo.png",
    "description": "discord-botlist.eu - your Discord Bot List! We give you the availability to apply your bot and give your bot a page on our website.",
    "url": "https://discord-botlist.eu"
}];

export default class Homepage extends React.Component {
    render() {
        return (
            <>
                <div className='main'>
                <img className='banner' src='https://cdn.xyna.space/r/f701e98771f5e36b068a92c8a8961e8e.gif' alt='banner' draggable='false'/>
                <img className='picture' src='https://cdn.xyna.space/r/mee.jpg' alt='profile picture' draggable='false'/>
                <text className='name'> Luna <t className='nah'>(Sia)</t> <br /></text>

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

                    {cards.map((card) => {
                    <div className='box'>
                        <text className='title'>{card.name}</text> <br />
                    </div>
                    })}

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