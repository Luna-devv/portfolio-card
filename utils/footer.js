import React from 'react'

import {ReactComponent as Discord} from '../public/discord.svg'
import {ReactComponent as Github} from '../public/github.svg'
import {ReactComponent as Email} from '../public/email.svg'

export default function Footer() {
    return (
        <footer className="w-screen text-center py-3 bg-gray-900" style={{
            position: "absolute",
            bottom: "0"
        }}>
            <div className="text-left md:ml-12 ml-5 text-gray-500">Follow me on</div>
            <div className="flex items-center md:px-10 px-3">
                <Discord onClick={() => window.location.href = "https://join.discord-botlist.eu"} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" />
                <Github onClick={() => window.location.href = "https://github.com/flamexdev"} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" />
                <Email onClick={() => window.location.href = "mailto:contact@flamex.dev"} className="w-10 h-10 p-2 hover:bg-blue-900 cursor-pointer transition duration-100 ease rounded-md" />
            </div>
            &copy; 2021 <a href="https://flamex.dev" className="cursor-pointer transition duration-200 hover:text-blue-500 text-blue-300">Flamex</a>
        </footer>
    )
}