const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {

    if ( req.url == "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }
    else if ( req.url == '/urunler') {
        fs.readFile("urunler.html", (err, data) => {
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }
    else {
        fs.readFile("404.html", (err, data) => {
            if (err) throw err;
            res.write(data)
            res.end()
        })
    } 
    
})

server.listen(3000, () => {
    console.log('başarılı http://localhost:3000')
})