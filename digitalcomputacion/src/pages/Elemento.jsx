import { useParams } from "react-router-dom";
function Elemento() {
    const {name, modelo, color} = useParams();
    return(
        <div>
        <li>Placas de video {name} </li>
        <li>Pantallas {modelo}</li>
        <li>Gabinetes  {color}</li>




        </div>
    );
};

export default Elemento;