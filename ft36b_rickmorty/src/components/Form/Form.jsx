import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "./functions";
import validation from "./validation"

export default function Form (props){
    const navigate   = useNavigate();

    const [userData,setUserData] = useState({
        email    : "",
        password : ""        
    })

    const [errors,setErrors] = useState({
        email    : "",
        password : ""
    })

    const handleChange = (event)=>{
        const property = event.target.name;
        const value    = event.target.value;

        setUserData({
            ...userData,
            [property]:value
        })

        setErrors(
            validation({
                ...userData,
                [property]:value
            })
        )
    }  

    const handleSubmit = (event)=>{
        event.preventDefault();       
    
        const errosKeys = Object.keys(errors);

        if(!errosKeys.length){
          alert('Datos completos');
          setUserData({
            email    : "",
            password : ""      
          })
          setErrors({
            email    : "",
            password : ""      
          })
          
          if (login(userData))
            navigate('/home');  ;
        }
        else{
          alert('Debe llenar todos los campos')
        }
        
    }

    return (
        <div>            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL:</label>
                <input type         = "text" 
                       name         = "email"                     
                       autoComplete = "off"
                       placeholder  = "E-mail..."
                       onChange     = {handleChange}
                       value        = {userData.email}  
                       />
                <p>{(errors.email) && errors.email}</p>

                <label htmlFor="password">PASSWORD:</label>
                <input type         = "password" 
                       name         = "password"
                       autoComplete = "off"
                       placeholder  = "Password..."
                       onChange     = {handleChange}
                       value        = {userData.password}/>
                <p>{(errors.password) && errors.password}</p>

                
                <button type = 'submit'>Enviar</button>
            </form>                                    
        </div>
    )
}