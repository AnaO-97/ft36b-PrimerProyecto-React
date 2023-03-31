import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import characters, { Rick } from './data.js';
import About from './components/About.jsx';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {
   let   [access, setAccess]        = useState(false);
   const [characters,setCharacters] = useState([]);
   
   const navigate   = useNavigate();
   const {pathname} = useLocation(); 

   const EMAIL_bd    = "anaO@gmail.com";
   const PASSWORD_bd = "abcde1";
   // const example = {
   //    id      : 1,
   //    name    : 'Rick Sanchez',
   //    status  : 'Alive',
   //    species : 'Human',
   //    gender  : 'Male',
   //    origin  : {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };  

   function login (datosUsuario){
      const {email, password} = datosUsuario;

      //console.log(datosUsuario);
      // (email === EMAIL && password === PASSWORD)? setAccess(true):null;

      if(email === EMAIL_bd && password === PASSWORD_bd){
         setAccess(true);
         navigate('/home');
      }

      // console.log("acceso " ,access);
   }


   function onSearch(idRecibido) { 
      // console.log(idRecibido);

      let bandera = false;

      for (const personaje of characters) {
         // console.log(`almacen: ${personaje.id}`)
         if(personaje.id === parseInt(idRecibido))
            bandera = true;       
      }
      
      if(!bandera){
         axios(`https://rickandmortyapi.com/api/character/${idRecibido}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
      else
         window.alert('¡El personaje ya existe, intente con otro identificador!');   


   }

   function onClose(idRecibido) {
      setCharacters(characters.filter((charEvaluado) => charEvaluado.id !== parseInt(idRecibido,10)))      
      
   }

   // console.log(characters);

   //! ESTO ES PARTE DE LA REACT-INTRO
   // const handleonSearch = () => {
   //    window.alert(5);
   // }

   useEffect(()=>{
      !access && navigate('/')
   },[access]);

   return (
      <div className='App'>
       {/* //! -------------------------------------------------
           //! ESTO ES PARTE DE LA REACT-INTRO */}
         {/* <Card
            key     = {Rick.id}
            name    = {Rick.name}
            status  = {Rick.status}
            species = {Rick.species}
            gender  = {Rick.gender}
            origin  = {Rick.origin.name}
            image   = {Rick.image}
            onClose = {() => window.alert('Emulamos que se cierra la card')}
         />
   
         <hr />
         <SearchBar onSearch={handleonSearch} />
         <hr /> */}
         {/* //! -------------------------------------------------   */}                           
         {(pathname==="/home")?<p>SWEET HOME</p>:""}
         {(pathname==="/home")?<Nav onSearch = {onSearch}/>:""}

         <Routes>
            <Route path    = "/"
                   element = {<Form login = {login}/>}>
            </Route>

            <Route path    = "/home"                   
                   element = {<Cards
                                    characters = {characters}
                                    onClose    = {onClose}/>}>               
            </Route>           
           

            <Route path    = "/about"
                   element = {<About/>}>
            </Route>

            <Route  path    ='/favorites'
                    element = {<Favorites onClose = {onClose}/>}>
               
            </Route>

            <Route path    = "/detail/:detailId"
                   element = {<Detail/>}>
            </Route>         
         </Routes>                
      </div>
   );
}

export default App;
