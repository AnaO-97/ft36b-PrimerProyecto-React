import { useState } from 'react';
import Card from './Card';

export default function Cards(props) {  
   const {characters} = props;

   return ( 
      // <div style={{display:"flex", justifyContent:"space-between"}}></div>
      <>
         {characters.map((personaje)=>
               (                  
                  <Card 
                     id      = {personaje.id}
                     name    = {personaje.name}
                     status  = {personaje.status}
                     species = {personaje.species}
                     gender  = {personaje.gender}
                     origin  = {personaje.origin.name}
                     image   = {personaje.image}                     
                     onClose = {props.onClose}
                  />                  
               )               
            )
         }
      </>
   );

}