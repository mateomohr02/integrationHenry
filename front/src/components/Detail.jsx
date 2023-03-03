import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Detail = () =>{

    const [character, setCharacter] = useState({})

    const { detailId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return <div>
        <button><Link to='/home'>Volver</Link></button>
        <h4>{character?.name}</h4>
        <h4>{character?.status}</h4>
        <h4>{character?.species}</h4>
        <h4>{character?.gender}</h4>
        {/* <h4>{character?.origin.name}</h4> */}
        <img src={character?.image} alt={character?.name} />
    </div>
}

export default Detail;