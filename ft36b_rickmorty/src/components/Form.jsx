import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import validation from "./validation"

export default function Form (props){
    const [userData,setUserData] = useState({
        email    : "",
        password : ""
    })

    const [errors,setErrors] = useState({
        email    : "",
        password : ""
    })

    const handleChange = (event)=>{
        // console.log(event.target.value);
        // console.log(`${event.targer.name} --> ${event.targer.value}`);

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
        //console.log(`errores: ${errosKeys.length}`);

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
        }
        else
          alert('Debe llenar todos los campos')

        props.login(userData);
    }
    // console.log(props.login);

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