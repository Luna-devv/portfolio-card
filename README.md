## Basics
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Internal API
The best way to use this website is using an internal-API.
You can set the API url in the [`config.json`](https://github.com/Luna-devv/luna-site/blob/main/config.json#L2) and the URL path in the [`pages/index.jsx`](https://github.com/Luna-devv/luna-site/blob/main/pages/index.jsx#L96).
Here is an example on how the response data of your API should look like: 
```json
{
    "status": 200,
    "message": "OK",
    "content": {
        "id": "821472922140803112",
        "username": "Lunish",
        "discriminator": "8888",
        "nickname": "Luna",
        "nickavatar": "https://cdn.discordapp.com/guilds/923346903289184336/users/821472922140803112/avatars/f78efecce67311140d1cdcd67446768d.png?size=2048",
        "status": {
            "state": {
                "text": "idle",
                "color": "#FEE75C"
            },
            "emote": "https://cdn.discordapp.com/emojis/806899941200363582.png?size=2048",
            "text": "bla bla bla"
        },
        "activities": [
            {
                "applicationId": "463097721130188830",
                "name": "YouTube",
                "url": null,
                "details": "06 Sportfreunde Stiller - Es Muss Was Wunderbares Sein Von Mir Geliebt Zu Werden",
                "state": "Listening to a playlist",
                "createdTimestamp": 1640811066009,
                "timestamps": {
                    "start": null,
                    "end": 1640811170000
                },
                "assets": {
                    "large": {
                        "text": "PreMiD  v2.2.0 • Ext v2.2.3",
                        "image": "https://cdn.discordapp.com/app-assets/463097721130188830/513734690272968717.png"
                    },
                    "small": {
                        "text": "Playing",
                        "image": "https://cdn.discordapp.com/app-assets/463097721130188830/493061639994867714.png"
                    }
                }
            }
        ],
        "createdTimestamp": 1615924806867,
        "avatar": "https://cdn.discordapp.com/avatars/821472922140803112/22c9e9cbae3d9a7dffeb398c65b19582.png?size=1024",
        "banner": "https://cdn.discordapp.com/banners/821472922140803112/d5e6e489192492b43660a6a09359fd53.png?size=600",
        "accentColor": "#e5acbb"
    }
}
```

## Help
If you need help don't hesitate to [join our discord](https://waya.one/go/discord) and ask for help.
