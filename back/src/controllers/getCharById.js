
// const getCharById = (res, id) => {

const { response } = require("express")

//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.json())
//         .then(response => { 
//             let obj = {
//             id: response.id,
//             image: response.image,
//             name: response.name,
//             gender: response.gender,
//             species: response.species 
//             }

//         res.writeHead(200, {'Content-type': 'application/json'})
//         res.end(JSON.stringify(obj));
        
//         })
        
//         .catch(err => {
//             res.writeHead(500, {'Content-type': 'text/plain'})
//             res.end(err.message)
//         })
// }   

// module.exports = getCharById

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const params = req.params

    fetch `https://rickandmortyapi.com/api/character/${params}`
        .then(res => res.json())
        console.log(res)
}
