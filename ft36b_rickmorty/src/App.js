import './App.css';

import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

import characters, { Rick } from './data.js';

import Nav from './components/Nav';
import { useState } from 'react';

import axios from 'axios'

function App() {
   const [characters,setCharacters] = useState([]);

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
         <Nav onSearch = {onSearch}/>

         <Cards characters = {characters} 
                onClose    = {onClose}
         />
         

         
      </div>
   );
}

export default App;
