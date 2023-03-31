import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

function Favorites (props){
    const {myFavorites} = props;

    return (
        <>
            <h1>FAVORITES</h1>

            <p>
            {myFavorites.length && 
                myFavorites.map((personaje)=> {       
                        return (
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
                    }
                )
            }
            </p>        

            <div>
            <Link to="/home">
                <button>GO BACK!</button>
            </Link>
            </div>
        </>
    );
}

const mapStateToProps = (state) =>{
    return({
        myFavorites : state.myFavorites
    });
}

export default connect(
    mapStateToProps,
    null
)(Favorites);