
const getCharDetail = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(response => { 
            let obj = {
            id: response.id,
            image: response.image,
            name: response.name,
            gender: response.gender,
            species: response.species,
            status: response.status,
            origin: response.origin?.name
            }

        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(obj));
        
        })
        
        .catch(err => {
            res.writeHead(500, {'Content-type': 'text/plain'})
            res.end(err.message)
        })
}

module.exports = getCharDetail;