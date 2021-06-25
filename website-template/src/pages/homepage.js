import React from 'react'
import config from '../config.json'
import './utils/main.css'

class Card extends React.Component {
    render() {
        return (
            <div class="card bg-gray-100 cursor-pointer transition duration-200 rounded-lg bg-gray-900 hover:shadow-xl p-5 content-around" onClick={() => window.location.href = this.props.data.url}>
                <div class="flex">
                    <img src={this.props.data.image} class="rounded-full w-10 h-10" /><span class="font-bold ml-3 mt-2">{this.props.data.name}</span>
                </div>
                <p class="text-gray-400 mt-2">
                    {this.props.data.description}
                </p>
                <p class="text-blue-300 mt-2">
                    {this.props.data.url.split("https://").join(" ").split("hhtps://").join(" ")}
                </p>
            </div>
        )
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className="px-40 py-20">
                    <div className="flex items-center">
                        <img src={config.customization.image} className="w-40 rounded-lg mr-10" />
                        <div>
                            <h1 className="text-3xl font-bold mb-3">{config.customization.title}</h1>
                            <p className="text-sm font-bold text-gray-500">{config.customization.subtitle}</p>
                        </div>
                    </div>
                    <div id="list" className="pt-20">
                        {config.customization.cards.reverse().map(e => <Card data={e} />)}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-screen text-center py-3 bg-gray-900">
                    &copy; 2021 <a href="https://flamex.dev" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">Flamex</a>
                </div>
            </div>
        )
    }
}

export default Homepage