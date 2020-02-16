const https = require('https')
const url = 'https://api.darksky.net/forecast/9e6569dfe32bc96cea4afda998d4c974/40,-75'
const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('end', () => {
    const body =JSON.parse(data)
    console.log(body)
})

request.end()
