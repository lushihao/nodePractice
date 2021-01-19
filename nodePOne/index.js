const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (request, response) => {
    const url = request.url
    if (url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8')
                response.end('Failed to read file, please try again later.')
            } else {
                response.end(data)
            }
        })
    }
})

server.listen(3000)