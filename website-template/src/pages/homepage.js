import React from 'react'
import config from '../config.json'
import './utils/main.css'

// ASSETS
import {ReactComponent as Discord} from '../assets/discord.svg'
import {ReactComponent as Github} from '../assets/github.svg'
import {ReactComponent as Twitch} from '../assets/twitch.svg'
import {ReactComponent as Email} from '../assets/email.svg'

class Card extends React.Component {
    render() {
        return (
            <div class="bg-gray-100 cursor-pointer transition duration-200 ease rounded-lg bg-gray-900 hover:shadow-xl p-5 content-around" onClick={() => window.location.href = this.props.data.url}>
                <div class="flex">
                    <img src={this.props.data.image} class="rounded-full w-10 h-10" /><span class="font-bold ml-3 mt-2">{this.props.data.name}</span>
                </div>
                <p class="text-gray-400 mt-2">
                    {this.props.data.description}
                </p>
                <p class="text-blue-300 mt-2">
                    {this.props.data.url.split("https://").join(" ").split("http://").join(" ")}
                </p>
            </div>
        )
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className="md:px-40 md:py-20 px-4 py-5">
                    <div className="flex items-center">
                        <img src={config.customization.image} className="w-40 rounded-lg mr-10" />
                        <div>
                            <h1 className="text-3xl font-bold mb-3">{config.customization.title}</h1>
                            <p className="text-sm font-bold text-gray-500">{config.customization.subtitle}</p>
                        </div>
                    </div>

                    {config.customization.aboutme ? <>
                        <div className="pt-20">
                            <p className="font-bold underline">About me</p>
                            <p className="text-gray-400 md:w-2/3" dangerouslySetInnerHTML={{__html: config.customization.aboutme}} />
                        </div>
                    </> : <></>}

                    <div id="list" className="pt-20">
                        {config.customization.cards.map(e => <Card data={e} />)}
                    </div>
                </div>

                <div className="sticky bottom-0 left-0 w-screen text-center py-3 bg-gray-900">
                    {JSON.stringify(config.customization.socials) !== "{}" ? <div className="text-left md:ml-12 ml-5 text-gray-500">Follow me on</div> : <></>}
                    <div className="flex items-center md:px-10 px-3">
                        {config.customization.socials.discord ? <Discord onClick={() => window.location.href = config.customization.socials.discord} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                        {config.customization.socials.github ? <Github onClick={() => window.location.href = config.customization.socials.github} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                        {config.customization.socials.twitch ? <Twitch onClick={() => window.location.href = config.customization.socials.twitch} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                        {config.customization.socials.email ? <Email onClick={() => window.location.href = `mailto:${config.customization.socials.email}`} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" /> : <></>}
                    </div>
                    &copy; 2021 <a href="https://flamex.dev" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">Flamex</a>
                </div>
            </div>
        )
    }
}

export default Homepage