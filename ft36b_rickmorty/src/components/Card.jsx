import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { removeFav, addFav } from "../redux/actions";

function Card(props) {
  let [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);
      }
      else if(!isFav){
         setIsFav(true);
         props.addFav(props)
      }
   }

   const handleButtonClose = ()=>{
      props.onClose(props.id);
      props.removeFav(props.id);
   }

   useEffect (()=>{
      props.myFavorites.map((cardFavorita)=>{
         if(cardFavorita.id === props.id)
            setIsFav(true);
      })
   },[props.myFavorites])

   return (      
      <div  style={{border:"5px solid black",
                   width : "200px",
                   //display: "flex"
                  }} 
            key = {props.id}
         >

         <div>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }

            <button onClick={handleButtonClose}>X</button>
         </div>
         
         <div key = {props.id}>
            <Link to={`/detail/${props.id}`}>
               <h2> {props.name}    </h2>
            </Link> 

            <h2> {props.species} </h2>
            <h2> {props.gender}  </h2>

            {/* <h2> {props.origin}  </h2>
            <h2> {props.status}  </h2> */}
         </div>
         
         <img src   = {props.image} 
            alt   = "imagen no cargó" 
            width = "100px"
         />                          
      </div>
   );
}

const mapStateToProps = (state) => {
   return({
      myFavorites : state.myFavorites
   });
}

const mapDispatchToProps = (dispatch) =>{
   return({
      addFav    : (personaje)=>{dispatch(addFav(personaje))},
      removeFav : (id)=>{dispatch(removeFav(id))}
   })
};

export default connect (   
   mapStateToProps,
   mapDispatchToProps
)(Card);