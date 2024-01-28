export default function validation (objValidar){
    const {email, password} = objValidar;

    const errors = {};

    const regEx = {
        email:     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,35}$/i,
        password : /^(?=.*\d).{6,10}$/i
    }
    
    if(email.length === 0 || email.length > 35)
        errors.email = "El correo ingresado no es válido";
    else if (!regEx.email.test(email))
        errors.email = "El correo ingresado no es válido";

    if (!regEx.password.test(password)) 
        errors.password = "La contraseña no es válida"
    
    return errors;
}