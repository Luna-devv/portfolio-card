import React from 'react'
import config from '../config.json'

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
                </div>
                <div className="absolute bottom-0 left-0 w-screen text-center py-3 bg-gray-900">
                    &copy; 2021 <a href="https://flamex.dev" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">Flamex</a>
                </div>
            </div>
        )
    }
}

export default Homepage