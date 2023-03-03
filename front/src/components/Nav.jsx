import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


const Nav = ({onSearch}) =>{

    return(
        <div>
            <h1>Rick and Morty App</h1>
            <Link to='/'>Log Out</Link>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/myfavorites'>My Favorites</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    
    )
}

export default Nav;