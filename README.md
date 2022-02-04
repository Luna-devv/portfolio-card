<h1 align="center">Luna Site</h1>

[![Preview](https://polywork-production.imgix.net/f3mc2tsl2das7idxuc2vdw5ls0gv)](https://polywork-production.imgix.net/f3mc2tsl2das7idxuc2vdw5ls0gv)
<br />

## Basics
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To deploy and start the server run:

```bash
npm run build
npm run start
# or
yarn run build
yarn run start
```

## Cards
Cards are here to display your various projects. You can set these in the [`config.js`](https://github.com/Luna-devv/luna-site/blob/main/config.js) in the [cards Array](https://github.com/Luna-devv/luna-site/blob/main/config.js#L26). <br />
Here is an example how the each card could look like:
```js
{
    name: "discord-botlist.eu",
    icon: "https://cdn.discord-botlist.eu/pictures/logo.png",
    description: "We give you the ability to apply and give your bot a page on our site.",
    url: "https://discord-botlist.eu",
    position: "Moderator"
}
```
Please note that `cards` should **not** be an [Object](https://www.w3schools.com/js/js_objects.asp)(!), it needs to be an [Array](https://www.w3schools.com/js/js_arrays.asp) with the structure __in it__ showed above.


## a) Use static data
If you don't want to use an API, just go to the [`config.js`](https://github.com/Luna-devv/luna-site/blob/main/config.js) and set both [`api.url`]((https://github.com/Luna-devv/luna-site/blob/main/config.js#L3)) and [`api.path`]((https://github.com/Luna-devv/luna-site/blob/main/config.js#L4)) to [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null). <br />
 In the next step enter your user data in the [user Object](https://github.com/Luna-devv/luna-site/blob/main/config.js#L6). <br />

Here is an example how the config could look like:
```js
module.exports = {
    api: {
        url: null,
        path: null
    },
    user: {
        id: "821472922140803112",
        username: "Lunish",
        discriminator: "8888",
        nickname: "Luna",
        nickavatar: "https://cdn.waya.one/r/luna_lone1.gif",
        status: {
            state: {
                text: "dnd",
                color: "#ED4245"
            },
            emote: "https://cdn.discordapp.com/emojis/682858108862726191.gif?size=2048",
            text: "waya.one • Stressed out"
        },
        activities: [],
        createdTimestamp: 1615924806867,
        avatar: "https://cdn.waya.one/r/luna_lone1.gif",
        banner: "https://cdn.waya.one/r/sunset.gif",
        accentColor: "#ce3760"
    },
    cards: []
}

```

## b) Use an API
The best way to use this website is using an internal-API. <br />
You can set the API URL in the [`config.js`](https://github.com/Luna-devv/luna-site/blob/main/config.js#L3), please note that this should be only the domain name with the protocol like `https://api.waya.one`. The URL should **not** have the path in it like `https://api.waya.one/` or `https://api.waya.one/luna`! <br />

In the [`config.js`](https://github.com/Luna-devv/luna-site/blob/main/config.js#L4) you also need to set the PATH after the domain name. If you want to use the root domain just paste a `/` in there, otherwise put the full path in there for example `/luna`. At the end the URL plus the PATH __together__ should look like `[domain][path]` (eg.: `https://waya.one/luna`). <br />

The API needs to acknowledge the request with a [http `200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) status code in order to work. I personally recommend you also to fill in the [user Object](https://github.com/Luna-devv/luna-site/blob/main/README.md#L24) in case that the API should not respond. <br />

The API should respond with a JSON structure that looks like this: 
```json
{
    "status": 200,
    "message": "OK",
    "content": {
        "id": "821472922140803112",
        "username": "Lunish",
        "discriminator": "8888",
        "nickname": "Luna",
        "nickavatar": "https://cdn.discordapp.com/avatars/821472922140803112/a_5225c26456cd6d1d03b5f6af645d2488.gif?size=2048",
        "status": {
            "state": {
                "text": "dnd",
                "color": "#ED4245"
            },
            "emote": "https://cdn.discordapp.com/emojis/682858108862726191.gif?size=2048",
            "text": "waya.one • Stressed out"
        },
        "activities": [
            {
                "applicationId": "782685898163617802",
                "name": "Code",
                "url": null,
                "details": "Editing Luna site",
                "state": "Work on README.md:44:625",
                "createdTimestamp": 1643993478165,
                "timestamps": {
                    "start": 1643989464309,
                    "end": null
                },
                "assets": {
                    "large": {
                        "text": "Editing a MARKDOWN file",
                        "image": "https://cdn.discordapp.com/app-assets/782685898163617802/810647037598760991.png"
                    },
                    "small": {
                        "text": "Visual Studio Code - Insiders",
                        "image": "https://cdn.discordapp.com/app-assets/782685898163617802/810652286233083974.png"
                    }
                }
            }
        ],
        "createdTimestamp": 1615924806867,
        "avatar": "https://cdn.discordapp.com/avatars/821472922140803112/a_5225c26456cd6d1d03b5f6af645d2488.gif?size=2048",
        "banner": "https://cdn.discordapp.com/banners/821472922140803112/a_bb8eb557242c1923d82d86cef14bcc4a.gif?size=600",
        "accentColor": "#ffff"
    }
}
```

## Support
If you need help don't hesitate to [join our discord](https://waya.one/go/discord) and ask for help.
