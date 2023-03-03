import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'


import { useState, useEffect } from 'react'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'

function App () {


  const [access, setAccess] = useState(false)
  const navigate = useNavigate()


  const login = (userData) =>{
    if (userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
    else{
      alert('Usuario Inválido')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const username = 'mohr.mateo@gmail.com'
  const password = 'mam2002'

  const [characters, setCharacters] = useState([])
  const location = useLocation()


  const onSearch = (character) =>{
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  };

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  

  return (

    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login = {login}/> : <Nav onSearch={onSearch} />}

      <Routes>

      <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          
      <Route exact path="/about" element={<About/>}/>
              
      <Route exact path="/detail/:detailId" element={<Detail/>}/>

      <Route exact path="/myfavorites" element={<Favorites/>}/>

      </Routes>
      
      
    </div>
  )
}

export default App
