import React from 'react'
import config from '../../config.json'

class Link extends React.Component {
    render() {
        return (
            <div className="float-right -mt-10 cursor-pointer hover:bg-gray-700 rounded-md py-2.5 px-5 transition duration-100 ease ml-5" onClick={() => window.location.href = this.props.link.url}>
                <span className={window.location.pathname == this.props.link.url ? "text-red-300" : ""}>{this.props.link.title}</span>
            </div>
        )
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <header className="m-0 w-screen bg-gray-900 px-10 py-4 shadow-lg">
                <div className="flex items-center">
                    <img src={config.customization.header.image} className="w-10 mr-5 rounded-md" /> <span className="font-bold">{config.customization.header.name}</span>
                </div>
                <div className="">
                    {config.customization.header.links.map(e => <Link link={e} />)}
                </div>
            </header>
        )
    }
}

export default Homepage