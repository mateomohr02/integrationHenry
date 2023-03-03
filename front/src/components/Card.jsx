import { Link } from "react-router-dom";
import { addFav, delFav } from "../redux/actions.js"
import { useState, useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'

function Card(char) {   

   const dispatch = useDispatch()

   const myFavorites = useSelector((state) => state.myFavorites)

   const [isFav, setFav] = useState(false)


   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.detailId === char.detailId) setFav(true)
      });
   }, [myFavorites])
   

   const handleFavorite = () => {
      if (isFav) {
         setFav(false)
         dispatch(delFav(char.detailId))
      }

      if (!isFav) {
         setFav(true)
         dispatch(addFav(char))
      }
   }
   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
               <button onClick={handleFavorite}>🤍</button>
               )
         }
         <button onClick={char.onClose}>X</button>
         <Link to={`/detail/${char.detailId}`}><h2>{char.name}</h2></Link>
         <h2>{char.species}</h2>
         <h2>{char.gender}</h2>
         <img  src={char.image} alt={char.name}/> 
      </div>
   );
}

export default Card;
