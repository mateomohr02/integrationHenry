import { useSelector } from "react-redux";

const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites)
    
    return <div>
    {
        myFavorites.map(fav => {
            return <div>
                <h2>{fav.name}</h2>
                <h4>{fav.gender}</h4>
                <h4>{fav.species}</h4>
                <img src={fav.image} alt={fav.name} />
            </div>
        })
        
    }
    </div>
}

export default Favorites