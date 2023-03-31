export default function validation (objValidar){
    const {email, password} = objValidar;

    //console.log(objValidar);

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
//!------------------------------------------------------------

// const validar = {
//     email: "anaorozco@gmail.com",
//     password : "abcd1"
// }

// console.log(validation (validar));

// function login (datosUsuario){
//     let access = false;
    
//     const EMAIL_bd    = "anaorozco@gmail.com";
//     const PASSWORD_bd = "abcd1";

//     const {email, password} = datosUsuario;
    
//     //console.log(datosUsuario)
//     // console.log(`${EMAIL_bd} : ${email}`)
//     // console.log(`${PASSWORD_bd} : ${password}`)

//     // (email === EMAIL && password === PASSWORD)? setAccess(true):null;

//     if(email == EMAIL_bd && password == PASSWORD_bd)
//        access = true;

//     console.log(access);
//     return(`ENTRO???? --> ${access}`);
//  }

//  console.log(login(validar));
