import React from 'react'
import config from '../../config.json'

// ASSETS
import {ReactComponent as Discord} from '../../assets/discord.svg'
import {ReactComponent as Github} from '../../assets/github.svg'
import {ReactComponent as Twitch} from '../../assets/twitch.svg'
import {ReactComponent as Email} from '../../assets/email.svg'

class Footer extends React.Component {
    render() {
        return (
            <footer className="w-screen text-center py-3 bg-gray-900">
                {JSON.stringify(config.customization.socials) !== "{}" ? <div className="text-left md:ml-12 ml-5 text-gray-500">Follow me on</div> : <></>}
                <div className="flex items-center md:px-10 px-3">
                    {config.customization.socials.discord ? <Discord onClick={() => window.location.href = config.customization.socials.discord} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    {config.customization.socials.github ? <Github onClick={() => window.location.href = config.customization.socials.github} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    {config.customization.socials.twitch ? <Twitch onClick={() => window.location.href = config.customization.socials.twitch} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    {config.customization.socials.email ? <Email onClick={() => window.location.href = `mailto:${config.customization.socials.email}`} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                </div>
                &copy; 2021 <a href="https://flamex.dev" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">Flamex</a>
            </footer>
        )
    }
}

export default Footer