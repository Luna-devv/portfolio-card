import React from 'react'

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
      <div class="min-h-full hover:rotate-2 transform bg-gray-100 cursor-pointer transition duration-300 ease rounded-lg bg-gray-900 hover:shadow-xl p-5 content-around" onClick={() => window.location.href = this.props.data.url}>
        <div class="flex items-center">
          <img alt="" src={this.props.data.image} class="rounded-full w-10 h-10" /><span class="font-bold ml-3">{this.props.data.name}</span>
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

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="bg-gray-800 text-white select-none overflow-x-hidden h-screen">
        <div className="md:px-40 md:py-10 px-4 pb-2">
          <div className="flex items-center">
            <img alt="" src="pfp_old.png" className="w-40 rounded-lg mr-10" />
            <div>
                <h1 className="text-3xl font-bold mb-3">Flamex</h1>
                <p className="text-sm font-bold text-gray-500">Fullstack developer, german student, "human"</p>
            </div>
          </div>

          <div className="pt-20">
            <p className="font-bold underline">About me</p>
            <p className="text-gray-400 md:w-2/3">
              Welcome, my name is <b>Flamex</b> 👋<br />
              Glad to see you here!<br /><br />
              
              I'm a german fullstack developer and student. In my 2 years of programming experience I learned how to use and work with <b>JavaScript</b>, <b>NodeJS</b>, <b>HTML</b>, <b>CSS</b>, <b>React / JSX</b> and <b>TailwindCSS</b>.<br />
              Below you can find some of my projects that are made by me or where I am involved right now.
            </p>
          </div>

          <div id="list" className="pt-20 pb-4">
            {cards.map(e => <Card data={e} />)}
          </div>
        </div>
      </div>
    )
  }
}