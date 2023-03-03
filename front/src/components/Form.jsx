import { useState } from "react";
import validate from "./validation"

const Form = ({login}) =>{

    const [userData, setUserData] = useState({
        username: '',
        password: '' 
    });

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }


    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }
    const [errors, setErrors] = useState({
        username: '',
        password: '' 
    })

    return <form onSubmit={handleSubmit}>
        <label htmlFor="username">User: </label>
        <input type="text" name="username" onChange={handleInputChange} value={userData.username}/>
        {errors.username && <p>{errors.username}</p>}
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" onChange={handleInputChange} value={userData.password}/>
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Login</button>
    </form>
}

export default Form;