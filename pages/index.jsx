import React from 'react'

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

class Card extends React.Component {
  render() {
    return (
      <div className="min-h-full hover:rotate-2 transform cursor-pointer transition duration-300 ease rounded-lg bg-gray-900 hover:shadow-xl p-5 content-around" onClick={() => window.location.href = this.props.data.url}>
        <div className="flex items-center">
          <img alt="" src={this.props.data.image} className="rounded-full w-10 h-10" /><span className="font-bold ml-3">{this.props.data.name}</span>
        </div>
        <p className="text-gray-400 mt-2">
          {this.props.data.description}
        </p>
        <p className="text-blue-300 mt-2">
          {this.props.data.url.split("https://").join(" ").split("http://").join(" ")}
        </p>
      </div>
    )
  }
}

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="md:grid grid-rows-1 grid-cols-2 bg-background text-gray-200 h-screen w-screen md:pt-20 pt-5 select-none overflow-x-hidden">

        {/* Left */}
        <div className="mx-auto bg-background text-gray-200 lg:px-0 px-5">
          <div className="md:flex items-center">
            <img src="/pfp_old.png" className="lg:w-48 w-40 rounded-md" alt="could not load image"/>
            <span className="pl-10">
              <p className="text-3xl font-bold">Flamex</p>
              <p className="text-gray-400">
                Fullstack developer and one of the &quot;humans&quot;
              </p>
            </span>
          </div>

          <table className="lg:mt-10 lg:mb-0 mt-5 mb-10 bg-gray-900 lg:w-80 w-full text-gray-400">
            <tr className="w-full">
              <td className="px-3 py-1 border-background border-b-4 flex items-center">
                <MapIcon className="w-5 mr-4" /> Germany
              </td>
            </tr>
            <tr className="w-full">
              <td className="px-3 py-1 border-background border-b-4 flex items-center">
                <CakeIcon className="w-5 mr-4" /> 06. Feb
              </td>
            </tr>
            <tr className="w-full">
              <td className="px-3 py-1 border-background border-b-4 flex items-center">
                <CodeIcon className="w-5 mr-4" /> Web applications
              </td>
            </tr>
            <tr className="w-full">
              <td className="px-3 py-1 border-background border-b-4 flex items-center">
                <BriefcaseIcon className="w-5 mr-4" /> Student
              </td>
            </tr>
            <tr className="w-full">
              <td className="px-3 py-1 border-background border-b-4 flex items-center">
                <OfficeBuildingIcon className="w-5 mr-4" /> <a href="https://discord-botlist.eu" className="hover:text-blue-200 transition duration-75 ease-in-out">discord-botlist.eu</a>
              </td>
            </tr>
            <tr className="w-full">
              <td className="px-3 py-1 border-background border-b-4 flex items-center">
                <MailIcon className="w-5 mr-4" /> <a href="mailto:contact@flamex.dev" className="hover:text-blue-200 transition duration-75 ease-in-out">contact@flamex.dev</a>
              </td>
            </tr>
          </table>
        </div>

        {/* Right */}
        <div className="text-gray-400 lg:pt-48 pt-2 md:w-2/3 lg:mt-10 w-screen lg:px-0 px-5 bg-background pb-5">
          <b>Howdy</b> 🤠<br />
          I'm Flamex, just a common german guy that loves programming. I started to implement bugs into projects about 2 years ago. In this time, I gained experience and knowledge with
          <p className="flex items-center mt-1">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" className="w-6 mr-2" alt="could not load image"/> HTML
          </p>
          <p className="flex items-center mt-1">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" className="w-6 mr-2" alt="could not load image"/> CSS
          </p>
          <p className="flex items-center mt-1">
            <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" className="w-6 mr-2" alt="could not load image"/> JavaScript
          </p>
          <p className="flex items-center mt-1">
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" className="w-6 mr-2" alt="could not load image"/> Node.js
          </p>
          <p className="flex items-center mt-1">
            <img src="https://sandstorm.de/_Resources/Persistent/3/2/8/5/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg" className="w-6 mr-2" alt="could not load image"/> React
          </p>
          <p className="flex items-center mt-1">
            <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" className="w-6 mr-2 filter invert" alt="could not load image"/> Next.js
          </p>
          <p className="flex items-center mt-1">
            <img src="https://ubernet.de/wp-content/uploads/2021/03/tailwind-css-logo.svg" className="w-6 mr-2" alt="could not load image"/> TailwindCSS
          </p>
          <p className="flex items-center mt-1">
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" className="w-6 mr-2" alt="could not load image"/> MongoDB
          </p>
          <p className="flex items-center mt-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="w-6 mr-2 filter invert" alt="could not load image"/> GitHub
          </p>
          <p className="flex items-center mt-1 mb-3">
            <img src="https://authy.com/wp-content/uploads/npm-logo.png" className="w-6 mr-2" alt="could not load image"/> npm
          </p>
          Unfortunately, I don't have any projects to proof it, but <a href="https://github.com/flamexdev/flamex.dev" className="underline transition duration-75 ease-in-out hover:text-blue-200">this website</a> is built with Next.js and TailwindCSS. I've planned to make more projects to expand my list of repositories on my <a href="https://github.com/flamexdev" className="underline transition duration-75 ease-in-out hover:text-blue-200">GitHub</a> profile.
        </div>
      </div>
    )
  }
}