import foto from '../Imagenes/FotoHojaVida.PNG'
import { Link } from 'react-router-dom';

export default function About (props){
    return(
    <div>        
        <br />

        <div id="Imgn">
            <img id  = "Foto" 
                 src = {foto}
                 style = {{width:"200px",
                           border:"2px solid black"}}
            />
            <div id="PieImg">
                <span> Desarrollador FullStack </span>        
            </div>            
        </div> 

        <p>Ana María Orozco</p>  
        <p>23 años</p>
        <p>Colombia</p>
        <p>Ingeniera Biomédica</p>
        <p>Universidad Autónoma de Manizales</p>

        <div>
            <Link to="/home">
                <button>GO BACK!</button>
            </Link>
        </div>

    </div>
    );
}