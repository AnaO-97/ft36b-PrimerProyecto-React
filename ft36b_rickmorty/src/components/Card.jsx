export default function Card(props) {
   return (
      <div style={{border:"5px solid black",
                   width : "300px",

                  }} 
         >

         <div>
            <button onClick={()=>props.onClose(props.idCard)}>X</button>
         </div>
         
         <div key = {props.key}>            
            <h2> {props.name}    </h2>
            <h2> {props.status}  </h2>
            <h2> {props.species} </h2>
            <h2> {props.gender}  </h2>
            <h2> {props.origin}  </h2>
         </div>
         

         <img src = {props.image} 
              alt = "imagen no cargó" 
              width="180px"
         />
         
         <br />
      </div>
   );
}
