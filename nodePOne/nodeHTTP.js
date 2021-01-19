const http = require('http')
const server = http.createServer()

server.on('request', (request, response) => {
    console.log('Receive Client response, the path is on: ' +request.url)
    if(request.url === '/person') {
        const shihao = {
            name: 'Shihao Lu',
            age: 25,
            sex: 'sex',
            hasHair: true
        }
        response.end(JSON.stringify(shihao))

    }

})

server.listen(3000, () => { 
    console.log('Server is on 3000')
})