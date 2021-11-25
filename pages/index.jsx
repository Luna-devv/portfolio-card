import React from 'react'
const config = './../config.json'

import {
  MapIcon,
  CakeIcon,
  CodeIcon,
  BriefcaseIcon,
  OfficeBuildingIcon,
  MailIcon
} from '@heroicons/react/outline'

const cards = [
  {
    "name": "discord-botlist.eu",
    "image": "https://cdn.discord-botlist.eu/pictures/logo.png",
    "description": "discord-botlist.eu - your Discord Bot List! We give you the availability to apply your bot and give your bot a page on our website.",
    "url": "https://discord-botlist.eu"
  }
]

main();
async function main() {
  const response = await fetch('https://discord.com/api/v9/users/821472922140803112', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bot ${config.bot_token}`,
    }
  })
  Console.writeLine(response)
};

export default class Homepage extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='banner'></div>
      </div>
    )
  }
}