import React from 'react'
import config from '../config.json'
import './utils/main.css'

class Card extends React.Component {
    render() {
        return (
            <div class="hover:rotate-2 transform bg-gray-100 cursor-pointer transition duration-300 ease rounded-lg bg-gray-900 hover:shadow-xl p-5 content-around" onClick={() => window.location.href = this.props.data.url}>
                <div class="flex">
                    <img alt="" src={this.props.data.image} class="rounded-full w-10 h-10" /><span class="font-bold ml-3 mt-2">{this.props.data.name}</span>
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
                        <img alt="" src={config.customization.image} className="w-40 rounded-lg mr-10" />
                        <div>
                            <h1 className="text-3xl font-bold mb-3">{config.customization.title}</h1>
                            <p className="text-sm font-bold text-gray-500">{config.customization.subtitle}</p>
                        </div>
                    </div>

                    <div className="pt-20">
                        <p className="font-bold underline">About me</p>
                        <p className="text-gray-400 md:w-2/3" dangerouslySetInnerHTML={{__html: config.customization.aboutme}} />
                    </div>

                    <div id="list" className="pt-20">
                        {config.customization.cards.map(e => <Card data={e} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage