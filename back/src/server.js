// const http = require('http')
// const getCharById = require('./controllers/getCharById')
// const getCharDetail = require ('./controllers/getCharDetail')

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     let id = req.url.split("/").at(-1)    
//     //RUTAS
//     //GET CHAR BY ID
//     if (req.url.includes('onsearch')){        
//         getCharById(res, id)
//     }

//     // GET CHAR DETAIL
//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

// }).listen(3001, 'localhost')


const express = require('express')
const server = express()
const PORT = 3001;

server.listen(PORT, ()=>{
    console.log('Server raised in port ' + PORT);
})
